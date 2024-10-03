import React from "react";
import Contactlogo from "../images/navlogo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Address = () => {
  return (
    <div className="flex flex-col bg-gray-300 text-black w-full h-auto py-10 justify-center items-center">
      <div className="flex flex-col md:flex-row w-full max-w-screen-2xl mx-auto px-4">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left">
          <img
            src={Contactlogo}
            className="md:mb-9 mb-6 w-32 md:w-40"
            alt="morya_logo"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-4">
            Our Office:
          </h2>
          <p className="text-base sm:hidden mb-4">
            MGp 99/1 Shop No 5 Poonam Plaza, Chinchwad, Pune - 411033 <br />
            (MIDC Sambhaji Nagar), Maharashtra
          </p>
          <p className="hidden sm:text-lg mb-4 md:block">
            MGp 99/1 Shop No 5 Poonam Plaza, Chinchwad, <br /> Pune - 411033
            (MIDC Sambhaji Nagar), Maharashtra
          </p>

          <p className="text-base md:text-lg mb-4">
            <a
              href="tel:+919595959595"
              className="hover:text-purple-900 hover:font-medium"
            >
              Phone: +91 9595959595
            </a>
            <br />
            <a
              href="mailto:info@example.com"
              className="hover:text-purple-900 hover:font-medium"
            >
              Email: info@example.com
            </a>
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-5 justify-center md:justify-start">
            <a
              href="#"
              className="text-blue-500 text-2xl p-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-blue-600 text-2xl p-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-pink-500 text-2xl p-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Map Section */}
        <div className="w-full md:w-1/2 mt-2 mb-4 md:mb-0 md:mr-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3780.928777058193!2d73.753985!3d18.622272999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzIwLjIiTiA3M8KwNDUnMTQuNCJF!5e0!3m2!1sen!2sin!4v1727181944328!5m2!1sen!2sin"
            alt="Google Map"
            width="100%"
            height="100%"
            className="border-0 md:rounded-full md:w-[500px] md:h-[500px] w-full h-[300px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Address;
