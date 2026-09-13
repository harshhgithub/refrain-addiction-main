import React, { useEffect, useState } from 'react';
import { Sideadmin, UserCard } from '../components';
import axios from 'axios';

function Userdata() {
  const [usrs, setUsrs] = useState([]);

  useEffect(() => {
    const fetchTheUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/usrs',
        );
        const udta = response.data;
        setUsrs(udta);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchTheUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f6]">

      {/* Fixed Sidebar */}
      <Sideadmin />

      {/* Main Content */}
      <main className="ml-56 min-h-screen px-10 py-10">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[2px] text-gray-400 uppercase mb-2">
              Management
            </p>

            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Connected Users
                </h1>

                <p className="text-gray-500 mt-2">
                  View users connected to the ReClaimYou platform.
                </p>
              </div>

              {/* User Count */}
              <div className="bg-white border border-gray-200 rounded-xl px-5 py-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Total Users
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {usrs.length}
                </p>
              </div>
            </div>
          </div>

          {/* Users List */}
          <div className="space-y-4">

            {usrs.map((user) => (
              <div
                key={user.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition duration-200"
              >
                <UserCard
                  name={user.name}
                  email={user.email}
                  college={user.college}
                  addiction={user.addiction}
                  city={user.city}
                />
              </div>
            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

export default Userdata;