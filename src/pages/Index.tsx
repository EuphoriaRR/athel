import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Bot, Zap, Settings, Users, Star, ArrowUp, ChevronDown } from 'lucide-react';
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
      title: "AI Chatbots",
      description: "Intelligent conversational assistants that engage customers 24/7",
      features: ["Natural Language Processing", "Multi-platform Integration", "Learning Capabilities"]
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Streamline operations with smart workflow automation",
      features: ["Process Optimization", "Task Automation", "Intelligent Decision Making"]
    },
    {
      icon: Bot,
      title: "Custom AI Development",
      description: "Tailored AI solutions built specifically for your business needs",
      features: ["Machine Learning Models", "Predictive Analytics", "Computer Vision"]
    },
    {
      icon: Settings,
      title: "AI Integration",
      description: "Seamlessly integrate AI into your existing systems",
      features: ["API Development", "System Integration", "Performance Optimization"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      text: "Their AI chatbot increased our customer satisfaction by 40% and reduced response time dramatically.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Innovation Labs",
      text: "The automation solutions transformed our workflow efficiency. Absolutely game-changing!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "DataFlow Systems",
      text: "Professional team, cutting-edge technology, and exceptional results. Highly recommended!",
      rating: 5
    }
  ];

  const stats = [
    { number: 50, label: "Projects Completed", suffix: "+" },
    { number: 99, label: "Client Satisfaction", suffix: "%" },
    { number: 25, label: "AI Models Deployed", suffix: "+" },
    { number: 24, label: "Support Availability", suffix: "/7" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <AnimatedParticles />
        <div className="container mx-auto text-center z-10 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
              <TypewriterText text="Revolutionize Your Business" />
            </h1>
            <div className="animate-slide-in-left delay-1000">
              <h2 className="text-2xl md:text-3xl mb-8 text-blue-200">
                with AI-Powered Innovation
              </h2>
            </div>
            <div className="animate-slide-in-right delay-1500">
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Transform your operations with cutting-edge AI solutions. From intelligent chatbots to automation systems, we build the future of business technology.
              </p>
            </div>
            <div className="animate-scale-in delay-2000">
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

      {/* Services Section */}
      <ScrollReveal>
        <section id="services" className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our cutting-edge AI solutions can transform your business operations and drive unprecedented growth.
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
                Why Choose Us?
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
                    <h3 className="text-2xl font-bold mb-4 text-white">Innovative Technology</h3>
                    <p className="text-gray-300">
                      Cutting-edge AI algorithms and machine learning models designed for maximum performance and scalability.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-float delay-1000" />
                    <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
                    <p className="text-gray-300">
                      Dedicated AI specialists and consultants with years of experience in delivering successful projects.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Settings className="w-16 h-16 mx-auto mb-4 text-cyan-400 animate-float delay-2000" />
                    <h3 className="text-2xl font-bold mb-4 text-white">Tailored Solutions</h3>
                    <p className="text-gray-300">
                      Custom AI implementations designed specifically for your business requirements and objectives.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Studies Section */}
      <ScrollReveal>
        <section id="testimonial" className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Don't just take our word for it - hear from businesses that have transformed with our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 200}>
                  <TestimonialCard {...testimonial} />
                </ScrollReveal>
              ))}
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our AI solutions.
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
                AI Solutions
              </h3>
              <p className="text-gray-400">
                Revolutionizing businesses with cutting-edge AI technology and innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Chatbots</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Automation</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Custom Development</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@athel.ai</li>
                <li>+62 851 1922 7248</li>
                <li>Medan, Sumatera Utara</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
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