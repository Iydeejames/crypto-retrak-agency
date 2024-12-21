import Logo from "../../assets/logo/logo-img.jpg";
//import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      {/* Top Horizontal Line */}
      <div className="w-5/6 mx-auto border-t-2 border-white"></div>


      {/* Top Section (Contact Information) */}
      <div className="py-8 px-4 md:px-8 w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Information */}
            <div>
              <h4 className="font-bold mb-4 text-xs md:text-base">Contact Information</h4>
              <ul className="text-xs md:text-base">
                <li>+1 (757) 235-2717</li>
                <li>Cryptotrackagency@gmail.com</li>
                <li>1190 Big Elm, Kansas City, Missouri, USA</li>
              </ul>
            </div>

            {/* Our Socials Section 
            <div>
              <h4 className="font-bold mb-4 text-xs md:text-base">Our Socials</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <FaFacebookF size={22} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                  <FaInstagram size={22} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-green-500">
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
            */}
          
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 w-full">
        <div className="container mx-auto px-4 md:px-8 pt-6">
          <div className="flex items-center justify-center">
            {/* Left Line */}
            <div className="flex-grow border-t border-white mr-4"></div>

            {/* Center Content */}
            <div className="flex items-center text-white space-x-2">
              <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
            </div>

            {/* Right Line */}
            <div className="flex-grow border-t border-white ml-4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
