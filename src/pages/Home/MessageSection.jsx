import React from "react";

function MessageSection() {
  return (
    <section
      className="py-16 px-4 bg-gray-100"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Message
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <p className="text-xl text-gray-600 text-center italic">
            Work in Progress
          </p>
        </div>
      </div>
    </section>
  );
}
export default MessageSection;
