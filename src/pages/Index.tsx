import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Bot, Zap, Settings, Users, Star, ArrowUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedParticles from '@/components/AnimatedParticles';
import TypewriterText from '@/components/TypewriterText';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingChatbot from '@/components/FloatingChatbot';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatCounter from '@/components/StatCounter';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: MessageCircle,
      title: "Chatbot AI",
      description: "Asisten percakapan cerdas yang melayani pelanggan 24/7",
      features: ["Pemrosesan Bahasa Alami", "Integrasi Multi-platform", "Kemampuan Belajar"]
    },
    {
      icon: Zap,
      title: "Otomatisasi Cerdas",
      description: "Sederhanakan operasi dengan otomatisasi alur kerja yang pintar",
      features: ["Optimasi Proses", "Otomatisasi Tugas", "Pengambilan Keputusan Cerdas"]
    },
    {
      icon: Bot,
      title: "Pengembangan AI Kustom",
      description: "Solusi AI yang disesuaikan khusus untuk kebutuhan bisnis Anda",
      features: ["Model Machine Learning", "Analitik Prediktif", "Computer Vision"]
    },
    {
      icon: Settings,
      title: "Integrasi AI",
      description: "Integrasikan AI dengan mulus ke dalam sistem yang sudah ada",
      features: ["Pengembangan API", "Integrasi Sistem", "Optimasi Performa"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      text: "Chatbot AI mereka meningkatkan kepuasan pelanggan kami sebesar 40% dan mengurangi waktu respons secara dramatis.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Innovation Labs",
      text: "Solusi otomatisasi mengubah efisiensi alur kerja kami. Benar-benar mengubah permainan!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "DataFlow Systems",
      text: "Tim profesional, teknologi terdepan, dan hasil yang luar biasa. Sangat direkomendasikan!",
      rating: 5
    },
    {
      name: "David Wilson",
      company: "StartupHub",
      text: "Pengembangan AI kustom melebihi ekspektasi kami. Produktivitas kami meningkat 60%!",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "RetailMax",
      text: "Layanan pelanggan yang luar biasa dan integrasi AI yang brilian. Penjualan kami berlipat ganda sejak implementasi.",
      rating: 5
    },
    {
      name: "James Martinez",
      company: "FinanceFlow",
      text: "Model analitik prediktif mereka telah merevolusi proses pengambilan keputusan kami.",
      rating: 5
    },
    {
      name: "Anna Roberts",
      company: "HealthTech Solutions",
      text: "Solusi AI luar biasa yang sempurna sesuai kebutuhan kesehatan kami. Benar-benar mengesankan!",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "EduTech Pro",
      text: "Implementasi chatbot meningkatkan keterlibatan siswa kami sebesar 75%. Hasil yang fantastis!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "LogiTech Systems",
      text: "Layanan profesional dari awal hingga akhir. Otomatisasi AI menghemat banyak waktu kami.",
      rating: 5
    }
  ];

  const stats = [
    { number: 50, label: "Proyek Selesai", suffix: "+" },
    { number: 99, label: "Kepuasan Klien", suffix: "%" },
    { number: 25, label: "Model AI Terpasang", suffix: "+" },
    { number: 24, label: "Dukungan Tersedia", suffix: "/7" }
  ];

  // Pagination logic
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = currentTestimonialPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const nextTestimonialPage = () => {
    setCurrentTestimonialPage((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonialPage = () => {
    setCurrentTestimonialPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToTestimonialPage = (page) => {
    setCurrentTestimonialPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <Navigation />
      
{/* Hero Section - Perbaikan untuk Mobile */}
<section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-8">
  <AnimatedParticles />
  <div className="container mx-auto text-center z-10 max-w-6xl">
    <div className="animate-fade-in space-y-6">
      {/* Title dengan responsive sizing yang lebih baik */}
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
        font-bold 
        mb-4 sm:mb-6
        bg-gradient-to-r from-white via-blue-200 to-cyan-400 
        bg-clip-text text-transparent
        leading-tight
        px-2
      ">
        <TypewriterText 
          text="Revolusikan Bisnis Anda" 
          className="
            typewriter-wrapper
            block w-full text-center
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            font-bold 
            bg-gradient-to-r from-white via-blue-200 to-cyan-400 
            bg-clip-text text-transparent
            leading-tight
          "
        />
      </h1>
      
      {/* Subtitle dengan spacing yang lebih baik */}
      <div className="animate-slide-in-left delay-1000">
        <h2 className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          mb-6 sm:mb-8
          text-blue-200
          leading-relaxed
          px-2
          max-w-4xl mx-auto
        ">
          dengan Inovasi Bertenaga AI
        </h2>
      </div>
      
      {/* Description dengan responsive text */}
      <div className="animate-slide-in-right delay-1500">
        <p className="
          text-base sm:text-lg md:text-xl
          mb-8 sm:mb-10
          text-gray-300 
          max-w-2xl mx-auto
          leading-relaxed
          px-4
        ">
          Transformasikan operasi Anda dengan solusi AI terdepan. Dari chatbot cerdas hingga sistem otomatisasi, kami membangun masa depan teknologi bisnis.
        </p>
      </div>
      
      {/* Button dengan responsive sizing */}
      <div className="animate-scale-in delay-2000">
        <Button 
          size="lg" 
          onClick={() => navigate('/demo-request')}
          className="
            bg-gradient-to-r from-blue-600 to-cyan-600 
            hover:from-blue-700 hover:to-cyan-700 
            text-white 
            px-6 sm:px-8 
            py-3 sm:py-4 
            text-base sm:text-lg
            rounded-full 
            transform transition-all 
            hover:scale-110 hover:shadow-2xl 
            animate-pulse-glow
            w-auto
            min-w-max
          "
        >
          Get Your FREE Demo
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <ScrollReveal>
        <section id="services" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Layanan AI Kami
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Temukan bagaimana solusi AI terdepan kami dapat mentransformasi operasi bisnis Anda dan mendorong pertumbuhan yang belum pernah ada sebelumnya.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 200}>
                  <ServiceCard {...service} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Mengapa Memilih Kami?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 150}>
                  <StatCounter {...stat} />
                </ScrollReveal>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Zap className="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-float" />
                    <h3 className="text-2xl font-bold mb-4 text-white">Teknologi Inovatif</h3>
                    <p className="text-gray-300">
                      Algoritma AI terdepan dan model machine learning yang dirancang untuk performa maksimal dan skalabilitas.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-float delay-1000" />
                    <h3 className="text-2xl font-bold mb-4 text-white">Tim Ahli</h3>
                    <p className="text-gray-300">
                      Spesialis AI dan konsultan berpengalaman bertahun-tahun dalam memberikan proyek-proyek yang sukses.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Settings className="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-float delay-2000" />
                    <h3 className="text-2xl font-bold mb-4 text-white">Solusi Khusus</h3>
                    <p className="text-gray-300">
                      Implementasi AI kustom yang dirancang khusus untuk kebutuhan dan tujuan bisnis Anda.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Studies Section with Pagination */}
      <ScrollReveal>
        <section id="testimonial" className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Apa Kata Klien Kami
              </h2>
              <p className="text-xl text-gray-300">
                Jangan hanya percaya kata kami - dengarkan dari bisnis yang telah bertransformasi dengan solusi AI kami.
              </p>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {currentTestimonials.map((testimonial, index) => (
                <ScrollReveal key={`${testimonial.name}-${currentTestimonialPage}`} delay={index * 200}>
                  <TestimonialCard {...testimonial} />
                </ScrollReveal>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col items-center space-y-6">
              {/* Navigation Buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevTestimonialPage}
                  className="bg-slate-800/50 text-white hover:bg-slate-700/70 hover:text-cyan-400 transition-all duration-300 border-0"
                  disabled={totalPages <= 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonialPage(index)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 ${
                        currentTestimonialPage === index
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-110'
                          : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 hover:text-white'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextTestimonialPage}
                  className="bg-slate-800/50 text-white hover:bg-slate-700/70 hover:text-cyan-400 transition-all duration-300 border-0"
                  disabled={totalPages <= 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Page Indicator */}
              <div className="text-sm text-gray-400">
                Menampilkan {startIndex + 1}-{Math.min(startIndex + testimonialsPerPage, testimonials.length)} dari {testimonials.length} testimoni
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal>
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 backdrop-blur-sm border border-blue-500/30">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Siap Mentransformasi Bisnis Anda?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan puluhan perusahaan yang telah merevolusi operasi mereka dengan solusi AI kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                size="lg" 
                onClick={() => navigate('/demo-request')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full transform transition-all hover:scale-110 hover:shadow-2xl animate-pulse-glow"
              >
                Get Your FREE Demo
              </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Athel AI
              </h3>
              <p className="text-gray-400">
                Revolusi bisnis dengan teknologi AI terdepan dan solusi inovatif.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Chatbot AI</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Otomatisasi</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Pengembangan Kustom</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Integrasi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Tentang Kami</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Kontak</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@athel.ai</li>
                <li>+62 851 1922 7248</li>
                <li>Medan, Sumatera Utara</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Solusi AI. Semua hak dilindungi. | Kebijakan Privasi | Syarat Layanan</p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <FloatingChatbot />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full p-3 shadow-lg animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;