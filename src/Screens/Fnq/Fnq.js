import React, { useState } from 'react';
import './Fnq.css';
import UpArrow from '../../Assert/up.svg';
import DownArrow from '../../Assert/down-arrow.svg';

const Fnq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "What makes Suvranam ghee different from other brands?", answer: "Our ghee is made using traditional methods and the finest locally-sourced ingredients." },
    { question: "Is your ghee organic?", answer: "Yes, our ghee is 100% organic and made from the milk of grass-fed cows." },
    { question: "How should I store ghee?", answer: "Ghee should be stored in a cool, dark place, and it does not require refrigeration." },
    { question: "What are the health benefits of ghee?", answer: "Ghee is rich in vitamins A, D, E, and K, and is known for its anti-inflammatory properties." },
    { question: "Can ghee be used for cooking?", answer: "Yes, ghee has a high smoke point, making it ideal for cooking at high temperatures." },
    { question: "Is ghee lactose-free?", answer: "Ghee is free of lactose and casein, making it suitable for those with lactose intolerance." },
  ];

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <section id="faq">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-container">
        {displayedFAQs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                <img src={activeIndex === index ? UpArrow : DownArrow} alt="Toggle arrow" />
              </span>
            </div>
            <div className="faq-answer">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'View All'}
      </button>
    </section>
  );
};

export default Fnq;
