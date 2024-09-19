import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-300 py-12">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Contact Information */}
        <div className="w-full md:w-1/3 text-center p-4">
          <h3 className="text-2xl font-bold mb-4 text-black">
            Contact Information
          </h3>
          <a
            href="tel:+919595959595"
            className="block font-semibold text-lg mb-2 py-2 px-4 rounded-md bg-white hover:bg-orange-600 hover:text-white transition duration-200"
          >
            Phone: +91 9595959595
          </a>
          <a
            href="mailto:info@example.com"
            className="block font-semibold text-lg mb-2 py-2 px-4 rounded-md bg-white hover:bg-orange-600 hover:text-white transition duration-200"
          >
            Email: info@example.com
          </a>
        </div>

        {/* Follow Us */}
        <div className="w-full md:w-1/3 text-center p-4">
          <h3 className="text-2xl font-bold mb-4 text-black">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-500 text-2xl p-2 rounded-full bg-white hover:bg-orange-600 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-blue-600 text-2xl p-2 rounded-full bg-white hover:bg-orange-600 transition duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-pink-500 text-2xl p-2 rounded-full bg-white hover:bg-orange-600 transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Have Questions */}
        <div className="w-full md:w-1/3 text-center p-4">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Have Questions?
          </h2>
          <p className="text-lg font-semibold text-black">
            Get in touch for consultations, property viewings, or any queries.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-black">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
