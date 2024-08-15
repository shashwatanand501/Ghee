// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import AboutUs from './Screens/AboutUs/AboutUs';
import ShopNow from './Screens/ShopNow/ShopNow';
import Products from './Screens/Product/Product';
import FAQ from './Screens/Fnq/Fnq';
import Popup from './Component/PopUp/PopUp';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupTitle, setPopupTitle] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const showPrivacyContent = () => {
    setPopupTitle("Privacy Policy");
    setPopupContent(
      <div>
 This privacy policy sets out how ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED uses and protects any information that you give ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED when you visit their website and/or agree to purchase from them.
  
 ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
  
 ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
  
 We may collect the following information:
  
 Name
  
 Contact information including email address
  
 Demographic information such as postcode, preferences and interests, if required
  
 Other information relevant to customer surveys and/or offers
  
 What we do with the information we gather
  
 We require this information to understand your needs and provide you with a better service, and for the following reasons:
  
 Internal record keeping.
  
 We may use the information to improve our products and services.
  
 We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
  
 From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
  
 We are committed to ensuring that your information is secure. To prevent unauthorised access or disclosure we have put in suitable measures.
  
 How we use cookies
  
 A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
  
 We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
  
 Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
  
 You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
  
 Controlling your personal information
  
 You may choose to restrict the collection or use of your personal information in the following ways:
  
 whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
  
 if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@orangegoat.net
  
 We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
  
 If you believe that any information, we are holding on you is incorrect or incomplete, please write to 10, THIRD FLOOR, N BLOCK ROAD, ZAMRUDPUR, NEAR GURUDWARA SOUTH DELHI South Delhi DELHI 110048. or contact us at 9810314220 or info@orangegoat.net as soon as possible. We will promptly correct any information found to be incorrect.
      </div>
    );
    togglePopup();
  };

  const showTermsContent = () => {
    setPopupTitle("Terms and Conditions");
    setPopupContent(
      <div>
 For these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED, whose registered/operational office is 10, THIRD FLOOR, N BLOCK ROAD, ZAMRUDPUR, NEAR GURUDWARA SOUTH DELHI South Delhi DELHI 110048. "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
  
 Your use of the website and/or purchase from us are governed by following Terms and Conditions:
  
 The content of the pages of this website is subject to change without notice.
  
 Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
  
 Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.
  
 Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
  
 All trademarks reproduced in our website which are not the property of, or licensed to, the operator is acknowledged on the website.
  
 Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
  
 From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.
  
 You may not create a link to our website from another website or document without ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED’s prior written consent.
  
 Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
  
 We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time
      </div>
    );
    togglePopup();
  };

  const showCancellationRefundContent = () => {
    setPopupTitle("Cancellation and Refund Policy");
    setPopupContent(
      <div>
ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED believes in helping its customers as far as possible and has therefore a liberal cancellation policy. Under this policy:
 
Cancellations will be considered only if the request is made within same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
 
ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
 
In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products.
 
In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
 
In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
 
In case of any Refunds approved by the ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED, it’ll take 6-8 days for the refund to be processed to the end customer.
      </div>
    );
    togglePopup();
  };

  const showShippingDeliveryContent = () => {
    setPopupTitle("Shipping and Delivery Policy");
    setPopupContent(
      <div>
    For International buyers, orders are shipped and delivered through registered international courier companies and/or international speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. ORANGE GOAT CONSULTANTS AND MARKETING PRIVATE LIMITED is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 9810314220 or info@orangegoat.net.
      </div>
    );
      togglePopup();
  };

  return (
    <div className="App">
      <Header />
      <AboutUs />
      <ShopNow />
      <Products />
      <FAQ />
      <Footer 
        onPrivacyClick={showPrivacyContent} 
        onTermsClick={showTermsContent} 
        onCancellationRefundClick={showCancellationRefundContent} 
        onShippingDeliveryClick={showShippingDeliveryContent} 
      />
      <Popup isOpen={isPopupOpen} onClose={togglePopup} title={popupTitle} content={popupContent} />
    </div>
  );
}

export default App;
