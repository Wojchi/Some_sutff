import React, { useState } from 'react';
import { Brain, ArrowRight, BarChart as ChartBar, Database, Clock, Target } from 'lucide-react';
import Layout from '../components/Layout';

function CRMIntegration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    crm: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const features = [
    {
      icon: <ChartBar className="w-6 h-6 text-red-500" />,
      title: "Predictive Analytics",
      description: "AI-powered insights for better decision making and customer understanding"
    },
    {
      icon: <Database className="w-6 h-6 text-red-500" />,
      title: "Automated Data Entry",
      description: "Intelligent automation of routine data entry tasks"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Real-time Updates",
      description: "Instant synchronization of customer data across all platforms"
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: "Smart Lead Scoring",
      description: "AI-driven lead prioritization for improved conversion rates"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "We evaluate your current CRM setup and identify integration opportunities"
    },
    {
      number: "02",
      title: "Custom Configuration",
      description: "AI models are configured to match your specific business processes"
    },
    {
      number: "03",
      title: "Integration",
      description: "Seamless integration with your existing CRM system"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous monitoring and refinement of AI performance"
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
          crm: '',
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
              <Brain className="w-20 h-20 text-red-500" />
            </div>
            <h1 className="text-6xl font-bold mb-6">
              CRM <span className="gradient-text">AI Integration</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transform your CRM into an intelligent system that predicts customer needs and automates workflows
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
              Our CRM AI Integration service revolutionizes how businesses interact with their customer data. By implementing advanced AI algorithms, we transform your CRM from a simple database into an intelligent system that provides actionable insights and automates routine tasks.
            </p>
            <p className="text-gray-300">
              Whether you're using Salesforce, HubSpot, or any other major CRM platform, our AI integration enhances its capabilities with predictive analytics, automated data entry, and intelligent customer insights.
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
            <h2 className="text-4xl font-bold mb-6 gradient-text">Enhance Your CRM Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can transform your CRM into a powerful business intelligence tool.
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
                id="crm"
                name="crm"
                value={formData.crm}
                onChange={handleInputChange}
                placeholder="Current CRM Platform"
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

export default CRMIntegration;