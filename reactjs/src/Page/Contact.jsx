import React from "react";


const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Banner Image */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?fit=crop&w=1200&q=80')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto p-6 mt-10 shadow-lg rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4">We'd love to hear from you!</h2>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="your@email.com" />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full p-2 border rounded" rows="4" placeholder="How can we help you?" />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
