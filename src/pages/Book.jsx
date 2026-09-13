import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components';
import ConsultantCard from '../components/ConsultantCard';
import axios from 'axios';

import useSharedStore from './Store';

import divider from '../assets/divider.svg';
import { Link } from 'react-router-dom';

function Book() {
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [selectedConsultantName, setSelectedConsultantName] = useState(null);

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const email = useSharedStore((state) => state.sharedData);

  console.log('EMAIL' + email);

  const handleConsultantSelect = (consultantId, consultantName) => {
    setSelectedConsultant(consultantId);
    setSelectedConsultantName(consultantName);
  };

  const handleBookAppointment = async () => {
    if (!email) {
      alert('Please Login First');
      return;
    }

    setBookingSuccess(false);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/appointments/book',
        {
          mail: email,
          consultantId: selectedConsultant,
          consultantName: selectedConsultantName,
        },
      );

      setBookingSuccess(true);
      console.log(response.data);

      setSelectedConsultant(null);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/counselors',
        );

        const cdata = response.data;

        const filteredData = cdata.filter((counselor) => {
          return counselor.isApproved === true;
        });

        setConsultants(filteredData);
      } catch (error) {
        console.error('Error fetching consultants:', error);
      }
    };

    fetchConsultants();
  }, []);

  return (
    <>
      <div className="book-page flex min-h-screen bg-[#f7f7f7]">

        {/* Sidebar */}
        <div className="h-screen sticky top-0 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="book-main flex flex-col items-center w-full px-8 py-10">

          {/* Header */}
          <div className="w-full max-w-6xl">

            <div className="mb-2">
              <span className="text-xs font-bold tracking-[2px] text-gray-400">
                APPOINTMENTS
              </span>
            </div>

            <div className="flex items-center justify-between gap-5 mb-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Book a new appointment
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Choose a counselor who can support you on your journey.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-gray-600">
                  Support available
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-10 opacity-60">
              <img
                className="w-28"
                src={divider}
                alt="divider"
              />
            </div>

            {/* Consultants */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {consultants.map((consultant) => (
                <button
                  key={consultant._id}
                  onClick={() =>
                    handleConsultantSelect(
                      consultant._id,
                      consultant.name
                    )
                  }
                  className={`group text-left bg-white border rounded-2xl p-3 w-full transition-all duration-200
                    ${
                      selectedConsultant === consultant._id
                        ? 'border-gray-900 shadow-md'
                        : 'border-gray-200 hover:border-gray-400 hover:shadow-sm'
                    }`}
                >
                  <ConsultantCard
                    key={consultant.id}
                    photo={consultant.photo}
                    name={consultant.name}
                    specialty={consultant.speciality}
                    age={consultant.age}
                  />
                </button>
              ))}
            </div>

            {/* Selected Consultant */}
            {selectedConsultant && (
              <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">

                <div className="text-sm text-gray-500 mb-1">
                  SELECTED COUNSELOR
                </div>

                <div className="text-xl font-semibold text-gray-900">
                  {selectedConsultantName}
                </div>

                <div className="mt-2 text-sm text-gray-500">
                  Booking ID:{' '}
                  <span className="font-medium text-gray-800">
                    {selectedConsultant}
                  </span>
                </div>

                <button
                  onClick={handleBookAppointment}
                  className="mt-5 w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200"
                >
                  Book Appointment
                </button>
              </div>
            )}

            {/* Success */}
            {bookingSuccess && (
              <div className="mt-8 bg-white border border-green-200 rounded-2xl p-7 text-center">

                <div className="text-green-600 text-2xl mb-2">
                  ✓
                </div>

                <div className="text-green-700 text-xl font-bold">
                  Appointment has been booked successfully!
                </div>

                <div className="text-gray-500 text-sm mt-2">
                  Your appointment has been confirmed.
                </div>

                <div className="mt-5">
                  <Link
                    to="/Appointment/past"
                    className="inline-flex items-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold transition"
                  >
                    View appointment details →
                  </Link>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Book;