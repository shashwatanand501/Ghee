import React from 'react';
import Card from '../../Component/Card/Card';
import Product1 from '../../Assert/Product 1.jpeg';
import Product2 from '../../Assert/Product 2.jpeg';
import Product3 from '../../Assert/product3.png';


import './ShopNow.css';

const products = [
  {
    image: Product1,
    rating: "4.73",
    description: "Cow Ghee",
    deliveryTime: "Delivery in 2 to 4 working days",
    originalPrice: "2236",
    discountedPrice: "1899",
    dis: `Natural Bilona Method Cow Ghee
    Discover the pure, rich taste of Natural Bilona Method Cow Ghee. Made from the finest quality milk of grass-fed cows, our ghee is meticulously crafted using the traditional Bilona method, ensuring maximum nutrition and authentic flavor. Ideal for cooking, baking, or as a wholesome addition to your diet, our cow ghee is rich in essential fatty acids, vitamins, and antioxidants. Elevate your culinary experience with the smooth, creamy texture and golden hue of Natural Bilona Method Cow Ghee, bringing a touch of natural goodness to every dish.`
  },
  {
    image: Product2,
    rating: "4.80",
    description: "Desi ghee",
    deliveryTime: "Delivery in 2 to 4 working days",
    originalPrice: "1520",
    discountedPrice: "1299",
    dis: `Experience the purity and health benefits of our Natural Bilona Method Desi Ghee. Made using traditional techniques, this ghee is crafted from the milk of grass-fed cows. The bilona method involves churning curd, separating butter, and then heating it slowly to produce rich, aromatic ghee. Packed with essential nutrients and free from additives, our Desi Ghee adds a delightful flavor to your dishes while promoting overall wellness. Ideal for cooking, baking, or simply as a spread, it's a natural choice for those who value authenticity and quality in their food.`
  },
  {
    image: Product3,
    rating: "4.80",
    description: "A2 Cow Ghee",
    deliveryTime: "Delivery in 2 to 4 working days",
    originalPrice: "2860",
    discountedPrice: "2600",
    dis: `Bilona Method A2 Cow Ghee is a premium-quality clarified butter made from the milk of A2 grass-fed cows. It is traditionally prepared using the Vedic method, ensuring rich flavor and nutritional benefits.`
  }
];

const ShopNow = () => {
  return (
    <section id="shop-now">
      <h2>Check our products</h2>
      <div className='card_container'>
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            rating={product.rating}
            description={product.description}
            deliveryTime={product.deliveryTime}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            dis={product.dis}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopNow;
