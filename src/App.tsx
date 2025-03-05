import React, { useState, useEffect } from 'react';
import { Bot, Brain, Code, MessageSquare, Mail, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import FAQItem from './components/FAQItem';
import { AnimatedSection } from './components/AnimatedSection';

function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed, isTyping]);

  return displayText;
}

function App() {
  const titleText = "Next Generation";
  const displayText = useTypewriter(titleText, 100);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const companies = [
    { id: 2, logo: "/assets/Brillenwerkstatt Davos.png", alt: "Brillenwerkstatt Davos" },
    { id: 3, logo: "/assets/Esmate_Backpack.png", alt: "Esmate Backpack" }
  ];

  const features = [
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: "CRM Integration", 
      description: "Seamless AI-powered CRM solutions that transform customer relationships" 
    },
    { 
      icon: <MessageSquare className="w-8 h-8" />, 
      title: "AI Chat Agents", 
      description: "Intelligent conversational agents that provide 24/7 customer support" 
    },
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Website Creation", 
      description: "Next-gen websites with cutting-edge design and functionality" 
    },
    { 
      icon: <Bot className="w-8 h-8" />, 
      title: "AI Integration", 
      description: "Custom AI solutions seamlessly integrated into your platform" 
    },
  ];

  const faqs = [
    {
      question: "What types of AI services do you offer?",
      answer: "We provide AI integration for CRM systems, AI-powered chat agents, website creation with AI features, and custom AI solutions tailored to your business needs."
    },
    {
      question: "How can AI improve my business efficiency?",
      answer: "AI enhances your CRM by automating data entry, analyzing customer interactions, and providing predictive insights, helping you optimize sales and support."
    },
    {
      question: "Can AI chat agents replace human support?",
      answer: "AI chat agents can handle routine inquiries, automate responses, and assist customers 24/7, but for complex issues, they can seamlessly escalate to human support."
    },
    {
      question: "How does AI integration benefit my website?",
      answer: "AI can personalize user experiences, automate content generation, enhance search capabilities, and improve customer engagement through smart chatbots."
    },
    {
      question: "Do I need technical knowledge to integrate AI into my business?",
      answer: "No, we handle the entire integration process, ensuring AI seamlessly fits into your workflows without requiring technical expertise."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://hook.eu2.make.com/u6hs4epv67el2bf3k8arv46929u0nrz9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <Layout>
      <AnimatedSection delay="700">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4 py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-bold mb-6 relative">
                <span className="inline-block min-h-[1.2em]">{displayText}</span>
                <span className="gradient-text"> AI Solutions</span>
                <span className={`inline-block w-0.5 h-8 bg-red-500 ml-1 align-middle ${displayText.length === titleText.length ? 'animate-pulse' : ''}`}></span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Pioneering the future of enterprise AI with quantum-inspired solutions
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow"
              >
                <span className="flex items-center gap-2">
                  Launch Your Future <Zap className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-effect p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-red-500 mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-16 gradient-text">
              Trusted By
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-16">
              {companies.map((company) => (
                <img
                  key={company.id}
                  src={company.logo}
                  alt={company.alt}
                  className="h-16 md:h-20 filter-none object-contain opacity-50 hover:opacity-100 transition-opacity transform hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Quantum AI FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Connect with the Future</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="glass-effect p-8 rounded-2xl animate-float">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all animate-pulse-border"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all animate-pulse-border"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all animate-pulse-border"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 animate-glow ${
                        formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      {formStatus !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                    </button>
                    
                    {formStatus === 'success' && (
                      <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    
                    {formStatus === 'error' && (
                      <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                  </form>
                </div>
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="glass-effect p-6 rounded-2xl flex items-start gap-4 hover:transform hover:scale-105 transition-all">
                    <div className="bg-red-500/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-300">future@aiagency.com</p>
                      <p className="text-gray-300">support@aiagency.com</p>
                    </div>
                  </div>
                  <div className="glass-effect p-6 rounded-2xl flex items-start gap-4 hover:transform hover:scale-105 transition-all">
                    <div className="bg-red-500/20 p-3 rounded-lg">
                      <Bot className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">AI Chat Support</h3>
                      <p className="text-gray-300">24/7 Intelligent Chat Assistant</p>
                      <p className="text-gray-300">Instant responses to your questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}

export default App;