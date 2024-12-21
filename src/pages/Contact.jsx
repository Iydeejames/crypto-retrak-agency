import  { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="text-center py-16 bg-white">
        <h1 className="text-4xl  text-gray-900 font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-900 text-lg">We are here to help with any questions or concerns</p>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-4 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                placeholder="Type your message" 
                rows="5" 
                className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 px-6 bg-blue-600 rounded text-white text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="inline-block w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center mr-4">
                <i className="fas fa-phone-alt text-white"></i>
              </span>
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center mr-4">
                <i className="fas fa-envelope text-white"></i>
              </span>
              <span>support@crypto-trade.com</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center mr-4">
                <i className="fas fa-map-marker-alt text-white"></i>
              </span>
              <span>123 Crypto Street, Blockchain City, USA</span>
            </li>
          </ul>
          <h3 className="text-xl font-medium mt-8 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700">
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700">
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700">
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700">
              <i className="fab fa-instagram text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
