'use client';
import React, { useState } from 'react';

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState({
    name: 'User Portfolio',
    description: 'This is a user portfolio.',
    image: 'default-image-url.jpg',
  });

  const [history, setHistory] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handlePortfolioChange = () => {
    const newPortfolio = {
      name: prompt('Enter new portfolio name', portfolio.name),
      description: prompt('Enter new description', portfolio.description),
      image: prompt('Enter new image URL', portfolio.image),
    };

    setPortfolio(newPortfolio);
    const dateTime = new Date().toLocaleString();
    setHistory([
      ...history,
      { action: 'Portfolio updated', dateTime },
    ]);
  };

  const handlePaymentChange = () => {
    const newPayment = prompt('Enter payment details');
    setPaymentDetails(newPayment);
    const dateTime = new Date().toLocaleString();
    setHistory([
      ...history,
      { action: 'Payment details updated', dateTime },
    ]);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    alert('You have been signed out!');
  };

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">You have been signed out</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>

        {/* Portfolio Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          <div className="bg-white p-6 rounded-md shadow-md text-black">
            <h3 className="text-xl font-semibold">{portfolio.name}</h3>
            <p>{portfolio.description}</p>
            <img src={portfolio.image} alt="Portfolio" className="mt-4 w-1/2 rounded-lg" />
            <button
              onClick={handlePortfolioChange}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Edit Portfolio
            </button>
          </div>
        </section>

        {/* History Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <div className="bg-white p-6 rounded-md shadow-md text-black">
            {history.length > 0 ? (
              history.map((entry, index) => (
                <div key={index} className="border-b py-2">
                  <p>{entry.action} - <span className="text-gray-500">{entry.dateTime}</span></p>
                </div>
              ))
            ) : (
              <p>No history available</p>
            )}
          </div>
        </section>

        {/* Payment Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <div className="bg-white p-6 rounded-md shadow-md text-black">
            <p>{paymentDetails ? `Payment details: ${paymentDetails}` : 'No payment details provided'}</p>
            <button
              onClick={handlePaymentChange}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Update Payment Details
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
