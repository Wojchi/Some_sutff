import React, { useState } from 'react';
import { Mail, ArrowRight, Bot } from 'lucide-react';
import Layout from './components/Layout';
import { AnimatedSection } from './components/AnimatedSection';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
          subject: '',
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
      <AnimatedSection delay="700">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-300">
                Have questions or need AI solutions? Contact us, and we'll get back to you soon.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="glass-effect p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                      <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    
                    {formStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="glass-effect p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <a 
                        href="mailto:contact@quantumai.com"
                        className="flex items-start gap-4 hover:transform hover:scale-105 transition-all group"
                      >
                        <div className="bg-red-500/20 p-3 rounded-lg group-hover:bg-red-500/30 transition-colors">
                          <Mail className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email</h3>
                          <p className="text-gray-300">contact@quantumai.com</p>
                          <p className="text-gray-300">support@quantumai.com</p>
                        </div>
                      </a>

                      <div className="flex items-start gap-4">
                        <div className="bg-red-500/20 p-3 rounded-lg">
                          <Bot className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">AI Support</h3>
                          <p className="text-gray-300">24/7 AI-powered assistance</p>
                          <p className="text-gray-300">Instant responses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ CTA Section */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Check out our FAQ section for quick answers to common questions about our AI solutions
              </p>
              <a 
                href="/faq"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow"
              >
                Visit FAQ
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}

export default Contact;