import React from 'react';
import { Link } from'react-router-dom'
// component
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import ScrollToTop from '../components/Hero/ScrollToTop';

const PaymentPage = () => {
  const handlePayment = () => {
    const paystack = window.PaystackPop;
    const payment = paystack.setup({
      key: 'pk_test_7cb1f367bd285b24a26920fda0b175a43856e5cc', // Replace with your Paystack public key
      email: 'ogunyankinjohnson@example.com', // Replace with the customer’s email
      amount: 500000, // Amount in kobo (e.g., 500000 kobo = ₦5000)
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Generate a random reference number
      callback: function (response) {
        alert('Success. Transaction ref is ' + response.reference);
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });
    payment.openIframe();
  };

  return (
    <>
    <ScrollToTop />
      <Hero hero='roomsHero'>
        <Banner hero='roomsHero'>
          <Link to='/' className='btn-primary'>
          About Us
          </Link>
        </Banner>
      </Hero>
      <div className="payment-page my-24 h-100">
      <h1>Payment Page</h1>
      <button onClick={handlePayment} className="btn-primary">
        Pay Now
      </button>
    </div>
    </>
  );
};

export default PaymentPage;
