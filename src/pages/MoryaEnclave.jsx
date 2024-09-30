import image1 from "../images/moryaenclave.jpg";
import floorPlan1 from "../images/Enclave-floor-plan.jpg";
import galleryImage1 from "../images/Skyline-cut-1.jpg";
/* import galleryImage2 from "../images/Skyline-cut-2.jpg"; */
import galleryImage3 from "../images/Skyline-day-view.jpg";
import galleryImage4 from "../images/Skyline-night-view.jpg";

const MoryaEnclave = () => {
  // Define the project object with galleryImages array
  const project = {
    galleryImages: [
      galleryImage1,
      /* galleryImage2, */ galleryImage3,
      galleryImage4,
    ],
  };

  return (
    <div className="bg-blue-100">
      {/* Main Image */}
      <div className="relative w-full h-screen mb-8">
        <img
          src={image1}
          alt="main-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-opacity-50 bg-gray-900 text-white p-4">
          <h1 className="text-5xl font-bold">Morya Enclave</h1>
        </div>
      </div>

      {/* Description & Details Section */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-md mb-12 rounded-lg">
        <h3 className="text-3xl font-semibold mb-4 text-blue-900">
          About the Project
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Skyline Avenue has huge homes that you can decorate as per your wish
          and where your kids can enjoy their childhood freely. These homes are
          designed in such a way that you can enjoy fresh air and sunlight all
          along. Strategically located at Moshi Alandi Road, Skyline Avenue is
          very well connected with industrial areas, malls, top educational
          institutes, daily needs, Mumbai-Pune Highway, etc.
        </p>

        {/* Project Details (Price, Location, Amenities) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Price */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-lg text-gray-600">Starting from $50,000</p>
          </div>
          <br />
          {/* Location moved below Price */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-lg text-gray-600">
              Plot No. B1, B2, Moshi - Alandi Rd, Opp. Hotel Purnabramha, Moshi,
              Pune, Maharashtra 412105
            </p>
          </div>
          {/* Amenities */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Amenities</h3>
            <p className="text-lg text-gray-600">
              Gym, Swimming Pool, Clubhouse, Kids Play Area, and 24/7 Security
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-5xl bg-white mx-auto mb-12 p-8 shadow-md rounded-lg">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          Image Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-105 hover:shadow-2xl transition"
            />
          ))}
        </div>
      </div>

      {/* Floor Plan Section */}
      <div className="max-w-5xl mx-auto mb-12 p-8 bg-white hover:scale-105 hover:shadow-2xl transition shadow-md rounded-lg">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          Floor Plan
        </h3>
        <img
          src={floorPlan1}
          alt="Floor Plan"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Location Map */}
      <div className="max-w-5xl mx-auto p-8 bg-white hover:scale-105 hover:shadow-2xl transition shadow-md rounded-lg">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          Location Map
        </h3>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15118.630005405317!2d73.8656783!3d18.6793592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c946424316c9%3A0xeb63fb25e417d2e4!2sSkyline%20Avenue%2C%20Moshi!5e0!3m2!1sen!2sin!4v1726817634040!5m2!1sen!2sin"
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
  );
};

export default MoryaEnclave;
