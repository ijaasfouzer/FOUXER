import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Share2,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Glasses,
  Code,
  Globe,
  Layers,
  Users,
  ArrowLeft,
  ArrowRight,
  Star,
  MessageCircle
} from 'lucide-react';
import { Navigation } from './components/Navigation';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "We've partnered with several agencies before, but none have delivered results like FOUXER. Their expertise in digital marketing and innovative approach helped us increase our online sales by 50%. The team's attention to detail and commitment to our success has truly set them apart.",
      author: "Darrell Steward",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      text: "The results we've seen since partnering with FOUXER have been remarkable. Their team's creative strategies and proactive approach to problem-solving have helped us stay ahead in a competitive market. We've seen an increase in lead generation and a stronger online presence.",
      author: "Ralph Edwards",
      position: "CTO & Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      text: "FOUXER's innovative approach to web development and digital marketing has transformed our business. Their team's dedication to excellence and ability to deliver cutting-edge solutions has exceeded our expectations.",
      author: "Sarah Chen",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      title: "Healthcare App",
      category: "Mobile Development",
      description: "Patient-centric healthcare management system"
    },
    {
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
      title: "Social Campaign",
      category: "Marketing",
      description: "Viral social media marketing campaign"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      title: "Analytics Dashboard",
      category: "Web Development",
      description: "Real-time data visualization platform"
    },
    {
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80",
      title: "Fitness Tracker",
      category: "Mobile Development",
      description: "AI-powered personal fitness companion"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      title: "Brand Strategy",
      category: "Marketing",
      description: "Comprehensive digital brand transformation"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/94776131010?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-brand bg-clip-text text-transparent">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-dark-300 mb-8 animate-fade-in-up delay-200">
              We help businesses thrive in the digital age with cutting-edge solutions
              that drive growth and innovation. Partner with us to unlock your full potential.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-brand text-white rounded-full
                hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-dark-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-brand bg-clip-text text-transparent">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                id: 'web',
                icon: <Globe className="h-12 w-12" />,
                title: 'Website Development',
                description: 'Custom websites that engage visitors and drive conversions.'
              },
              {
                id: 'social',
                icon: <Share2 className="h-12 w-12" />,
                title: 'Social Media Marketing',
                description: 'Strategic social media campaigns that build brand awareness.'
              },
              {
                id: 'mobile',
                icon: <Smartphone className="h-12 w-12" />,
                title: 'Mobile App Development',
                description: 'Native and cross-platform apps that deliver exceptional UX.'
              },
              {
                id: 'ar',
                icon: <Glasses className="h-12 w-12" />,
                title: 'Augmented Reality',
                description: 'Immersive AR experiences that revolutionize user interaction.'
              }
            ].map((service, index) => (
              <Link 
                to={`/services/${service.id}`}
                key={index} 
                className="group p-8 rounded-2xl bg-dark-800/50 hover:bg-dark-800 transition-all duration-500
                  hover:scale-105 hover:shadow-xl animate-float"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-brand text-white transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-dark-300 mb-6">{service.description}</p>
                <span className="text-brand-purple hover:text-brand-orange font-medium inline-flex items-center group">
                  Learn More 
                  <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-brand bg-clip-text text-transparent">About FOUXER</h2>
            
            <div className="flex flex-col items-center mb-16">
              <div className="relative w-64 h-64 mb-12">
                <div className="absolute inset-0 rounded-full bg-gradient-brand animate-pulse-slow"></div>
                <img
                  src="https://raw.githubusercontent.com/ijaas2003/ijaas2003/main/IMG_3595.jpg"
                  alt="Ijaas Fouzer"
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-dark-950"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-brand-purple mb-2">Ijaas Fouzer</h3>
                <p className="text-lg text-dark-300 italic">CEO & Founder</p>
              </div>
              
              <div className="max-w-3xl text-center mt-8">
                <p className="text-lg text-dark-300 leading-relaxed mb-6">
                  Ijaas Fouzer, Co-Founder of FOUXER, established the company in 2023 with a vision to transform digital experiences through innovative mobile solutions. Under his leadership, FOUXER has developed cutting-edge applications that blend augmented reality with practical business functionality. His strategic approach to technology integration has enabled the company to deliver custom solutions across various industries, focusing on creating seamless user experiences that drive business growth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  number: "200+", 
                  label: "Projects Completed",
                  icon: <Code className="h-8 w-8 mb-4" />
                },
                { 
                  number: "50+", 
                  label: "Happy Clients",
                  icon: <Layers className="h-8 w-8 mb-4" />
                },
                { 
                  number: "15+", 
                  label: "Team Members",
                  icon: <Users className="h-8 w-8 mb-4" />
                }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-dark-800/50 hover:bg-dark-800 
                    transform hover:scale-105 transition-all duration-500 animate-rotate-y"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-brand-purple group-hover:text-brand-orange transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-dark-300 text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-dark-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-brand bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500
                  animate-fade-in-up bg-dark-900/50 hover:bg-dark-900"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-sm font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-dark-200 text-sm mb-4">
                      {project.description}
                    </p>
                    <button className="inline-flex items-center text-brand-purple hover:text-brand-orange transition-colors duration-300">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-orange/10 opacity-50"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Discover How We've Helped Our{' '}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">Clients Achieve</span>
                  {' '}Their Goals.
                </h2>
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full border border-dark-700 hover:border-brand-purple text-dark-300 hover:text-brand-purple transition-colors duration-300"
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full border border-dark-700 hover:border-brand-purple text-dark-300 hover:text-brand-purple transition-colors duration-300"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700">
                  <div className="flex items-start gap-4 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-brand-orange fill-brand-orange" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-dark-200 mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonials[currentTestimonial].author}
                      </h4>
                      <p className="text-dark-300 text-sm">
                        {testimonials[currentTestimonial].position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-brand bg-clip-text text-transparent">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <div className="mb-8 p-6 rounded-2xl bg-dark-800/50 border border-dark-700">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-semibold text-white">Send via WhatsApp</h3>
                </div>
                <p className="text-dark-300 mb-4">
                  Fill out the form below and click "Send Message" to contact us directly via WhatsApp.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white
                      focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white
                      focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white
                      focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-200"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg
                    transition-all duration-300 hover:scale-[1.02] transform hover:shadow-lg
                    flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <MessageCircle className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-dark-300">+94 77 613 1010</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <Mail className="h-6 w-6 text-brand-purple group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-dark-300">ijaasfouzer@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <Phone className="h-6 w-6 text-brand-orange group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-dark-300">+94 77 613 1010</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <MapPin className="h-6 w-6 text-brand-purple group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-dark-300">Rajagiriya, Colombo</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-dark-400 hover:text-brand-purple transform hover:scale-110 transition-all duration-200">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="" className="text-dark-400 hover:text-brand-orange transform hover:scale-110 transition-all duration-200">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-dark-400 hover:text-brand-purple transform hover:scale-110 transition-all duration-200">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 py-12 border-t border-dark-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Navigation className="h-8 [&_path]:fill-white" />
            </div>
            <div className="text-dark-400">
              © {new Date().getFullYear()} FOUXER. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;