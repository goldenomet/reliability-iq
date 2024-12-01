import React from "react";

const BlogPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="relative h-80">
        <img
          src="/assets/reliability-iq-banner.jpg" // Replace with your banner image
          alt="Reliability IQ Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-8 md:px-16">
          <p className="text-yellow-400 font-medium text-lg mb-2">Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Exploring the Importance of Reliability IQ
          </h1>
          <p className="text-gray-300 mt-4">March 1, 2024</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="px-8 md:px-16 py-12">
        {/* Introduction */}
        <p className="text-xl leading-8 mb-6">
          Reliability IQ is revolutionizing the aviation industry by leveraging
          cutting-edge IoT and AI technologies. This blog explores how predictive
          maintenance, digital twins, and data analytics are reshaping aircraft
          maintenance practices, ensuring safety and cost efficiency.
        </p>

        {/* Subsection with Image */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              The Role of Predictive Maintenance
            </h2>
            <p className="leading-7">
              Predictive maintenance uses IoT sensors and real-time analytics to
              monitor the health of jet engines. This approach helps identify
              potential failures before they occur, significantly reducing downtime
              and maintenance costs.
            </p>
          </div>
          <img
            src="/assets/predictive-maintenance.jpg" // Replace with your image
            alt="Predictive Maintenance"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Subsection with Data Discussion */}
        <div className="my-12">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Digital Twins and Data Analytics
          </h2>
          <p className="leading-7">
            Digital twins create virtual replicas of physical jet engines,
            enabling engineers to simulate operations and predict issues. When
            combined with advanced data analytics, they offer unparalleled
            insights into performance trends, aiding in better decision-making
            for fleet management.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">
            Want to learn more about Reliability IQ?
          </h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our blog for the latest updates and insights into the
            aviation industry's technological advancements.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
