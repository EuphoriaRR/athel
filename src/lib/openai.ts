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
            content: `Gunakan informasi berikut untuk menjawab pertanyaan user secara akurat dan relevan:\n\n${contextText}`,
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
