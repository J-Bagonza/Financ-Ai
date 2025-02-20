import React from 'react';
import mpesa from '../assets/images/M-PESA.png';
import mastercard from '../assets/images/mastercard.png';
import shopify from '../assets/images/shopify.png';
import venmo from '../assets/images/Venmo-4.png';
import paypal from '../assets/images/paypal.png';
import '../styles/slideshow.css';

const Slideshow = () => {
  return (
    <div className="slideshow-wrapper mt-10">
      <div className="slideshow-container">
        {/* Duplicating images for a smooth loop */}
        {[mpesa, mastercard, shopify, venmo, paypal, mpesa, mastercard, shopify, venmo, paypal].map((img, index) => (
          <img key={index} src={img} alt="Brand Logo" />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;