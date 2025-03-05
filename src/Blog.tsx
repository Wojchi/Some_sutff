import React, { useState } from 'react';
import Layout from './components/Layout';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';

function Blog() {
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
        body: JSON.stringify({ email, formType: 'blog-newsletter' })
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
    <Layout>
      <AnimatedSection delay="700">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6">
                Quantum AI <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-xl text-gray-300">
                Stay updated with the latest trends, insights, and innovations in AI technology
              </p>
            </div>
          </div>
        </div>

        {/* No Posts Message */}
        <div className="py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-effect p-16 rounded-2xl text-center">
              <p className="text-2xl text-gray-300">
                No blog posts available at the moment. Check back soon for updates!
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights in AI technology
              </p>
              <form className="max-w-md mx-auto flex gap-4" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-6 py-3 rounded-lg bg-gray-800/50 text-white border border-red-500/30 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
                <button 
                  type="submit"
                  disabled={subscribeStatus === 'submitting'}
                  className={`bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 animate-glow whitespace-nowrap ${
                    subscribeStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {subscribeStatus === 'submitting' ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
              {subscribeStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  Thank you for subscribing to our newsletter!
                </div>
              )}
              {subscribeStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                  There was an error with your subscription. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}

export default Blog;