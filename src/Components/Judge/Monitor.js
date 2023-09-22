import React from 'react'

function Monitor() {
  // Dummy data for client appointments, hearing dates, and problems
  const dummyJudgeSchedule = [
    {
      caseId: '12345',
      clientName: 'Rajesh Sharma',
      date: '2023-09-23',
      time: '09:00 AM',
      problem: 'Criminal Defense',
    },
    {
      caseId: '54321',
      clientName: 'Priya Verma',
      date: '2023-09-23',
      time: '09:30 AM',
      problem: 'Family Law',
    },
    {
      caseId: '98765',
      clientName: 'Amit Patel',
      date: '2023-09-23',
      time: '10:00 AM',
      problem: 'Personal Injury',
    },
    {
      caseId: '67890',
      clientName: 'Meera Singh',
      date: '2023-09-23',
      time: '10:30 AM',
      problem: 'Real Estate',
    },
    {
      caseId: '23456',
      clientName: 'Anita Gupta',
      date: '2023-09-23',
      time: '11:00 AM',
      problem: 'Immigration',
    },
    {
      caseId: '78901',
      clientName: 'Rakesh Kumar',
      date: '2023-09-23',
      time: '11:30 AM',
      problem: 'Business Law',
    },
    {
      caseId: '34567',
      clientName: 'Neeta Joshi',
      date: '2023-09-23',
      time: '01:00 PM',
      problem: 'Divorce',
    },
    {
      caseId: '12346',
      clientName: 'Vishal Mishra',
      date: '2023-09-23',
      time: '01:30 PM',
      problem: 'Personal Injury',
    },
    {
      caseId: '65432',
      clientName: 'Shweta Reddy',
      date: '2023-09-23',
      time: '02:00 PM',
      problem: 'Employment Law',
    },
    {
      caseId: '87654',
      clientName: 'Neha Choudhury',
      date: '2023-09-23',
      time: '02:30 PM',
      problem: 'Estate Planning',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Judge's Schedule</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Case ID</th>
            <th className="py-2 px-4 text-left">Client Name</th>
            <th className="py-2 px-4 text-left">Hearing Date</th>
            <th className="py-2 px-4 text-left">Time</th>
            <th className="py-2 px-4 text-left">Problem</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {dummyJudgeSchedule.map((appointment, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}>
              <td className="py-2 px-4">{appointment.caseId}</td>
              <td className="py-2 px-4">{appointment.clientName}</td>
              <td className="py-2 px-4">{appointment.date}</td>
              <td className="py-2 px-4">{appointment.time}</td>
              <td className="py-2 px-4">{appointment.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Monitor