import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-effect rounded-lg overflow-hidden mb-4">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left transition-colors hover:text-red-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
      </button>
      <div
        className={`px-6 transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        } overflow-hidden`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
}

export default FAQItem