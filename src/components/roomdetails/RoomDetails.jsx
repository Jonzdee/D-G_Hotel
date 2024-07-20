import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomImageGallery from './ImageGallery';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numNights, setNumNights] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Logging the id to verify useParams
  console.log('RoomDetails component rendered with id:', id);
  console.log('RoomDetails component rendered');

  useEffect(() => {
    console.log(`Fetching details for room with id: ${id}`);
    axios.get(`https://hms-ccny.onrender.com/api/rooms/${id}`)
      .then(res => {
        setRoom(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching room details:', err);
        setError('Error fetching room details');
        setLoading(false);
      });
  }, [id]);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleDateChange = (dates) => {
    if (!Array.isArray(dates)) {
      dates = [dates, checkOutDate];
    }

    const [start, end] = dates;

    setCheckInDate(start);
    setCheckOutDate(end);

    if (start && end) {
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumNights(diffDays);
    } else {
      setNumNights(0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking submitted:', {
      checkInDate,
      checkOutDate,
      numNights,
    });
  };

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  if (error) {
    return <div className='flex justify-center items-center h-screen'>{error}</div>;
  }

  if (!room) {
    return <div className='flex justify-center items-center h-screen'>No such room could be found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <CustomImageGallery images={[room.asset1, room.asset2, room.asset3, room.asset4]} />
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{room.roomType}</h2>
        <p>{room.description}</p>
        <p className="font-bold">${room.pricePerDay}/night</p>
        <button onClick={handleBookNowClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105">
          Book Now
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transform transition-transform duration-300 scale-100 relative">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input type="text" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out" required />
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input type="email" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out" required />
              </label>
              <label className="block">
                <span className="text-gray-700">Phone Number</span>
                <input type="tel" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out" required />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-gray-700">Check-in Date</span>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => handleDateChange([date, checkOutDate])}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={new Date()}
                    placeholderText="Select Check-in Date"
                    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
                    dateFormat="MM/dd/yyyy"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Check-out Date</span>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => handleDateChange([checkInDate, date])}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={checkInDate || new Date()}
                    placeholderText="Select Check-out Date"
                    className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
                    dateFormat="MM/dd/yyyy"
                  />
                </label>
              </div>
              <div className="text-gray-700">Number of nights: {numNights}</div>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                Submit
              </button>
            </form>
            <button onClick={handleCloseForm} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
