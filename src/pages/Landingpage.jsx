import { useEffect, useState } from 'react';
import ScrollSection from "../components/reusables/ScrollSection";
import { motion } from "framer-motion";


//import crypto1 from "../assets/images/crypto1.jpg";
//import crypto2 from "../assets/images/crypto2.jpg";
import crypto5 from "../assets/images/crypto5.jpg";
import crypto3 from "../assets/images/crypto3.jpg";
import crypto4 from "../assets/images/crypto4.jpg";
import crypto6 from "../assets/images/crypto6.jpg";
import crypto7 from "../assets/images/crypto7.jpg";
import crypto8 from "../assets/images/crypto8.jpg";
import crypto9 from "../assets/images/crypto9.jpg";
import crypto10 from "../assets/images/crypto10.jpg";

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
    <h1 className="text-2xl sm:text-4xl md:text-5xl mt-20 font-bold leading-tight text-white">
  The Best Platform to
  <br />
  Connect with Professional Recovery Experts!
</h1>

      <p className="text-sm sm:text-xl mt-4 text-white">
      We are a team of experts dedicated to delivering exceptional security and recovery services across all industries.
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
    Join Us!
  </motion.a>
</div>

    </div>
  </div>
  </ScrollSection>
</section>



      {/* Features Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900">Innovative Solutions</h2>
    <p className="text-lg mt-4 text-gray-600">
      Trusted Recovery Expert You Can Rely On; We are Experts
    </p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        title="Worldwide Recovery Services"
        description="We specialize in asset recovery with a focus on helping individuals affected by fraudulent investments."
        titleClass="text-white text-xs sm:text-sm"
      />
      <FeatureCard
        title="Fraud Recovery Experts"
        description="A dedicated team formed to recover money from fraudulent investments, drawing from experience in investigative firms."
        titleClass="text-white text-xs sm:text-sm"
      />
      <FeatureCard
        title="Binary Options & Investment Fraud"
        description="We help those who have lost money due to Binary Options and other shady investment firms, aiming to reclaim what’s rightfully theirs."
        titleClass="text-white text-xs sm:text-sm"
      />
    </div>
  </div>
</section>


<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-8">
    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Our Key Metrics</h2>
    <p className="text-xs sm:text-sm mt-4 text-gray-600">
      A snapshot of how we perform across different areas
    </p>
    <div className="mt-8 flex justify-center gap-8 flex-wrap">
      {/* Circle 1 - 100% Result Driven */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-4xl font-semibold">
          100%
        </div>
        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-medium text-gray-900">Result Driven</h3>
      </div>

      {/* Circle 2 - 100% Confidentiality */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-32 sm:h-32 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-4xl font-semibold">
          100%
        </div>
        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-medium text-gray-900">Confidentiality</h3>
      </div>

      {/* Circle 3 - 90% Response Time */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-32 sm:h-32 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-4xl font-semibold">
          90%
        </div>
        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-medium text-gray-900">Response Time</h3>
      </div>

      {/* Circle 4 - 45% Corporate Management */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 sm:w-32 sm:h-32 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-4xl font-semibold">
          45%
        </div>
        <h3 className="mt-2 sm:mt-4 text-sm sm:text-lg font-medium text-gray-900">Corporate Management</h3>
      </div>
    </div>
  </div>
</section>


{/* How It Works Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto text-center px-4 sm:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Your Trusted Asset Recovery Partner
    </h2>
    <p className="text-sm sm:text-lg mt-4 text-gray-600">
      Specializing in retrieving, retracing, and retracking lost assets—whether it’s cryptocurrency or money—we ensure rightful ownership is restored.
    </p>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-50 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Expertise in Crypto Recovery
        </h3>
        <p className="mt-4 text-gray-600">
          Leveraging cutting-edge technology and in-depth knowledge, we help trace and recover lost or stolen cryptocurrency.
        </p>
      </div>
      <div className="bg-gray-50 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Financial Asset Restoration
        </h3>
        <p className="mt-4 text-gray-600">
          Our team specializes in tracking down lost funds, offering efficient solutions for individuals and businesses alike.
        </p>
      </div>
      <div className="bg-gray-50 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Global Reach and Precision
        </h3>
        <p className="mt-4 text-gray-600">
          With a worldwide network of recovery experts, we ensure no asset remains untraced or unrecovered.
        </p>
      </div>
    </div>
  </div>
</section>



{/* Services Section */}
<section className="py-16 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-sm sm:text-3xl">Cryptocurrency Recovery Services</h2>
    <p className="text-lg mt-4 text-center text-gray-400 text-xs sm:text-base">
      We specialize in Bitcoin and other cryptocurrency recovery services across various situations. Our team ensures that your funds are safely recovered and returned to your account.
    </p>
    <div className="mt-8 space-y-12">
      {/* Recovery Services */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={crypto7} alt="Recovery Services" className="w-3/4 md:w-1/3 rounded-lg order-2 md:order-1" />
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl font-semibold text-sm sm:text-xl">Complete Recovery Services</h3>
          <p className="mt-4 text-gray-300 text-xs sm:text-base">
            We offer full recovery services including private investigations, tracking, and spy operations. Our proven and secure process ensures your peace of mind.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-500 text-xs sm:px-6 sm:py-3 sm:text-base">  Consult with an Expert</button>
        </div>
      </div>

      {/* Investment Scam Trackback */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-sm sm:text-xl">Investment Fraud Recovery</h3>
          <p className="mt-4 text-gray-300 text-xs sm:text-base">
            Many have fallen victim to fraudulent investment schemes. If you are one of them, get in touch with an expert to begin the recovery process.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-500 text-xs sm:px-6 sm:py-3 sm:text-base">  Consult with an Expert</button>
        </div>
        <img src={crypto8} alt="Investment Scam" className="w-3/4 md:w-1/3 rounded-lg" />
      </div>

      {/* Academic Score Upgrade */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={crypto9} alt="Academic Upgrade" className="w-3/4 md:w-1/3 rounded-lg order-2 md:order-1" />
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl font-semibold text-sm sm:text-xl">Academic Score Improvement</h3>
          <p className="mt-4 text-gray-300 text-xs sm:text-base">
            Concerned about your academic performance? We guarantee a score upgrade to match your needs without detection by school authorities.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-500 text-xs sm:px-6 sm:py-3 sm:text-base">  Consult with an Expert</button>
        </div>
      </div>

      {/* Mobile Phone Security */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-sm sm:text-xl">Mobile Device Security</h3>
          <p className="mt-4 text-gray-300 text-xs sm:text-base">
            Your mobile phone contains sensitive information. Our expert team can deploy a covert security solution to monitor and secure your mobile device remotely.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-500 text-xs sm:px-6 sm:py-3 sm:text-base">  Consult with an Expert</button>
        </div>
        <img src={crypto10} alt="Mobile Security" className="w-3/4 md:w-1/3 rounded-lg" />
      </div>

      {/* Spy on Your Partner */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={crypto6} alt="Spy on Partner" className="w-3/4 md:w-1/3 rounded-lg order-2 md:order-1" />
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl font-semibold text-sm sm:text-xl">Monitor Your Partner</h3>
          <p className="mt-4 text-gray-300 text-xs sm:text-base">
            Suspect your partner isn’t being truthful? With our discreet monitoring solution, you can find out the truth without accessing their device.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-500 text-xs sm:px-6 sm:py-3 sm:text-base">  Consult with an Expert</button>
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
          name: 'Fred',
          review: 'This platform has been a game-changer for me. I can track everything in one place, and the interface is so easy to use. Highly recommend it to anyone!',
        },
        {
          name: 'Tomiwa Felix',
          review: 'I was skeptical at first, but this service truly delivers. The support team is quick to respond, and I’ve seen great results. Worth every penny!',
        },
        {
          name: 'William Smith',
          review: 'Amazing experience! The platform helped me organize my tasks and improved my productivity. I can’t imagine working without it anymore.',
        },
      ].map((testimonial, index) => (
        <div key={index} className="w-full sm:w-80 bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-sm sm:text-lg italic font-medium text-gray-700">&quot;{testimonial.review}&quot;</p>
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
      <section className="py-16 bg-gray-900 text-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-8">
    <h2 className="text-3xl sm:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
    <p className="text-sm sm:text-lg mt-4 text-white">
      Find answers to common questions about our crypto security and recovery services.
    </p>
    <div className="mt-8 space-y-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <details className="group rounded-lg bg-gray-50 shadow-lg">
          <summary className="py-4 px-6 cursor-pointer text-lg font-medium text-gray-900 group-open:bg-blue-100 sm:text-base text-xs">
            How do I secure my crypto assets on this platform?
          </summary>
          <p className="px-6 py-4 text-gray-600 text-xs sm:text-sm">
            Our platform uses multi-layered encryption, cold storage wallets, and two-factor authentication to ensure the highest level of security for your crypto assets.
          </p>
        </details>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <details className="group rounded-lg bg-gray-50 shadow-lg">
          <summary className="py-4 px-6 cursor-pointer text-lg font-medium text-gray-900 group-open:bg-blue-100 sm:text-base text-xs">
            What should I do if I suspect my account has been compromised?
          </summary>
          <p className="px-6 py-4 text-gray-600 text-xs sm:text-sm">
            If you suspect your account has been compromised, immediately contact our support team. We offer emergency account recovery services to help secure your funds and recover your account.
          </p>
        </details>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <details className="group rounded-lg bg-gray-50 shadow-lg">
          <summary className="py-4 px-6 cursor-pointer text-lg font-medium text-gray-900 group-open:bg-blue-100 sm:text-base text-xs">
            How can I recover lost or stolen crypto funds?
          </summary>
          <p className="px-6 py-4 text-gray-600 text-xs sm:text-sm">
            If you've lost access to your crypto funds, our platform provides professional recovery services. Contact our recovery experts, and we'll guide you through the steps to retrieve your lost assets.
          </p>
        </details>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <details className="group rounded-lg bg-gray-50 shadow-lg">
          <summary className="py-4 px-6 cursor-pointer text-lg font-medium text-gray-900 group-open:bg-blue-100 sm:text-base text-xs">
            How do I protect my private keys and recovery phrases?
          </summary>
          <p className="px-6 py-4 text-gray-600 text-xs sm:text-sm">
            Keep your private keys and recovery phrases in a secure, offline location. We recommend using hardware wallets and other security measures to prevent unauthorized access to your crypto assets.
          </p>
        </details>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <details className="group rounded-lg bg-gray-50 shadow-lg">
          <summary className="py-4 px-6 cursor-pointer text-lg font-medium text-gray-900 group-open:bg-blue-100 sm:text-base text-xs">
            How can I ensure my crypto transactions are secure?
          </summary>
          <p className="px-6 py-4 text-gray-600 text-xs sm:text-sm">
            Always double-check the recipient address and use two-factor authentication for transactions. Our platform also monitors transactions for suspicious activity and alerts you of any potential threats.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>



    </div>
  );
};

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);

// eslint-disable-next-line react/prop-types
const StepCard = ({ title, description }) => (
  <div className="w-72 m-4 bg-gray-900 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);


export default LandingPage;
