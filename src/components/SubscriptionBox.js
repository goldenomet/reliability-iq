import React from 'react';

const SubscriptionBox = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
  };

  return (
    <section className="px-6 py-12 bg-black text-white">
      <h2 className="text-3xl font-bold text-center">Subscribe to Updates</h2>
      <form
        onSubmit={handleSubscribe}
        className="mt-6 flex flex-col items-center space-y-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded border border-gray-300 w-3/4"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscriptionBox;
