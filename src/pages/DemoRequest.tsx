import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Clock, Phone, Mail, User, Building, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/pages/integrations/supabase/client';
import ScrollReveal from '@/components/ScrollReveal';


const DemoRequest = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Perintah untuk menggulir ke paling atas halaman
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting demo request:', formData);
      
      const { data, error } = await supabase
        .from('demo_requests')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || null,
            message: formData.message || null
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        console.error('Supabase error:', error.message); // Log the error message
        // You might also want to log error.code and error.status for more details
        console.error('Supabase error code:', error.code);
        
        toast({
          title: "Error!",
          description: "Terjadi kesalahan saat mengirim permintaan demo. Silakan coba lagi.",
          variant: "destructive"
        });
        return;
      }

      console.log('Demo request submitted successfully:', data);
      
      toast({
        title: "Demo Request Berhasil Dikirim!",
        description: "Terima kasih! Kami akan menghubungi Anda dalam 24 jam untuk menjadwalkan demo gratis.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error!",
        description: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Panduan lengkap solusi AI",
    "Konsultasi yang dipersonalisasi",
    "Roadmap implementasi khusus",
    "Sesi tanya jawab langsung",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-cyan-400 hover:text-cyan-300 mb-8 animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="animate-slide-in-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                  Dapatkan Demo Gratis Anda
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Rasakan kekuatan solusi berbasis AI yang disesuaikan untuk bisnis Anda. 
                  Pesan demo personal Anda hari ini dan temukan bagaimana kami dapat mentransformasi operasi Anda.
                </p>
              </div>

              {/* Demo Details */}
              <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 backdrop-blur-sm animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-400">
                    <Clock className="w-6 h-6 mr-3" />
                    Demo Gratis 7 Hari
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold">100% Gratis Tanpa Biaya</span>
                    </div>
                    <p className="text-black">
                      Dapatkan akses lengkap ke solusi AI kami selama 7 hari. Gratis!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="animate-fade-in delay-500">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Yang Akan Anda Dapatkan:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center animate-slide-in-left" style={{ animationDelay: `${600 + index * 100}ms` }}>
                      <Sparkles className="w-5 h-5 mr-3 text-cyan-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <Card className="bg-slate-800/50 border-slate-700 animate-fade-in delay-1000">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-white">Butuh Bantuan?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                      +62 851 1922 7248
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                      support@athel.ai
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal delay={300}>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-white">
                  Ajukan Permintaan Demo Anda
                </CardTitle>
                <p className="text-center text-gray-400">
                  Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 24 jam
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white flex items-center">
                      <User className="w-4 h-4 mr-2 text-cyan-400" />
                      Nama Lengkap *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-cyan-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                      Alamat Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Masukkan alamat email Anda"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-cyan-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                      Nomor Telepon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Masukkan nomor telepon Anda"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-cyan-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white flex items-center">
                      <Building className="w-4 h-4 mr-2 text-cyan-400" />
                      Nama Perusahaan
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Masukkan nama perusahaan Anda"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-cyan-400 focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Pesan Tambahan (Opsional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ceritakan kepada kami tentang kebutuhan spesifik atau pertanyaan Anda..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-cyan-400 focus:border-cyan-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </div>
                    ) : (
                      'Ajukan Demo Gratis'
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi dan ketentuan layanan kami.
                  </p>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;