import React from 'react';
import { FiUser } from 'react-icons/fi';

const UserCard = ({ name, email, college, addiction, city }) => {
  
  return (
    <div className="overflow-hidden">

      <div className="font-bold text-xl text-gray-900 flex items-center ml-2">

        {/* Generic User Icon */}
        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mr-2">
          <FiUser className="text-gray-500 text-xl" />
        </div>

        {name}
      </div>

      <div className="px-2 py-2 grid grid-cols-4 gap-3">

        <p className="text-gray-700 text-base">
          Email: {email}
        </p>

        <p className="text-gray-700 text-base">
          College: {college}
        </p>

        <p className="text-gray-700 text-base">
          Addiction: {addiction}
        </p>

        <p className="text-gray-700 text-base">
          City: {city}
        </p>

      </div>

    </div>
  );
};

export default UserCard;