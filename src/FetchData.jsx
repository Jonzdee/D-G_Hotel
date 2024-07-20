import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FetchData() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://hms-ccny.onrender.com/api/rooms/')
      .then(res => {
        setRooms(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('There was an error fetching the room data!');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.length > 0 ? (
          rooms.map(room => (
            <div key={room.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src={room.asset1} alt={room.roomType} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{room.roomType}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">${room.pricePerDay}/night</span>
                  <Link to={`/rooms/${room.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No rooms available.</div>
        )}
      </div>
    </div>
  );
}

export default FetchData;
