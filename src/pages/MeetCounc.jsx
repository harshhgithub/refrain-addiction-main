import React, { useState } from 'react';
import VideoCall from '../components/VideoCall';
import { Sidecounc } from '../components';

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

      <div className="h-screen sticky top-0 flex-shrink-0">
        <Sidecounc />
      </div>

      <div className="flex flex-col w-1/2 ml-80 py-10">

        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[1.5px] text-gray-400 mb-2">
            VIDEO CONSULTATION
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Join a meeting
          </h1>

          <p className="text-sm text-gray-500">
            Enter your details to join the video call.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">

          <input
            className="w-full h-16 mb-5 rounded-xl px-6 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 transition"
            type="text"
            placeholder="Enter your identity"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
          />

          <input
            className="w-full h-16 rounded-xl px-6 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 transition"
            type="text"
            placeholder="Enter room name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />

          <button
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl mt-6 transition"
            onClick={handleJoinCall}
          >
            Join Call
          </button>

        </div>

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
  );
}

export default Meet;