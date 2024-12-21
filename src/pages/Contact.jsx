import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-200">
          We'd love to hear from you. Let's make something great together.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex justify-center items-center">
            <i className="fas fa-phone-alt text-white text-xl"></i>
              </div>
              <span className="text-lg text-gray-700">+1 (757) 235-2717</span>
            </li>
            <li className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex justify-center items-center">
            <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <a
                href="mailto:Cryptoretrackagency@gmail.com"
                className="text-lg text-red-700 hover:underline"
              >
                Cryptoretrackagency@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex justify-center items-center">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <span className="text-lg text-gray-700">
                1190 Big Elm, Kansas City, Missouri, USA
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Contact;
