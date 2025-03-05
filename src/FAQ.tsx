import React from 'react';
import { ArrowRight } from 'lucide-react';
import Layout from './components/Layout';
import FAQItem from './components/FAQItem';
import { AnimatedSection } from './components/AnimatedSection';

function FAQ() {
  const faqs = [
    {
      question: "What AI services do you offer?",
      answer: "We provide AI integration for CRM systems, AI-powered chat agents, website creation with AI features, and custom AI automation solutions."
    },
    {
      question: "Can AI improve my business efficiency?",
      answer: "Yes! AI automates repetitive tasks, enhances customer engagement, and provides data-driven insights to optimize your workflow."
    },
    {
      question: "Do I need technical knowledge to use AI in my business?",
      answer: "No, we handle the entire integration process, making AI accessible and easy to use without requiring technical expertise."
    },
    {
      question: "How long does AI integration take?",
      answer: "The timeframe varies depending on the complexity of your requirements, but most integrations take between a few days to a few weeks."
    },
    {
      question: "How can I get started with your AI services?",
      answer: "Simply contact us through our website, and we'll discuss your needs and create a tailored AI solution for your business."
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
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our AI services and integrations
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1),_transparent_70%)]"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you with any questions about our AI solutions
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 animate-glow"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}

export default FAQ;