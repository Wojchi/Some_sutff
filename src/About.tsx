import React from 'react';
import { ArrowRight, Target, Zap, Shield, Users, Brain, Rocket } from 'lucide-react';
import Layout from './components/Layout';
import { AnimatedSection } from './components/AnimatedSection';

function About() {
  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "500+", label: "Projects Delivered" },
    { number: "24/7", label: "AI Support" },
    { number: "50+", label: "Enterprise Clients" }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Precision Integration",
      description: "Seamlessly integrate AI solutions into your existing business infrastructure with minimal disruption."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols ensuring your data and AI operations remain protected."
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Rapid Deployment",
      description: "Quick implementation of AI solutions with immediate impact on your business operations."
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: "Intelligent Automation",
      description: "Smart automation that learns and adapts to your unique business processes."
    }
  ];

  return (
    <Layout>
      <AnimatedSection delay="700">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6">
                <span className="gradient-text">Pioneering</span> the Future of AI
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to make advanced AI technology accessible and practical for businesses of all sizes. Our solutions bridge the gap between cutting-edge AI capabilities and real-world business needs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-effect p-6 rounded-xl animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Introduction */}
        <div className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect p-8 rounded-2xl mb-12">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2023, Quantum AI Agency emerged from a vision to democratize artificial intelligence for businesses. We recognized that while AI technology was advancing rapidly, many companies struggled to harness its potential effectively.
                </p>
                <p className="text-gray-300">
                  Today, we're proud to be at the forefront of AI integration, specializing in CRM enhancement, intelligent chat solutions, and AI-powered web development. Our team of experts combines deep technical knowledge with practical business acumen to deliver solutions that drive real results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="glass-effect p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 animate-float"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                    alt="Future of AI"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h2>
                  <p className="text-gray-300 mb-6">
                    We envision a future where AI technology seamlessly integrates into every business operation, enhancing efficiency and driving innovation. Our goal is to be the bridge that connects businesses to this future, making advanced AI solutions accessible and practical.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Rocket className="w-6 h-6 text-red-500" />
                      <span className="text-gray-300">Pushing the boundaries of AI innovation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-red-500" />
                      <span className="text-gray-300">Building lasting client partnerships</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Brain className="w-6 h-6 text-red-500" />
                      <span className="text-gray-300">Continuous learning and improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can drive your business forward.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="/services" 
                  className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow flex items-center gap-2"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border border-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/10 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}

export default About;