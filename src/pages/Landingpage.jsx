import React, { useEffect, useState } from 'react';
import ScrollSection from "../components/reusables/ScrollSection";
import { motion } from "framer-motion";


import crypto1 from "../assets/images/crypto1.jpg";
import crypto2 from "../assets/images/crypto2.jpg";
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


{/* Services Section */}
<section className="py-16 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center">Cryptocurrency Recovery Services</h2>
    <p className="text-lg mt-4 text-center text-gray-400">
      We specialize in Bitcoin and other cryptocurrency recovery services across various situations. Our team ensures that your funds are safely recovered and returned to your account.
    </p>
    <div className="mt-8 space-y-12">
      {/* Recovery Services */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={crypto1} alt="Recovery Services" className="w-3/4 md:w-1/3 rounded-lg order-2 md:order-1" />
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl font-semibold">Complete Recovery Services</h3>
          <p className="mt-4 text-gray-300">
            We offer full recovery services including private investigations, tracking, and spy operations. Our proven and secure process ensures your peace of mind.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500">Consult with an Expert</button>
        </div>
      </div>

      {/* Investment Scam Trackback */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold">Investment Fraud Recovery</h3>
          <p className="mt-4 text-gray-300">
            Many have fallen victim to fraudulent investment schemes. If you're one of them, get in touch with an expert to begin the recovery process.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500">Consult with an Expert</button>
        </div>
        <img src={crypto5} alt="Investment Scam" className="w-3/4 md:w-1/3 rounded-lg" />
      </div>

      {/* Academic Score Upgrade */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={crypto3} alt="Academic Upgrade" className="w-3/4 md:w-1/3 rounded-lg order-2 md:order-1" />
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl font-semibold">Academic Score Improvement</h3>
          <p className="mt-4 text-gray-300">
            Concerned about your academic performance? We guarantee a score upgrade to match your needs without detection by school authorities.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500">Consult with an Expert</button>
        </div>
      </div>

      {/* Mobile Phone Security */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold">Mobile Device Security</h3>
          <p className="mt-4 text-gray-300">
            Your mobile phone contains sensitive information. Our expert team can deploy a covert security solution to monitor and secure your mobile device remotely.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500">Consult with an Expert</button>
        </div>
        <img src={crypto4} alt="Mobile Security" className="w-3/4 md:w-1/3 rounded-lg" />
      </div>

      {/* Spy on Your Partner */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={crypto3} alt="Spy on Partner" className="w-3/4 md:w-1/3 rounded-lg order-2 md:order-1" />
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl font-semibold">Monitor Your Partner</h3>
          <p className="mt-4 text-gray-300">
            Suspect your partner isn’t being truthful? With our discreet monitoring solution, you can find out the truth without accessing their device.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500">Consult with an Expert</button>
        </div>
      </div>
    </div>
  </div>
</section>





      {/* Testimonials Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-8">
    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What Our Users Say</h2>
    <p className="text-sm sm:text-lg mt-4 text-gray-600">
      Real experiences from our trusted users
    </p>
    <div className="mt-12 flex flex-wrap justify-center gap-8">
      {[
        {
          name: 'John Doe',
          review: 'This platform has been a game-changer for me. I can track everything in one place, and the interface is so easy to use. Highly recommend it to anyone!',
        },
        {
          name: 'Jane Smith',
          review: 'I was skeptical at first, but this service truly delivers. The support team is quick to respond, and I’ve seen great results. Worth every penny!',
        },
        {
          name: 'Sam Wilson',
          review: 'Amazing experience! The platform helped me organize my tasks and improved my productivity. I can’t imagine working without it anymore.',
        },
      ].map((testimonial, index) => (
        <div key={index} className="w-full sm:w-80 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-sm sm:text-lg italic font-medium text-gray-700">"{testimonial.review}"</p>
          <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</h3>
          <div className="mt-4 border-t border-gray-300 pt-4 text-gray-500">
            <p>Verified user</p>
          </div>
        </div>
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
