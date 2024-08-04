import React from 'react';

const PaymentPage = () => {
  const handlePayment = () => {
    const paystack = window.PaystackPop; // Use Paystack from the global window object
    const payment = paystack.setup({
      key: 'your-public-key-here', // Replace with your Paystack public key
      email: 'customer@example.com', // Replace with the customer’s email
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
    <div className="payment-page my-24 h-100">
      <h1>Payment Page</h1>
      <button onClick={handlePayment} className="btn-primary">
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
