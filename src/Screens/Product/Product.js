import React from 'react';
import './Product.css';
import img from '../../Assert/Rectangle 8.jpeg';
import star from '../../Assert/Star.svg';

const Products = () => {
  const videoData = [
    { name: '', link: 'https://youtube.com/shorts/5xTCrRVqXoc' },
    { name: '', link: 'https://youtube.com/shorts/a9_ZGlr8A1U' },
    { name: '', link: 'https://youtube.com/shorts/q8Y5kkcR3xc' },
    { name: '', link: 'https://www.youtube.com/shorts/Rq5K6MT2c8Q' },
    { name: '', link: 'https://www.youtube.com/shorts/pNsQRFsht3s' },
    { name: '', link: 'https://youtube.com/shorts/SV3AAuc7IWA' }
  ];

  return (
    <section id="products">
      <div className="journey-container">
        <div className="journey-text">
          <h2>OUR JOURNEY</h2>
          <h1>From Humble Beginnings to Trusted Tradition</h1>
          <p>
            Suvarnam is the brainchild of twin brothers Samarveer and Tavish. Both had various dietary issues and lactose intolerance. To the extent that at the age of 16, Tavish had to lose his gallbladder and had pancreatitis. He was advised by a dietician to move to pure desi ghee and not eat any other medium of oil.  This lead the family to search for pure desi ghee and soon the discovery of the pure ghee from Mathura became a product to share with the public at large.

            Samarveer and Tavish are still at school but this has become a project of personal passion, to share their product with the customers at large.

            The quest began in finding the perfect bottle of ghee made using traditional methods, without impurities. The journey ended at Mathura, which is traditionally known for dairy in our Indian history, due to Lord Krishna. Using the significance of Mathura as a guidance and Lord Krishna’s blessings, we have worked to create a brand focusing on purity and quality.

            From the beginning, the focus has been on using the finest locally-sourced ingredients and time-honoured techniques to create a ghee that is rich in flavour and nutrients. As the name suggests, the aim is to be the gold standard of ghee and never compromising on quality.

            Suvarnam is not mass produced and is aimed at customers who put their health first and are looking for a ghee that’s pure as can be. We will not be tempted by volume but aim to provide quality always.

            Suvarnam is being trusted by a growing number of customers and the feedback has been extremely positive. Almost 99% of the initial customers are repeat customers now.

            Our priority will always be the customer’s wellbeing.
          </p>
        </div>
        <div className="journey-image">
          <img src={img} alt="Our Journey" />
        </div>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <h3>TESTIMONIAL</h3>
          <h2>What Our Customers Are Saying</h2>
        </div>
        <div className="testimonials-cards">
          {videoData.map((video, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-video-placeholder">
                <iframe
                  src={`https://www.youtube.com/embed/${video.link.split('/').pop()}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`YouTube Video - ${video.name}`}
                ></iframe>
              </div>
              <h4>{video.name}</h4>
              {/* <div className="rating">
                <img src={star} alt="Star Rating" />
                <p>4.73</p>
              </div>
              <p>
                I have been using [Brand Name] ghee for the past year, and I must say it’s the best I’ve ever had. The taste is rich and authentic.
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
