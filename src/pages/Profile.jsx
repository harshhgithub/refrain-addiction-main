import React, { useState, useEffect } from "react";
import { Sidebar } from "../components";
import axios from "axios";
import useSharedStore from "./Store";

function Profile() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  const email = useSharedStore((state) => state.sharedData);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/userss?email=${email}`
        );

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching User:", error);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchUsers();
    }
  }, [email]);

  const getInitials = () => {
    if (!users.name) return "U";

    return users.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black flex">

      {/* Sidebar */}
      <div className="h-screen sticky top-0 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-5 sm:px-8 lg:px-12 py-8">

        {/* Top Header */}
        <div className="max-w-5xl mx-auto">

          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
                Account
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Profile
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                Manage and view your personal information.
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-black text-white text-sm font-bold">
              {getInitials()}
            </div>
          </div>

          {/* Main Profile Card */}
          <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

            {/* Black Profile Header */}
            <div className="bg-black text-white px-6 sm:px-8 py-8">

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold shrink-0">
                  {loading ? "..." : getInitials()}
                </div>

                {/* Identity */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                    Refrain Member
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {loading ? "Loading..." : users.name || "User"}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    {users.email || "No email available"}
                  </p>
                </div>

              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 sm:p-8">

              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold">
                    Personal Information
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your registered account details
                  </p>
                </div>

                <span className="hidden sm:block text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                  VERIFIED MEMBER
                </span>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Name */}
                <div className="group border border-gray-200 rounded-xl p-5 hover:border-black transition">
                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center text-sm font-bold">
                      01
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Full Name
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {loading ? "Loading..." : users.name || "Not available"}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Email */}
                <div className="group border border-gray-200 rounded-xl p-5 hover:border-black transition">
                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center text-sm font-bold">
                      02
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Email Address
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900 break-all">
                        {loading
                          ? "Loading..."
                          : users.email || "Not available"}
                      </p>
                    </div>

                  </div>
                </div>

                {/* City */}
                <div className="group border border-gray-200 rounded-xl p-5 hover:border-black transition">
                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center text-sm font-bold">
                      03
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        City
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : users.city || "Not available"}
                      </p>
                    </div>

                  </div>
                </div>

                {/* College */}
                <div className="group border border-gray-200 rounded-xl p-5 hover:border-black transition">
                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center text-sm font-bold">
                      04
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        College / Institution
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : users.college || "Not available"}
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Bottom Status */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <div>
                  <p className="text-sm font-semibold">
                    Your information is secure
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    This information is associated with your Refrain account.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  ACCOUNT ACTIVE
                </div>

              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default Profile;