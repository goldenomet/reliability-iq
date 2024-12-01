import React from "react";
import { motion } from "framer-motion";

const catalogItems = [
  {
    icon: "🔧",
    title: "Predictive Maintenance",
    description:
      "Using AI and IoT to predict maintenance needs and reduce downtime.",
  },
  {
    icon: "🌐",
    title: "IoT Integration",
    description:
      "Seamlessly integrating IoT devices to collect and analyze engine data in real-time.",
  },
  {
    icon: "📊",
    title: "AI-Driven Analytics",
    description:
      "Leveraging machine learning algorithms for deep insights into operational efficiency.",
  },
  {
    icon: "⚙️",
    title: "Engine Health Monitoring",
    description:
      "Continuous monitoring of engine health using advanced diagnostics and sensors.",
  },
  {
    icon: "💡",
    title: "Data-Driven Decisions",
    description:
      "Empowering teams to make informed decisions based on actionable data insights.",
  },
];

const Catalog = () => {
  return (
    <div className="bg-gradient-to-r from-black via-red-700 to-black animate-gradient p-10 min-h-screen">
      <h2 className="text-white font-bold text-3xl mb-8">ReliabilityIQ Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalogItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-6xl mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="font-bold text-lg text-black mb-2">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

