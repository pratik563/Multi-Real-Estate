import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-wrap mx-auto p-6 bg-gradient-to-t bg-[#0a0a29] shadow-md rounded-md">
        <div className="w-full items-center md:w-1/2 p-6 mx-auto shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Contact Us
          </h2>
          <form className="flex flex-col text-center items-center">
            <div className="mb-6 w-full md:w-4/4">
              <label
                className="block text-md text-white font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-6 w-full md:w-4/4">
              <label
                className="block text-white text-md font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-6 w-full md:w-4/4">
              <label
                className="block text-white text-md font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                inputmode="numeric"
                required
                id="phone"
                className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="mb-6 w-full md:w-4/4">
              <label
                className="block text-white text-md font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                className="w-full md:w-3/4 px-4 py-2 border placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
                rows="5"
                columns="5"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-1/2 text-center bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out mx-auto"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 mx-auto shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-white text-center pb-2">
            Our Office
          </h2>
          <div className="text-white text-center mb-10">
            <p className="text-lg font-medium mb-1">XYZ Building, 2nd Floor</p>
            <p className="text-lg mb-1">1234 Pune Street</p>
            <p className="text-lg mb-1">Pune, Maharashtra, 411001</p>
            <p className="text-lg">India</p>
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8055185169054!2d73.85534781481648!3d18.520430187409707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0738a80db45%3A0x3a0a4c6d1c4f781f!2sXYZ%20Building%2C%20Pune!5e0!3m2!1sen!2sin!4v1693766800000!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
