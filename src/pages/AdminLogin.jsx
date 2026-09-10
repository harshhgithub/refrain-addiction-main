import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AdminLogin() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:8000/admin',
        {
          email,
          password,
        }
      );

      if (res.data === 'exist') {
        history('/admindashboard', {
          state: { id: email },
        });
      } else if (res.data === 'notexist') {
        alert('Invalid Credentials!');
      }
    } catch (e) {
      alert('Wrong details');
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen bg-[#07111f] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-180px] left-[-150px] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>


      {/* Admin Login Container */}
      <div className="relative w-full max-w-lg">

        {/* Login Card */}
        <div className="bg-[#0b1b2d]/90 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl px-7 sm:px-10 py-10">

          {/* Header */}
          <div className="text-center mb-8">

            {/* Logo */}
            <div className="flex justify-center mb-5">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">

                <span className="text-xl font-bold text-white">
                  R
                </span>

              </div>

            </div>


            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Admin Login
            </h1>

            <p className="text-slate-400 text-sm mt-2">
              Secure access to the Refrain administration dashboard.
            </p>

          </div>


          {/* Login Form */}
          <form onSubmit={submit}>

            {/* Email */}
            <div className="mb-5">

              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="name@mail.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#071525] border border-slate-700 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />

            </div>


            {/* Password */}
            <div className="mb-6">

              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#071525] border border-slate-700 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />

            </div>


            {/* Sign In */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-cyan-500/20"
            >
              Sign In
            </button>

          </form>


          {/* Divider */}
          <div className="flex items-center gap-3 my-7">

            <div className="flex-1 h-px bg-slate-700"></div>

            <span className="text-xs text-slate-500">
              SECURE ACCESS
            </span>

            <div className="flex-1 h-px bg-slate-700"></div>

          </div>


          {/* Back to Home */}
          <div className="text-center">

            <Link
              to="/"
              className="text-sm text-slate-400 hover:text-cyan-400 transition"
            >
              ← Back to Home
            </Link>

          </div>

        </div>


        {/* Footer */}
        <p className="text-center text-xs text-slate-600 mt-5">
          Refrain • Addiction Support & Recovery Platform
        </p>

      </div>

    </div>
  );
}

export default AdminLogin;