import React from 'react';
import { MessageSquare, Brain, Code, Zap, Settings, ArrowRight, Check } from 'lucide-react';
import Layout from './components/Layout';
import { AnimatedSection } from './components/AnimatedSection';

function Services() {
  const services = [
    {
      icon: <MessageSquare className="w-12 h-12 text-red-500" />,
      title: "AI Chat Agents",
      description: "Intelligent conversational agents that provide 24/7 customer support with human-like understanding.",
      benefits: [
        "Natural language processing for human-like interactions",
        "Seamless escalation to human support when needed",
        "Multi-language support",
        "Custom knowledge base integration",
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Brain className="w-12 h-12 text-red-500" />,
      title: "CRM AI Integration",
      description: "Transform your CRM into an intelligent system that predicts customer needs and automates workflows.",
      benefits: [
        "Predictive lead scoring",
        "Automated data entry and enrichment",
        "Customer behavior analysis",
        "Personalized engagement recommendations",
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Code className="w-12 h-12 text-red-500" />,
      title: "Website Creation",
      description: "Next-generation websites with integrated AI features for enhanced user experience and engagement.",
      benefits: [
        "AI-powered content personalization",
        "Smart search functionality",
        "Automated content generation",
        "User behavior analysis",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation that learns and adapts.",
      benefits: [
        "Workflow optimization",
        "Document processing automation",
        "Intelligent task scheduling",
        "Error detection and prevention",
      ],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Settings className="w-12 h-12 text-red-500" />,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed specifically for your unique business challenges and goals.",
      benefits: [
        "Custom model development",
        "Integration with existing systems",
        "Scalable architecture",
        "Ongoing optimization",
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
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
                AI-Powered <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Transform your business with our cutting-edge AI services. From intelligent automation to 
                seamless integration, we deliver solutions that drive growth and efficiency.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`glass-effect p-8 rounded-2xl animate-float ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="mb-6">{service.icon}</div>
                      <h2 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h2>
                      <p className="text-gray-300 mb-8">{service.description}</p>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-red-500 mt-1" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <a 
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className={`overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,68,68,0.1),_transparent_50%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can transform your business operations and drive growth.
              </p>
              <div className="flex gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/about" 
                  className="bg-transparent border border-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/10 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Learn About Us
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

export default Services;