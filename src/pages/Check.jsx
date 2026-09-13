import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components';
import useSharedStore from './Store';
import { Link } from 'react-router-dom';

const UserAppointments = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const email = useSharedStore((state) => state.sharedData);

  useEffect(() => {
    fetch(`http://localhost:8000/api/appointments/user/${email}`)
      .then((response) => response.json())
      .then((data) => setAppointments(data.appointments))
      .catch((error) =>
        console.error('Error fetching appointments:', error)
      );

    console.log(appointments);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f7f7f7]">

      {/* Sidebar */}
      <div className="h-screen sticky top-0 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full px-8 py-10">

        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-[1.5px] text-gray-400">
              APPOINTMENTS
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Booked Appointments
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              View your scheduled appointments and meeting details.
            </p>
          </div>

          {/* Appointments */}
          <ul className="w-full">

            {console.log(appointments)}

            {appointments.map((appointment) => (
              <li key={appointment._id} className="mb-4">

                <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 transition-all duration-200 hover:border-gray-300">

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* Meeting ID */}
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-gray-400 mb-2">
                        MEETING ID
                      </div>

                      <div className="text-sm font-medium text-gray-900 break-all">
                        {appointment.meetId || 'Not generated yet'}
                      </div>
                    </div>

                    {/* Consultant */}
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-gray-400 mb-2">
                        CONSULTANT
                      </div>

                      <div className="text-sm font-medium text-gray-900">
                        {appointment.consultantName}
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-gray-400 mb-2">
                        TIME
                      </div>

                      <div className="text-sm font-medium text-gray-900">
                        {appointment.createdAt}
                      </div>
                    </div>

                  </div>

                </div>

              </li>
            ))}

          </ul>

          {/* Meet Section */}
          <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6">

            <div className="flex flex-col items-center text-center">

              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-700 text-xl">
                  →
                </span>
              </div>

              <p className="text-sm text-gray-600">
                Please copy the meeting ID and paste it here.
              </p>

              <Link
                to="/meet"
                className="mt-3 text-sm font-semibold text-gray-900 hover:text-gray-500 hover:underline transition"
              >
                Click here to join the meeting
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default UserAppointments;