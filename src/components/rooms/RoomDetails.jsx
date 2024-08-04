import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Hero from "../Hero/Hero";
import Banner from "../banner/Banner";
import { useNavigate } from 'react-router-dom';
import ScrollToTop from "../Hero/ScrollToTop";
import { format } from "date-fns";
import Swal from 'sweetalert2';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numNights, setNumNights] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        console.log(`Fetching details for room with id: ${id}`);
        const response = await axios.get(import.meta.env.VITE_API_KEY);
        const rooms = response.data;
        const room = rooms.find((room) => room.id === parseInt(id));
        if (room) {
          console.log("Fetched room data:", room);
          setRoom(room);
        } else {
          console.log(`Room with ID ${id} not found`);
          setRoom(null);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching room details:", err);
        setError("Error fetching room details");
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [id]);

  const handleDateChange = (dates) => {
    if (!Array.isArray(dates)) {
      dates = [dates, checkOutDate];
    }

    const [start, end] = dates;

    setCheckInDate(start);
    setCheckOutDate(end);

    if (start && end) {
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setNumNights(diffDays);

      if (room) {
        const pricePerDay = parseFloat(room.pricePerDay);
        console.log(`pricePerDay: ${pricePerDay}`);

        if (!isNaN(pricePerDay) && !isNaN(diffDays) && diffDays > 0) {
          const amount = (pricePerDay * diffDays).toFixed(2);
          setTotalAmount(amount);
          console.log(`Total amount calculated: ₦${amount}`);
        } else {
          setTotalAmount(0);
          console.log("Invalid pricePerDay or diffDays");
        }
      } else {
        setTotalAmount(0);
        console.log("Room data is not available");
      }
    } else {
      setNumNights(0);
      setTotalAmount(0);
      console.log("Invalid start or end date");
    }
  };
 // handle submit
 const handleSubmit = async (event) => {
  event.preventDefault();

  const formattedCheckInDate = checkInDate ? format(checkInDate, "yyyy-MM-dd") : null;
  const formattedCheckOutDate = checkOutDate ? format(checkOutDate, "yyyy-MM-dd") : null;

  const availabilityData = {
    checkInDate: formattedCheckInDate,
    checkOutDate: formattedCheckOutDate,
    category: parseInt(id), // Ensure `id` is an integer
  };

  console.log('Sending availability check with data:', availabilityData); // Debugging line

  try {
    const availabilityResponse = await axios.post(
      import.meta.env.VITE_API_KEY_AVAILABILITY,
      availabilityData
    );

    console.log('Availability response:', availabilityResponse.data); // Debugging line

    // Determine room availability based on the response
    const responseData = availabilityResponse.data;

    // Check if the response matches the requested data
    const isAvailable = 
      responseData.checkInDate === formattedCheckInDate &&
      responseData.checkOutDate === formattedCheckOutDate &&
      responseData.category === parseInt(id);

    if (isAvailable) {
      // Room is available, show success alert and proceed with booking
      Swal.fire({
        icon: 'success',
        title: 'Room Available',
        text: 'The selected room is available for the chosen dates. Proceeding to booking...',
      }).then(async () => {
        // Proceed with booking
        const personalInfo = {
          guestName: name,
          guestEmail: email,
          guestPhone: phone,
        };

        const personalInfoResponse = await axios.post(
          import.meta.env.VITE_API_KEY_PERSONAL_INFO,
          personalInfo
        );
        console.log("Personal info submitted successfully:", personalInfoResponse.data);

        const guest = personalInfoResponse.data.id;

        const bookingInfo = {
          checkInDate: formattedCheckInDate,
          checkOutDate: formattedCheckOutDate,
          totalAmount: parseFloat(totalAmount),
          paymentStatus: false,
          guest,
          category: id,
        };

        const bookingInfoResponse = await axios.post(
          import.meta.env.VITE_API_KEY_BOOK,
          bookingInfo
        );
        console.log("Booking info submitted successfully:", bookingInfoResponse.data);

        // Show success alert with payment button
        Swal.fire({
          icon: 'success',
          title: 'Room Available',
          text: 'Please complete your payment to proceed further.',
          showConfirmButton: true,
          confirmButtonText: 'Proceed to Payment',
          preConfirm: () => {
            // Redirect to payment page
            navigate('/payment', {
              state: {
                checkInDate: formattedCheckInDate,
                checkOutDate: formattedCheckOutDate,
                totalAmount: parseFloat(totalAmount),
              },
            });
          }
        });

        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");
        setCheckInDate(null);
        setCheckOutDate(null);
        setNumNights(0);
        setTotalAmount(0);
      });
    } else {
      // Room is not available, show error alert
      Swal.fire({
        icon: 'error',
        title: 'Room Unavailable',
        text: 'The selected room is not available for the chosen dates.',
      });
    }
  } catch (error) {
    console.error("Error checking availability or submitting booking:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }

    // Show error alert
    Swal.fire({
      icon: 'error',
      title: 'Booking Failed',
      text: 'Room is not available for this category for the selected dates.',
    });
  }
};


  // const payWithPaystack = () => {
  //   const handler = PaystackPop.setup({
  //     key: "your-public-key-here", // Replace with your Paystack public key
  //     email,
  //     amount: totalAmount * 100, // Paystack expects amount in kobo
  //     currency: "NGN",
  //     ref: "" + Math.floor(Math.random() * 1000000000 + 1), // Generate a random reference number
  //     callback: function (response) {
  //       alert("Success. Transaction ref is " + response.reference);
  //     },
  //     onClose: function () {
  //       alert("Transaction was not completed, window closed.");
  //     },
  //   });
  //   handler.openIframe();
  // };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">{error}</div>
    );
  }

  if (!room) {
    return (
      <div className="flex justify-center items-center h-screen">
        No such room could be found!
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <Hero hero="roomsHero">
        <Banner hero="roomsHero">
          <Link to="/" className="btn-primary">
            Room Details
          </Link>
        </Banner>
      </Hero>
      <div className="max-w-7xl mx-auto p-6 space-y-8">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["asset1", "asset2", "asset3", "asset4"].map((asset, index) =>
                room[asset] ? (
                  <img
                    key={index}
                    src={room[asset]}
                    alt={room.categoryType}
                    className="w-full h-56 object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <div
                    key={index}
                    className="w-full h-56 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center"
                  >
                    <span>No Image</span>
                  </div>
                )
              )}
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {room.categoryType}
              </h2>
              <p className="text-gray-800">{room.description}</p>
              <p className="font-bold text-gray-800 mb-2">
                &#8358;{room.pricePerDay} /night
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Hotel Rules
              </h2>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                <li>No smoking inside the rooms.</li>
                <li>Pets are not allowed.</li>
                <li>
                  Check-in time is 3:00 PM and check-out time is 11:00 AM.
                </li>
                <li>Quiet hours are from 10:00 PM to 7:00 AM.</li>
                <li>Only registered guests are allowed in the rooms.</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Reviews
              </h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-gray-600">
                    “Great place to stay! The room was clean and comfortable.
                    The service was excellent.”
                  </p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27l5.18 3.1-1.39-5.84L21 9.24l-6.03-.52L12 2 9.03 8.72 3 9.24l4.21 4.29-1.39 5.84L12 17.27z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">
                    “The stay was okay, but there were some issues with the
                    amenities. Could be better.”
                  </p>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27l5.18 3.1-1.39-5.84L21 9.24l-6.03-.52L12 2 9.03 8.72 3 9.24l4.21 4.29-1.39 5.84L12 17.27z" />
                      </svg>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27l5.18 3.1-1.39-5.84L21 9.24l-6.03-.52L12 2 9.03 8.72 3 9.24l4.21 4.29-1.39 5.84L12 17.27z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Book Your Stay
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="check-in">
                  Check-In Date
                </label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => handleDateChange([date, checkOutDate])}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  className="w-full p-2 border border-gray-300 rounded"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="check-out">
                  Check-Out Date
                </label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => handleDateChange([checkInDate, date])}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate}
                  className="w-full p-2 border border-gray-300 rounded"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address 
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <p className="text-gray-800">
                  Number of Nights:{" "}
                  <span className="font-semibold">{numNights}</span>
                </p>
                <p className="text-gray-800">
                  Total Amount:{" "}
                  <span className="font-semibold">₦{totalAmount}</span>
                </p>
              </div>
              <div className="flex gap-4">
                {/* <button
                  type="button"
                  onClick={payWithPaystack}
                  className="btn-primary"
                >
                  Pay Now
                </button> */}
                <button type="submit" className="btn-primary " >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
