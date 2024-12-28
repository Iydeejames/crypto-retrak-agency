import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.sendForm(
        "service_yjmpeug", // Your Service ID
        "template_i2nces9", // Your Template ID
        formRef.current, // Reference to the form
        "hDdVYov0Kw6aPHr9L" // Your Public Key
      );

      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");

      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-200">
          We&apos;d love to hear from you. Let&apos;s make something great together.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1 sm:mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 sm:py-3 sm:px-6 ${
                isSubmitting ? "bg-gray-400" : "bg-gray-900"
              } text-white rounded-lg font-medium hover:bg-red-700 transition duration-300`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <ul className="space-y-4 sm:space-y-6">
            <li className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex justify-center items-center">
                <i className="fas fa-phone-alt text-white text-sm sm:text-xl"></i>
              </div>
              <span className="text-sm sm:text-lg text-gray-700">+1 (757) 235-2717</span>
            </li>
            <li className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex justify-center items-center">
                <i className="fas fa-envelope text-white text-sm sm:text-xl"></i>
              </div>
              <a
                href="mailto:Cryptoretrackagency@gmail.com"
                className="text-sm sm:text-lg text-red-700 hover:underline"
              >
                Cryptoretrackagency@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex justify-center items-center">
                <i className="fas fa-map-marker-alt text-white text-sm sm:text-xl"></i>
              </div>
              <span className="text-sm sm:text-lg text-gray-700">
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
