import React, { useState } from 'react';
import VideoCall from '../components/VideoCall';
import { Sidebar } from '../components';

function Meet() {
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState('');

  const handleJoinCall = async () => {
    if (identity && roomName) {
      try {
        const response = await fetch('http://localhost:8000/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ identity, roomName }),
        });

        console.log(response);

        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
        } else {
          console.log('Failed to fetch Twilio access token');
        }
      } catch (error) {
        console.log(
          'Error occurred while fetching Twilio access token:',
          error,
        );
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f7f7f7]">

      {/* Sidebar */}
      <div className="h-screen sticky top-0 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full px-8 py-10">

        <div className="w-full max-w-3xl">

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-[1.5px] text-gray-400">
              VIDEO CONSULTATION
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Join a meeting
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Enter your identity and room name to connect with your counselor.
            </p>
          </div>

          {/* Join Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7">

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Identity
              </label>

              <input
                className="w-full h-14 rounded-xl px-5 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition"
                type="text"
                placeholder="Enter your identity"
                value={identity}
                onChange={(e) => setIdentity(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Room Name
              </label>

              <input
                className="w-full h-14 rounded-xl px-5 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition"
                type="text"
                placeholder="Enter room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200"
              onClick={handleJoinCall}
            >
              Join Call
            </button>

          </div>

          {/* Video Call */}
          {token && (
            <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6">

              <h1 className="text-xl font-bold text-gray-900 mb-5">
                Reclaim Video App
              </h1>

              <VideoCall
                token={token}
                identity={identity}
                roomName={roomName}
              />

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Meet;