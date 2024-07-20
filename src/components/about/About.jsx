import  {Button, Button1}  from '../../components/smallcomp/Button'

function About() {
  return (
    <section className='my-12 py-10 bg-gray-100'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 gap-1'>
            <div className='lg:col-span-2'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl  '>Enjoy the exclusive benefits</h1>
            </div>
            <div className=''><Button1>DISCOVER MORE BENEFITS</Button1> </div>
           <div><Button>BECOME A MEMBER</Button> </div>
        </div>
        {/*  */}
        <div className='mx-5 mt-2'>
        <p className='text-black'>As a D&G Rewards member, you enjoy exclusive benefits. You collect points that you can use to enhance
                your travel experience or to pay for your booking. join for free and elevate your stay!
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-2 mx-6 my-5">
        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Member Only Rate</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Members get up to 15% discount</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        
    </a>
</div>


<div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Discount on Food and Beverages</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Discount on food and beverages</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        
    </a>
</div>


<div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Priority Line</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Save waiting time with access to priority line</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        
    </a>
</div>
  
</div>
    </section>
  )
}

export default About










// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import CustomImageGallery from './ImageGallery'; // Adjust the path as needed

// const RoomDetails = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [numNights, setNumNights] = useState(0);

//   const handleBookNowClick = () => {
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   const handleDateChange = (dates) => {
//     if (!Array.isArray(dates)) {
//       dates = [dates, checkOutDate];
//     }

//     const [start, end] = dates;

//     setCheckInDate(start);
//     setCheckOutDate(end);

//     if (start && end) {
//       const diffTime = end.getTime() - start.getTime();
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       setNumNights(diffDays);
//     } else {
//       setNumNights(0);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic
//     console.log('Booking submitted:', {
//       checkInDate,
//       checkOutDate,
//       numNights,
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-8">
//       {/* Image Gallery */}
//       <CustomImageGallery />

//       {/* Hotel Rules */}
//       <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hotel Rules</h2>
//         <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
//           <li>No smoking inside the rooms.</li>
//           <li>Pets are not allowed.</li>
//           <li>Check-in time is 3:00 PM and check-out time is 11:00 AM.</li>
//           <li>Quiet hours are from 10:00 PM to 7:00 AM.</li>
//           <li>Only registered guests are allowed in the rooms.</li>
//         </ul>
//       </div>

//       {/* Guest Reviews */}
//       <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guest Reviews</h2>
//         <div className="space-y-6">
//           {/* Sample review */}
//           <div className="border-b pb-4">
//             <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
//             <p className="text-gray-600">“An amazing stay! The suite was perfect, and the service was exceptional. Highly recommended!”</p>
//             <div className="flex space-x-1 mt-2">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-yellow-400 transition-transform transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-3.5 2.1L7 12 4 8.5l3.9-.4L10 2l2.1 5.7L16 8.5 12 12l.5 5.1L10 15z"/></svg>
//               ))}
//             </div>
//           </div>
//           {/* Another sample review */}
//           <div className="border-b pb-4">
//             <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
//             <p className="text-gray-600">“Very comfortable and stylish room. The view was spectacular, and the staff were friendly.”</p>
//             <div className="flex space-x-1 mt-2">
//               {[...Array(4)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-yellow-400 transition-transform transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-3.5 2.1L7 12 4 8.5l3.9-.4L10 2l2.1 5.7L16 8.5 12 12l.5 5.1L10 15z"/></svg>
//               ))}
//               <svg className="w-5 h-5 text-gray-300 transition-transform transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-3.5 2.1L7 12 4 8.5l3.9-.4L10 2l2.1 5.7L16 8.5 12 12l.5 5.1L10 15z"/></svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Booking Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md transform transition-transform duration-300 scale-100 relative">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Form</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <label className="block">
//                 <span className="text-gray-700">Name</span>
//                 <input
//                   type="text"
//                   className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
//                   required
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-gray-700">Email</span>
//                 <input
//                   type="email"
//                   className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
//                   required
//                 />
//               </label>
//               <label className="block">
//                 <span className="text-gray-700">Phone Number</span>
//                 <input
//                   type="tel"
//                   className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
//                   required
//                 />
//               </label>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <label className="block">
//                   <span className="text-gray-700">Check-in Date</span>
//                   <DatePicker
//                     selected={checkInDate}
//                     onChange={(date) => handleDateChange([date, checkOutDate])}
//                     selectsStart
//                     startDate={checkInDate}
//                     endDate={checkOutDate}
//                     minDate={new Date()}
//                     placeholderText="Select Check-in Date"
//                     className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
//                     dateFormat="MM/dd/yyyy"
//                   />
//                 </label>
//                 <label className="block">
//                   <span className="text-gray-700">Check-out Date</span>
//                   <DatePicker
//                     selected={checkOutDate}
//                     onChange={(date) => handleDateChange([checkInDate, date])}
//                     selectsEnd
//                     startDate={checkInDate}
//                     endDate={checkOutDate}
//                     minDate={checkInDate || new Date()}
//                     placeholderText="Select Check-out Date"
//                     className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
//                     dateFormat="MM/dd/yyyy"
//                   />
//                 </label>
//               </div>
//               <div className="text-gray-700">
//                 Number of nights: {numNights}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
//               >
//                 Submit Booking
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCloseForm}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-transform transform duration-300 hover:scale-125"
//               >
//                 &times;
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Book Now Button */}
//       <button
//         onClick={handleBookNowClick}
//         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
//       >
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default RoomDetails;
