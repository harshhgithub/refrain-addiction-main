import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { sbIcon } from '../assets';
import { RiLogoutBoxLine } from 'react-icons/ri';

function Sideadmin() {
  return (
    <div className="w-56 h-screen fixed top-0 left-0 bg-white border-r border-gray-200">

      {/* Logo */}
      <div className="flex items-center gap-2.5 font-medium border-b py-3 border-gray-200 mx-3">
        <img src={sbIcon} width={45} alt="" />

        <span className="text-xl whitespace-pre text-gray-900">
          ReClaimYou
        </span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col h-full">
        <ul className="whitespace-pre px-2.5 text-[1rem] py-4 flex flex-col gap-1 font-medium overflow-x-hidden">

          {/* Dashboard */}
          <li>
            <NavLink
              to={'/admindashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <AiOutlineAppstore size={23} className="min-w-max" />
              Dashboard
            </NavLink>
          </li>

          {/* Users Data */}
          <li>
            <NavLink
              to={'/userdata'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <BsPerson size={23} className="min-w-max" />
              Users Data
            </NavLink>
          </li>

          {/* Logout */}
          <li className="mt-4">
            <div className="border-y py-4 border-gray-200">
              <NavLink
                to={'/'}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
              >
                <RiLogoutBoxLine size={23} className="min-w-max" />
                Logout
              </NavLink>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Sideadmin;