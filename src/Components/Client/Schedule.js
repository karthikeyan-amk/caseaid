import React, { useState } from 'react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const [isAppointmentBooked, setAppointmentBooked] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can send the appointment data to a backend API for booking.
    // For this example, we'll simply set the "isAppointmentBooked" state to true.
    setAppointmentBooked(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Schedule an Appointment with Advocate/ Lawyer</h2>
      {isAppointmentBooked ? (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          Successfully booked your appointment!
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-400"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default Schedule;
