import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sideadmin } from '../components';

const AdminDashboard = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/consultants',
        );
        setCounselors(response.data);
      } catch (error) {
        console.error('Error fetching counselors:', error);
      }
    };

    fetchCounselors();
  }, []);

  const handleApproveCounselor = async (id) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/counselors/${id}/approve`
      );

      setCounselors((prevCounselors) =>
        prevCounselors.filter(
          (counselor) => counselor._id !== id
        )
      );
    } catch (error) {
      console.error('Error approving counselor:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6]">

      {/* Sidebar */}
      <Sideadmin />

      {/* Main Content */}
      <main className="ml-56 min-h-screen px-10 py-10">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-10">

            <p className="text-xs font-semibold tracking-[2px] text-gray-400 uppercase mb-2">
              Administration
            </p>

            <div className="flex items-end justify-between">

              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Pending Counselor Approvals
                </h1>

                <p className="text-gray-500 mt-2">
                  Review and approve counselor registration requests.
                </p>
              </div>

              {/* Counselor Count */}
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Pending
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {counselors.filter(
                    (counselor) => !counselor.isApproved
                  ).length}
                </p>
              </div>

            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

            <table className="w-full">

              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">

                  <th className="text-left px-6 py-4 text-xs font-semibold tracking-wide text-gray-500">
                    NAME
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold tracking-wide text-gray-500">
                    SPECIALTY
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold tracking-wide text-gray-500">
                    APPROVAL STATUS
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold tracking-wide text-gray-500">
                    ACTION
                  </th>

                </tr>
              </thead>

              <tbody>

                {counselors.map((counselor) => (

                  <tr
                    key={counselor._id}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition"
                  >

                    {console.log(counselor._id)}

                    {/* Name */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                          <span className="text-sm font-semibold text-gray-500">
                            {counselor.name
                              ? counselor.name.charAt(0).toUpperCase()
                              : 'C'}
                          </span>
                        </div>

                        <span className="text-sm font-semibold text-gray-900">
                          {counselor.name}
                        </span>

                      </div>
                    </td>

                    {/* Specialty */}
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {counselor.speciality}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      {counselor.isApproved ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                          Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                          Pending Approval
                        </span>
                      )}

                    </td>

                    {/* Action */}
                    <td className="px-6 py-5">

                      {!counselor.isApproved ? (

                        <button
                          className="bg-gray-900 hover:bg-black text-white font-semibold py-2 px-5 rounded-lg text-sm transition"
                          onClick={() =>
                            handleApproveCounselor(
                              counselor._id
                            )
                          }
                        >
                          Approve
                        </button>

                      ) : (

                        <span className="text-gray-400 text-sm">
                          No action required
                        </span>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {/* Empty State */}
            {counselors.length === 0 && (
              <div className="py-16 text-center">

                <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-xl">
                    ✓
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  No pending counselors
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  There are currently no counselor requests to review.
                </p>

              </div>
            )}

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;