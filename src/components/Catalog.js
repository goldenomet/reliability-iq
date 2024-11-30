import React, { useState } from 'react';

const catalogItems = [
  { id: 1, name: 'IoT Sensors', description: 'Real-time data for jet engines' },
  { id: 2, name: 'AI Analytics', description: 'Predictive maintenance insights' },
  { id: 3, name: 'Digital Twins', description: 'Simulate engine performance' },
];

const Catalog = () => {
  const [filter, setFilter] = useState('');

  const filteredItems = catalogItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="catalog" className="px-6 py-12 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold text-center mb-8">Our Catalog</h2>
      <input
        type="text"
        placeholder="Filter by category..."
        className="w-full p-2 mb-6 border rounded"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
