import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import mainImage from '../assets/images/mainImage.png';
import background1 from '../assets/images/background1.jpg';
import image7 from '../assets/images/image7.png';

import { BsLightningFill, BsBellFill, BsShieldFill, BsBullseye, BsGraphUp, BsBarChart, BsPerson, BsArrowRightCircle, BsArrowLeft, BsArrowRight, BsInstagram, BsTwitter, BsWhatsapp, BsFacebook, BsTelephoneFill } from 'react-icons/bs';

const testimonials = [
  { bgColor: "bg-blue-400", name: "James", quote: "FinancAi has completely transformed how I manage my finances. Highly recommend!", finance: "With FinancAi, financial freedom is within reach." },
  { bgColor: "bg-orange-400", name: "Max", quote: "A game changer in financial planning!", finance: "This app keeps me on track effortlessly." },
  { bgColor: "bg-green-400", name: "Patricia", quote: "Managing expenses has never been easier!", finance: "I can now plan and save with confidence." },
  { bgColor: "bg-purple-400", name: "Helena", quote: "AI-powered insights that actually help!", finance: "I feel more in control of my money than ever." },
  { bgColor: "bg-red-400", name: "Grace", quote: "Finally, a financial tool that makes sense!", finance: "Investing and saving simplified." },
  { bgColor: "bg-yellow-400", name: "Clement", quote: "Personalized alerts make tracking seamless!", finance: "Budgeting is no longer a hassle." }
];

const pricingPlans = [
  { title: "Basic", price: "$9.99/mo", benefits: ["AI Insights", "Basic Budget Tracking", "Limited Notifications"] },
  { title: "Intermediary", price: "$19.99/mo", benefits: ["Advanced Insights", "Full Budget Tracking", "Custom Notifications"] },
  { title: "Pro", price: "$29.99/mo", benefits: ["Premium AI Insights", "Investment Tracking", "Exclusive Alerts"] },
  { title: "Enterprise", price: "Contact Us", benefits: ["Custom AI Models", "Dedicated Support", "Enterprise Security"] }
];

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < testimonials.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
{/* main Section */}
<section
  id="hero"
  className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-20 md:py-32 bg-cover bg-center"
>
  {/* Left Vertical Line (Orange) - Lowered Position */}
  <div className="absolute left-4 md:left-10 top-[50%] transform -translate-y-1/2 h-24 md:h-56 w-1 md:w-2 bg-orange-500"></div>

  {/* Text Section */}
  <div className="md:w-1/2 space-y-4 md:space-y-6 md:pl-12 relative">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">
      Master Your Finances <br /> With AI-Powered <br /> Insights.
    </h1>
    <p className="text-gray-600 text-base md:text-lg">
      Automate, analyze, and transact in FinancAi with{" "}
      <a
        href="https://www.stellar.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Stellar
      </a>
      &nbsp;at its core. Connect to real-time insights to create fast, safe, and smart financial experiences.
    </p>
    <div className="space-x-3 md:space-x-4">
      <button className="bg-orange-500 text-white px-5 md:px-6 py-2 rounded-full hover:bg-green-700 transition-all">
        Get Started
      </button>
      <button className="bg-gray-800 text-white px-5 md:px-6 py-2 rounded-full hover:bg-gray-900 transition-all">
        Learn More
      </button>
    </div>
    <div className="mt-4 md:mt-6">
      <Slideshow />
    </div>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 text-center md:text-right relative">
    <img
      src={mainImage}
      alt="Main Visual"
      className="w-4/5 md:w-3/4 mx-auto md:ml-auto"
    />
    {/* Right Vertical Line (Blue) */}
    <div className="absolute right-4 md:right-10 top-3/4 transform -translate-y-1/2 h-24 md:h-56 w-1 md:w-2 bg-blue-500"></div>
  </div>
</section>

      {/* Key Features Section */}
      <section 
  id="features" 
  className="bg-cover bg-center py-12 px-6 md:py-16 md:px-10 rounded-t-[60px] md:rounded-t-[80px] rounded-bl-[40px] md:rounded-bl-[80px] rounded-br-[40px] md:rounded-br-[80px] overflow-hidden relative"
  style={{ backgroundImage: `url(${background1}) `}}
