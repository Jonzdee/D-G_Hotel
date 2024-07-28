import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function FetchData() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_KEY)  
      .then(res => {
        setRooms(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('There was an error fetching the room data!');
        setLoading(false);
      });
  }, []);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: 10, zIndex: 1 }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: 10, zIndex: 1 }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  if (loading) {
    return <div className='flex justify-center items-center h-screen'><div className="spinner">
    <div></div>   
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
    <div></div>    
  </div>
  
  </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <>
  {/* rooms */}
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-bule-gray-900">Our <span className='text-blue-900'>Rooms</span></h1>
      <p className='text-gray-900 my-5'>Kick back in one of 94 modern rooms and suites and catch up on your favorite show with satellite TV channels. In the morning, you can sip a soothing cup of tea with a room-service breakfast or wake up with fresh coffee from your in-room coffeemaker.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.length > 0 ? (
          rooms.map(room => (
            <div key={room.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
              <Slider {...settings}>
                <img src={room.asset1} alt={room.roomType} className="w-full h-56 object-cover" />
                <img src={room.asset2} alt={room.roomType} className="w-full h-56 object-cover" />
                <img src={room.asset3} alt={room.roomType} className="w-full h-56 object-cover" />
                <img src={room.asset4} alt={room.roomType} className="w-full h-56 object-cover" />
              </Slider>
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{room.roomType}</h2>
                <div className="flex flex-wrap items-center mb-4">
                  <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 mr-2 rounded">{room.size} m²</span>
                  <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 mr-2 rounded">{room.adults} adults</span>
                  <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 mr-2 rounded">{room.children} child (0-11)</span>
                  <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 mr-2 rounded">{room.beds}</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex items-center mb-4">
                  <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 mr-2 rounded">Main amenities</span>
                  <span className="mr-2">WiFi</span>
                  <span className="mr-2">Breakfast</span>
                  <span className="mr-2">Parking</span>
                  <span className="mr-2">Pool</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">&#8358;{room.pricePerDay}/night</span>
                  <Link to={`/rooms/${room.id}`} className="bg-red-600 text-white text-[9px] sm:text-sm  lg:text-[13px] px-2 py-2 rounded-md hover:bg-red-700 transition duration-300">BOOK NOW</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No rooms available.</div>
        )}
      </div>
    </div>
    {/* form */}
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="flex flex-col space-y-8">
              {/* Contact Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-2xl mt-8">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h5 className="text-lg font-semibold">Give Us a Call</h5>
                  <p className="text-gray-600">Call us anytime for your booking and other inquiries and we will be happy to assist you.</p>
                </div>
              </div>
              {/* Spacer */}
              <div className="h-8"></div>
              {/* Contact Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-2xl mt-8">
                  <FaEnvelope />
                </div>
                <div>
                  <h5 className="text-lg font-semibold">Send Us an Email</h5>
                  <p className="text-gray-600">For group booking and event, kindly send us a mail at booking@dandghotels.com</p>
                </div>
              </div>
              {/* Spacer */}
              <div className="h-8"></div>
              {/* Contact Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="text-blue-500 text-2xl mt-8">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5 className="text-lg font-semibold">Drop By and Talk</h5>
                  <p className="text-gray-600">Do feel free to stop by anytime for your physical inspection of our facilities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <form
              method="post"
              className="bg-white p-8 shadow-lg rounded-lg"
            >
              <fieldset>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700">Subject <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    className="w-full px-3 py-2 border rounded"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Send
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default FetchData;






