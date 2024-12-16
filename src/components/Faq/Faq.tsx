"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "How we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* FAQ Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-base sm:text-lg font-medium">{faq.question}</h3>
                <span className="text-xl sm:text-2xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-sm sm:text-base text-gray-600 mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Faq;

