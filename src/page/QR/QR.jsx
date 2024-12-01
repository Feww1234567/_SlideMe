import React from "react";

const Payment = () => {
  const handlePayment = () => {
    alert("Payment Sent!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Header */}
      <header className="flex items-center w-full max-w-md mb-6">
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </button>
        <h1 className="text-lg font-bold text-gray-800 mx-auto">Payment</h1>
      </header>

      {/* Prompt Pay Input */}
      <section className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 mb-6">
        <label htmlFor="promptPay" className="block text-gray-600 text-sm font-medium mb-2">
          Prompt Pay Number
        </label>
        <input
          id="promptPay"
          type="text"
          placeholder="Enter Prompt Pay Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
      </section>

      {/* QR Code Section */}
      <section className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col items-center">
        <p className="text-gray-600 text-sm font-medium mb-4">QR Code Prompt Pay</p>
        <div className="bg-gray-50 p-4 rounded-md shadow">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://promptpay.io/1234567890"
            alt="QR Code"
            className="w-48 h-48 object-cover"
          />
        </div>
      </section>

      {/* Send Button */}
      <button
        className="w-full max-w-sm bg-green-500 text-white font-bold py-3 rounded-full hover:bg-green-600 transition-all"
        onClick={handlePayment}
      >
        Send
      </button>
    </div>
  );
};

export default Payment;
