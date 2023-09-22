import React from 'react'

function Monitor() {
  // Dummy data for client appointments, hearing dates, and problems
  const clients = [
    {
      name: 'John Doe',
      appointmentDate: '2023-10-10',
      hearingDate: '2023-10-20',
      problem: 'Criminal Defense',
    },
    {
      name: 'Jane Smith',
      appointmentDate: '2023-09-15',
      hearingDate: '2023-09-25',
      problem: 'Family Law',
    },
    {
      name: 'Bob Johnson',
      appointmentDate: '2023-09-20',
      hearingDate: '2023-10-05',
      problem: 'Personal Injury',
    },
  ];
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Client Monitoring</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Appointment Date</th>
            <th className="py-2 px-4 text-left">Hearing Date</th>
            <th className="py-2 px-4 text-left">Problem</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {clients.map((client, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}>
              <td className="py-2 px-4">{client.name}</td>
              <td className="py-2 px-4">{client.appointmentDate}</td>
              <td className="py-2 px-4">{client.hearingDate}</td>
              <td className="py-2 px-4">{client.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Monitor