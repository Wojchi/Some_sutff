import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setSubscribeStatus('submitting');
    
    try {
      const response = await fetch('https://hook.eu2.make.com/u6hs4epv67el2bf3k8arv46929u0nrz9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, formType: 'newsletter' })
      });

      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubscribeStatus('idle');
        }, 5000);
      } else {
        setSubscribeStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubscribeStatus('error');
    }
  };

  return (
    <footer className="relative py-16 border-t border-red-500/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">About Us</h3>
            <p className="text-gray-400">We provide AI integration, CRM solutions, and web development to help businesses streamline operations with intelligent technology</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-red-500 transition-colors">FAQs</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-red-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/ai-chat-agents" className="text-gray-400 hover:text-red-500 transition-colors">AI Chat Agents</a></li>
              <li><a href="/services/crm-ai-integration" className="text-gray-400 hover:text-red-500 transition-colors">CRM AI Integration</a></li>
              <li><a href="/services/website-creation" className="text-gray-400 hover:text-red-500 transition-colors">Website Creation</a></li>
              <li><a href="/services/ai-automation" className="text-gray-400 hover:text-red-500 transition-colors">AI Automation</a></li>
              <li><a href="/services/custom-ai-solutions" className="text-gray-400 hover:text-red-500 transition-colors">Custom AI Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Join the quantum revolution. Subscribe for AI insights.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800/50 text-white flex-grow border border-red-500/30 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit"
                disabled={subscribeStatus === 'submitting'}
                className={`bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 ${
                  subscribeStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {subscribeStatus === 'submitting' ? '...' : 'Join'}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="mt-2 text-sm text-green-400">Thank you for subscribing!</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="mt-2 text-sm text-red-400">Subscription failed. Please try again.</p>
            )}
          </div>
        </div>
        <div className="border-t border-red-500/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Quantum AI Agency. Shaping Tomorrow's Intelligence.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;