>
  <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8 md:mb-12">
    Key Features
  </h2>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
    {[
      { icon: BsLightningFill, title: "AI Insights", text: "Leverage AI for deep financial insights." },
      { icon: BsBellFill, title: "Personalized Notifications", text: "Get custom alerts for better tracking." },
      { icon: BsShieldFill, title: "Data Security", text: "Top-tier security ensures safety." },
      { icon: BsBullseye, title: "Goal Tracking", text: "Set and achieve financial goals." },
      { icon: BsGraphUp, title: "Budget Tracking", text: "Manage expenses effectively." },
      { icon: BsBarChart, title: "Investment Insights", text: "Smart investment recommendations." }
    ].map(({ icon: Icon, title, text }, index) => (
      <div 
        key={index} 
        className="bg-white bg-opacity-80 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-md"
      >
        <Icon className="h-7 w-7 md:h-8 md:w-8 text-blue-500 mb-3 md:mb-4" />
        <h3 className="text-lg md:text-xl font-semibold text-black mb-1 md:mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-black">
          {text}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:py-16 md:px-10">
  {/* Header with Title and Navigation */}
  <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
    <h2 
      className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent text-center md:text-left"
      style={{ backgroundImage: "linear-gradient(rgb(216, 199, 255), rgb(76, 58, 148))" }}
    >
      Testimonials from some of our users
    </h2>
    <div className="flex space-x-4">
      <BsArrowLeft className="text-gray-600 text-2xl cursor-pointer hover:text-black" onClick={handlePrev} />
      <BsArrowRight className="text-gray-600 text-2xl cursor-pointer hover:text-black" onClick={handleNext} />
    </div>
  </div>

  {/* Testimonials Section */}
  <div className="flex overflow-hidden space-x-4 md:space-x-6">
    {testimonials.slice(startIndex, startIndex + (window.innerWidth < 768 ? 2 : 3)).map(({ bgColor, name, quote, finance }, index) => (
      <div key={index} className={`${bgColor} rounded-xl p-4 md:p-6 text-white shadow-lg w-1/2 md:w-1/3`}>
        <div className="flex items-center space-x-3 mb-3 md:mb-4">
          <BsPerson className="text-xl md:text-2xl" />
          <h3 className="text-md md:text-lg font-semibold">{name}</h3>
        </div>
        <p className="italic mb-3 md:mb-4 text-sm md:text-base">"{quote}"</p>
        <p className="mb-3 md:mb-4 text-sm md:text-base">{finance}</p>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <BsArrowRightCircle className="text-lg md:text-xl" />
          <span className="text-sm md:text-base">Read the story</span>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination Dots */}
  <div className="flex justify-center mt-4 space-x-2">
    {testimonials.map((_, i) => (
      <div key={i} className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${i >= startIndex && i < startIndex + (window.innerWidth < 768 ? 2 : 3) ? 'bg-gray-900' : 'bg-gray-400'}`}></div>
    ))}
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" 
  className="py-12 px-6 md:py-16 md:px-10 bg-gradient-to-r from-purple-300 to-blue-300 
             rounded-t-[50px] md:rounded-t-[80px]">
  {/* Section Title */}
  <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10 md:mb-12">
    Pricing Plans
  </h2>

  {/* Pricing Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    {pricingPlans.map(({ title, price, benefits }, index) => (
      <div key={index} className="bg-white p-5 sm:p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-xl md:text-2xl font-bold text-gray-800">{price}</p>
        <ul className="mt-3 sm:mt-4 space-y-2 text-gray-600 text-sm md:text-base">
          {benefits.map((benefit, i) => (
            <li key={i}>✓ {benefit}</li>
          ))}
        </ul>
        <button className="mt-3 sm:mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-all">
          Choose Plan
        </button>
      </div>
    ))}
  </div>

  {/* Follow & Contact Section */}
  <div className="mt-12 bg-purple-100 bg-opacity-80 rounded-3xl p-6 flex items-center">
    {/* Logo Image */}
    <img src={image7} alt="FinancAi Logo" className="h-16 w-16 md:h-20 md:w-20 mr-4" />

    {/* Text & Icons */}
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Follow FinancAi</h3>
      <div className="flex space-x-3 text-blue-500 text-2xl mb-4">
        <BsInstagram />
        <BsTwitter />
        <BsFacebook />
        <BsWhatsapp />
      </div>
      <p className="text-black mb-2">Or talk to us directly</p>
      <div className="flex items-center text-blue-500 text-lg">
        <BsTelephoneFill className="mr-2" />
        <span>+123 456 7890</span>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;