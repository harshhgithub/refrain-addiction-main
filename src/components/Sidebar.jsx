import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";
import {
  MdOutlineAssessment,
  MdChat,
  MdVideoCall,
  MdLocalFireDepartment,
} from "react-icons/md";
import { sbIcon } from "../assets";
import SubMenu from "./SubMenu";
import { SiHandshake } from "react-icons/si";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = ({ email }) => {
  const isTabletMid = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [open, setOpen] = useState(isTabletMid ? false : true);

  const sidebarRef = useRef();
  const { pathname } = useLocation();

  /* -----------------------------
     Responsive sidebar
  ----------------------------- */

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    }
  }, [pathname, isTabletMid]);

  /* -----------------------------
     Sidebar animation
  ----------------------------- */

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },

        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },

        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  /* -----------------------------
     Appointment submenu
  ----------------------------- */

  const subMenusList = [
    {
      name: "Appointment",
      icon: SiHandshake,
      menus: ["Book an Appointment", "Your Appointments"],
      path: ["new", "past"],
    },
  ];

  /* -----------------------------
     Navigation item
  ----------------------------- */

  const navItemClass = ({ isActive }) =>
    `
      group flex items-center gap-4
      w-full px-3 py-3
      rounded-xl
      text-sm font-medium
      transition-all duration-200
      ${
        isActive
          ? "bg-gray-100 text-black"
          : "text-gray-600 hover:bg-gray-50 hover:text-black"
      }
    `;

  return (
    <div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          md:hidden fixed inset-0 z-[998]
          bg-black/30 backdrop-blur-[2px]
          ${open ? "block" : "hidden"}
        `}
      />

      {/* Sidebar */}
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{
          x: isTabletMid ? -250 : 0,
        }}
        animate={open ? "open" : "closed"}
        className="
          bg-white
          text-gray-900
          border-r border-gray-200
          z-[999]
          max-w-[16rem]
          w-[16rem]
          overflow-hidden
          md:sticky md:top-0
          fixed
          h-screen
          shadow-sm
        "
      >

        {/* --------------------------------
            Logo
        -------------------------------- */}
        <div
          className="
            flex items-center gap-3
            h-[72px]
            px-4
            border-b border-gray-200
            mx-2
          "
        >
          <img
            src={sbIcon}
            width={40}
            height={40}
            alt="ReClaimYou"
            className="rounded-lg shrink-0"
          />

          <span
            className={`
              text-xl
              font-semibold
              tracking-tight
              whitespace-nowrap
              transition-all duration-200
              ${open ? "opacity-100" : "opacity-0"}
            `}
          >
            ReClaimYou
          </span>
        </div>

        {/* --------------------------------
            Navigation
        -------------------------------- */}
        <div className="flex flex-col h-[calc(100%-72px)]">

          <ul
            className="
              px-3
              py-5
              flex flex-col
              gap-1
              font-medium
              overflow-x-hidden
              overflow-y-auto
              scrollbar-thin
              scrollbar-track-white
              scrollbar-thumb-gray-200
            "
          >

            {/* Dashboard */}
            <li>
              <NavLink
                to="/home"
                className={navItemClass}
              >
                <AiOutlineAppstore
                  size={22}
                  className="min-w-max"
                />

                <span
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${open ? "opacity-100" : "opacity-0"}
                  `}
                >
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
  <NavLink to="/streak" className={navItemClass}>
    <MdLocalFireDepartment size={22} className="min-w-max" />
    <span className={`whitespace-nowrap transition-all duration-200 ${open ? "opacity-100" : "opacity-0"}`}>
      Streak
    </span>
  </NavLink>
</li>

            {/* Profile */}
            <li>
              <NavLink
                to="/profile"
                className={navItemClass}
              >
                <BsPerson
                  size={22}
                  className="min-w-max"
                />

                <span
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${open ? "opacity-100" : "opacity-0"}
                  `}
                >
                  Profile
                </span>
              </NavLink>
            </li>

            {/* Assessment */}
            <li>
              <NavLink
                to="/assessment"
                className={navItemClass}
              >
                <MdOutlineAssessment
                  size={22}
                  className="min-w-max"
                />

                <span
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${open ? "opacity-100" : "opacity-0"}
                  `}
                >
                  Assessment
                </span>
              </NavLink>
            </li>

            {/* Chat */}
            <li>
              <NavLink
                to="/chat"
                className={navItemClass}
              >
                <MdChat
                  size={22}
                  className="min-w-max"
                />

                <span
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${open ? "opacity-100" : "opacity-0"}
                  `}
                >
                  Chat with Me
                </span>
              </NavLink>
            </li>

            {/* Personal Support */}
<li>
  <NavLink
    to="/personal-support"
    className={navItemClass}
  >
    <MdSupportAgent
      size={22}
      className="min-w-max"
    />

    <span
      className={`
        whitespace-nowrap
        transition-all duration-200
        ${open ? "opacity-100" : "opacity-0"}
      `}
    >
      Personal Support
    </span>
  </NavLink>
</li>

            {/* --------------------------------
                Connect With Us
            -------------------------------- */}
            {(open || isTabletMid) && (
              <div className="border-y border-gray-200 py-4 my-3">

                <small className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 inline-block mb-2">
                  Connect With Us
                </small>

                {subMenusList?.map((menu) => (
                  <div
                    key={menu.name}
                    className="flex flex-col gap-1"
                  >
                    <SubMenu data={menu} />
                  </div>
                ))}

              </div>
            )}

            {/* Meet */}
            <li>
              <NavLink
                to="/meet"
                className={navItemClass}
              >
                <MdVideoCall
                  size={22}
                  className="min-w-max"
                />

                <span
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${open ? "opacity-100" : "opacity-0"}
                  `}
                >
                  Meet now
                </span>
              </NavLink>
            </li>

            {/* Logout */}
            <li className="mt-2 pt-3 border-t border-gray-200">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `
                    group flex items-center gap-4
                    w-full px-3 py-3
                    rounded-xl
                    text-sm font-medium
                    text-gray-600
                    hover:bg-red-50
                    hover:text-red-600
                    transition-all duration-200
                  `
                }
              >
                <RiLogoutBoxLine
                  size={22}
                  className="min-w-max"
                />

                <span
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${open ? "opacity-100" : "opacity-0"}
                  `}
                >
                  Logout
                </span>
              </NavLink>

            </li>

          </ul>

        </div>

        {/* --------------------------------
            Desktop Collapse Button
        -------------------------------- */}
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          className="
            absolute
            w-8 h-8
            flex items-center justify-center
            md:flex
            hidden
            right-2
            bottom-8
            cursor-pointer
            rounded-full
            border border-gray-200
            bg-white
            text-gray-500
            hover:text-black
            hover:border-gray-400
            transition
            z-50
          "
        >
          <IoIosArrowBack size={18} />
        </motion.div>

      </motion.div>

      {/* --------------------------------
          Mobile Menu Button
      -------------------------------- */}
      <div
        className="
          m-3
          md:hidden
          fixed
          top-2
          left-2
          z-[997]
          w-10 h-10
          bg-white
          border border-gray-200
          rounded-xl
          flex items-center justify-center
          shadow-sm
          cursor-pointer
        "
        onClick={() => setOpen(true)}
      >
        <MdMenu
          size={23}
          className="text-gray-700"
        />
      </div>

    </div>
  );
};

export default Sidebar;