import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Bot, Users, Zap, Shield } from 'lucide-react';
import Layout from '../components/Layout';

function AIChat() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const features = [
    {
      icon: <Bot className="w-6 h-6 text-red-500" />,
      title: "Natural Language Processing",
      description: "Advanced AI that understands context and nuance in customer conversations"
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Seamless Human Handoff",
      description: "Intelligent escalation to human agents for complex queries"
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without staffing constraints"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Secure Conversations",
      description: "Enterprise-grade security for all customer interactions"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Setup",
      description: "We analyze your business needs and configure the AI chat agent accordingly"
    },
    {
      number: "02",
      title: "Knowledge Integration",
      description: "Your business data and FAQs are integrated into the AI's knowledge base"
    },
    {
      number: "03",
      title: "Training & Testing",
      description: "The AI is trained on your specific use cases and thoroughly tested"
    },
    {
      number: "04",
      title: "Deployment & Monitoring",
      description: "Launch your AI chat agent with continuous performance monitoring"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;
    const fieldName = name || id;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Send data to the webhook
      const response = await fetch('https://hook.eu2.make.com/u6hs4epv67el2bf3k8arv46929u0nrz9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <MessageSquare className="w-20 h-20 text-red-500" />
            </div>
            <h1 className="text-6xl font-bold mb-6">
              AI Chat <span className="gradient-text">Agents</span>
            </h1>
            <p className="text-xl text-gray-300">
              Intelligent conversational AI that transforms customer support with 24/7 availability and human-like understanding
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Overview</h2>
            <p className="text-gray-300 mb-6">
              Our AI Chat Agents represent the next evolution in customer service technology. By combining advanced natural language processing with machine learning capabilities, these intelligent agents provide immediate, accurate responses to customer inquiries while maintaining a natural, conversational tone.
            </p>
            <p className="text-gray-300">
              Whether handling routine queries, processing requests, or escalating complex issues to human agents, our AI Chat Agents ensure consistent, high-quality customer service around the clock.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-effect p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 animate-float"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="glass-effect p-8 rounded-2xl relative">
                  <div className="text-6xl font-bold text-red-500/10 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Customer Service?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI Chat Agents can enhance your customer support experience.
            </p>
            <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your needs"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                required
              ></textarea>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow flex items-center gap-2 mx-auto ${
                  formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Request Consultation'}
                {formStatus !== 'submitting' && <ArrowRight className="w-5 h-5" />}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                  Thank you! Your request has been sent successfully.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                  There was an error sending your request. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AIChat;