import React from "react";
import Contactlogo from "../images/navlogo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto border bg-gray-300 py-10 justify-center items-center">
        <div className="flex flex-col items-center md:flex-row w-full max-w-screen-2xl mx-auto">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-5 text-purple-800 text-left">
              Contact Us
            </h2>
            <form className="flex flex-col text-left items-start">
              <div className="mb-3 w-full">
                <label
                  className="block text-md text-purple-800 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-600 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  className="block text-md text-purple-800 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-600 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  className="block text-md text-purple-800 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  required
                  id="phone"
                  className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-600 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="mb-5 w-full">
                <label
                  className="block text-md text-purple-800 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-600 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                  rows="5"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" text-center text-white bg-purple-800 font-md py-2 px-4 rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Information Section */}
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 text-center md:text-left">
            <img src={Contactlogo} className="mb-10 w-40" alt="morya_logo" />
            <h2 className="text-3xl font-semibold text-purple-900 mb-4">
              Our Office:
            </h2>
            <p className="text-lg mb-4">
              MGp 99/1 Shop No 5 Poonam Plaza, Chinchwad, <br /> Pune - 411033
              (MIDC Sambhaji Nagar), Maharashtra
            </p>
            <p className="text-lg mb-4">
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
            <div className="flex space-x-4 mt-5">
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
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-300 w-full h-auto mb-8 p-6">
        <div className="w-full md:w-2/3 lg:w-3/4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8055185169054!2d73.85534781481648!3d18.520430187409707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0738a80db45%3A0x3a0a4c6d1c4f781f!2sXYZ%20Building%2C%20Pune!5e0!3m2!1sen!2sin!4v1693766800000!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
