import { createClient } from "@supabase/supabase-js";

// Inisialisasi Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function askOpenAI(message: string): Promise<string> {
  try {
    // 1. Generate embedding dari pertanyaan user
    const embeddingResponse = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-embedding-ada-002",
        input: message,
      }),
    });

    if (!embeddingResponse.ok) {
      throw new Error(`Embedding API error: ${embeddingResponse.statusText}`);
    }

    const embeddingResult = await embeddingResponse.json();
    const queryEmbedding = embeddingResult.data?.[0]?.embedding as number[];

    if (!queryEmbedding || !Array.isArray(queryEmbedding)) {
      return "Gagal membuat embedding untuk pertanyaan.";
    }

    // 2. Ambil knowledge relevan dari Supabase dengan RPC "match_knowledge"
    const { data: matches, error } = await supabase.rpc("match_knowledge", {
      query_embedding: queryEmbedding,
      match_threshold: 0.78,
      match_count: 5,
    });

    if (error) {
      console.error("Supabase RPC error:", error);
      return "Gagal mengambil konteks dari knowledge base.";
    }

    // Pastikan matches ada dan merupakan array
    if (!matches || !Array.isArray(matches)) {
      return "Tidak ada konteks yang ditemukan dalam knowledge base.";
    }

    // Gabungkan konten knowledge relevan sebagai konteks
    const contextText = matches.map((doc: any) => doc.content).join("\n\n");
    

    // 3. Kirim pesan ke ChatGPT dengan konteks knowledge
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `Agen AI Athel AI bertugas untuk membantu pengguna memahami layanan, solusi, dan manfaat yang ditawarkan oleh perusahaan secara jelas, ramah, dan profesional. Dalam berkomunikasi, AI harus menggunakan bahasa yang sederhana, mudah dimengerti oleh semua kalangan, termasuk pemilik bisnis yang tidak memiliki latar belakang teknis. Hindari istilah rumit kecuali disertai penjelasan singkat dalam bahasa sehari-hari. Nada bicara harus tetap profesional namun hangat, menciptakan kesan bersahabat dan solutif.

Saat menjawab pertanyaan, agen AI harus merujuk pada konten dari knowledge base. Jika pengguna bertanya tentang siapa Athel AI dan apa yang perusahaan ini lakukan, AI harus menjelaskan bahwa Athel AI adalah perusahaan konsultan bisnis dan penyedia solusi AI & automasi yang membantu pemilik bisnis dalam keuangan, pemasaran, dan alur kerja bisnis. Agen juga harus dapat menjelaskan dua pilar layanan utama: pertama, konsultasi bisnis yang mencakup strategi pertumbuhan, optimasi workflow, dan perbaikan keuangan; kedua, solusi AI dan automasi seperti chatbot, integrasi WhatsApp, email otomatis, hingga sistem pelaporan otomatis.

Jika pengguna menanyakan contoh penerapan nyata, AI harus menyampaikan beberapa studi kasus yang relevan, seperti pengiriman status invoice secara otomatis, pengingat WhatsApp untuk pelanggan, asisten bisnis yang menjawab pertanyaan keuangan dan marketing, atau chatbot yang membantu onboarding pelanggan baru.

Pada bagian keunggulan, AI harus menekankan alasan mengapa pelanggan sebaiknya memilih Athel AI. Gunakan poin-poin seperti: layanan yang mudah dipahami dan digunakan, tidak butuh pengetahuan teknis tinggi, tim berisi gabungan ahli bisnis dan teknolog AI, solusi yang sangat fleksibel dan bisa menyesuaikan dengan sistem yang sudah dimiliki pelanggan, serta dukungan jangka panjang setelah sistem dijalankan. Yang paling penting, AI harus menyampaikan bahwa calon pelanggan bisa mencoba demo gratis selama 7 hari tanpa biaya apapun — ini menjadi nilai jual utama yang harus selalu diinformasikan jika pengguna menunjukkan minat atau ingin mencoba terlebih dahulu.

Jika pengguna bertanya apakah bisa mendapatkan solusi yang benar-benar sesuai dengan kebutuhannya, AI harus menjawab dengan tegas bahwa solusi dari Athel AI selalu bisa disesuaikan (custom), dan platform yang bisa diintegrasikan sangat beragam seperti Gmail, WhatsApp, Google Sheets, Notion, CRM, hingga API internal bisnis.

Ketika mendeteksi bahwa pengguna tertarik untuk mencoba atau bertanya tentang demo, agen AI harus dengan sigap menjelaskan bahwa tersedia demo gratis selama 7 hari, tanpa biaya apapun. Pengguna bisa langsung mencobanya lewat chatbot, atau diarahkan untuk menghubungi tim melalui WhatsApp, atau mengatur jadwal Zoom Meeting jika diperlukan.

Terakhir, agen AI harus selalu memberikan respons yang jujur dan akurat. Jangan pernah membuat janji yang tidak tercantum dalam knowledge base. Bila tidak memiliki informasi yang cukup untuk menjawab pertanyaan, arahkan pengguna untuk menghubungi tim secara langsung. Tugas AI adalah memberikan pengalaman interaksi yang meyakinkan, profesional, dan membantu pengguna merasa yakin bahwa Athel AI adalah mitra bisnis yang tepat. Gunakan informasi berikut untuk menjawab pertanyaan user secara akurat dan relevan:\n\n${contextText}`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`ChatGPT API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content ?? "Tidak ada jawaban dari ChatGPT.";
  } catch (err) {
    console.error("Error in askOpenAI:", err);
    return "Terjadi kesalahan saat memproses permintaan.";
  }
}
