import React, { useEffect, useState } from 'react';
import ScrollSection from "../components/reusables/ScrollSection";
import { motion } from "framer-motion";


//import crypto1 from "../assets/images/crypto1.jpg";
import crypto5 from "../assets/images/crypto5.jpg";
import crypto3 from "../assets/images/crypto3.jpg";
import crypto4 from "../assets/images/crypto4.jpg";

const LandingPage = () => {
  const images = [crypto5, crypto3, crypto4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[79vh] w-full overflow-hidden">
  {images.map((image, index) => (
    <div
      key={index}
      className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
        currentImageIndex === index ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  ))}
  {/* Dark effect overlay */}
  <div className="absolute inset-0 bg-black opacity-75"></div>
  <ScrollSection>
  <div className="relative z-10 flex items-center justify-center text-center px-4 sm:px-8">
    <div>
      <h1 className="text-5xl sm:text-6xl mt-20 font-bold leading-tight text-white">
        Tracking Crypto with Precision
      </h1>
      <p className="text-lg sm:text-2xl mt-4 text-white">
        Comprehensive insights and analytics for your crypto journey
      </p>
      <div className="mt-6">
  <motion.a
    href="#explore"
    className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-lg transition-colors duration-300 hover:bg-white hover:text-red-500"
    animate={{
      x: [0, -5, 5, 0], // Shaking motion
    }}
    transition={{
      repeat: Infinity, // Infinite loop
      repeatType: "loop", // Continuous loop
      duration: 1, // Speed of shaking
    }}
    style={{
      display: "inline-block",
    }}
  >
    Get Started
  </motion.a>
</div>

    </div>
  </div>
  </ScrollSection>
</section>



      {/* Features Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800">Innovative Solutions</h2>
    <p className="text-lg mt-4 text-gray-600">
      Trusted Recovery Expert You Can Rely On; We're Experts
    </p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        title="Worldwide Recovery Services"
        description="We specialize in asset recovery with a focus on helping individuals affected by fraudulent investments."
        titleClass="text-white"
      />
      <FeatureCard
        title="Fraud Recovery Experts"
        description="A dedicated team formed to recover money from fraudulent investments, drawing from experience in investigative firms."
        titleClass="text-white"
      />
      <FeatureCard
        title="Binary Options & Investment Fraud"
        description="We help those who have lost money due to Binary Options and other shady investment firms, aiming to reclaim what’s rightfully theirs."
        titleClass="text-white"
      />
    </div>
  </div>
</section>

{/* How It Works Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800">Best in the Industry</h2>
    <p className="text-lg mt-4 text-gray-600">
      Professional Services with Dedicated Support
    </p>
    <div className="mt-8 flex flex-wrap justify-center">
      {['Sign Up', 'Deposit Funds', 'Start Trading'].map((step, index) => (
        <StepCard
          key={index}
          title={step}
          description={`Description for ${step}`}
          titleClass="text-white"
        />
      ))}
    </div>
  </div>
</section>



      {/* Tokenomics Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Tokenomics</h2>
          <p className="text-lg mt-4 text-gray-400">
            The distribution and utility of our crypto token
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Token Supply"
              description="Total token supply of 1 billion, with 30% reserved for staking rewards."
            />
            <FeatureCard
              title="Utility"
              description="Our token is used for transaction fees, staking, and governance."
            />
            <FeatureCard
              title="Partnerships"
              description="Token is integrated with major platforms for cross-chain transactions."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">What Our Users Say</h2>
          <p className="text-lg mt-4 text-gray-400">
            Hear from real users of our platform
          </p>
          <div className="mt-8 flex flex-wrap justify-center">
            {['John Doe', 'Jane Smith', 'Sam Wilson'].map((name, index) => (
              <TestimonialCard
                key={index}
                name={name}
                quote={`"A great platform for ${name}!"`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="text-lg mt-4 text-gray-400">
            Find answers to common questions about our platform
          </p>
          <div className="mt-8 grid gap-4">
            {['Sign up easily!', 'Your data is secure', 'Low fees always'].map((faq, index) => (
              <FAQCard key={index} title={faq} description={`Details about ${faq}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-500 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white">Ready to Start?</h2>
          <p className="text-lg mt-4 text-white">
            Join us today and start your journey into the future of finance.
          </p>
          <a
            href="#sign-up"
            className="mt-8 px-8 py-3 text-xl font-semibold text-blue-500 bg-white rounded-lg hover:bg-gray-200"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-blue-400">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);

const StepCard = ({ title, description }) => (
  <div className="w-72 m-4 bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);

const TestimonialCard = ({ name, quote }) => (
  <div className="w-72 m-4 bg-gray-800 p-6 rounded-lg shadow-lg">
    <p className="text-gray-300">{quote}</p>
    <div className="mt-4 text-blue-400">{name}</div>
  </div>
);

const FAQCard = ({ title, description }) => (
  <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
    <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);

export default LandingPage;
