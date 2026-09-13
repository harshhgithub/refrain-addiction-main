// require("dotenv").config();

import React from "react";
import { Sidebar } from "../components";
import { useState } from "react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = process.env.REACT_APP_API_KEY;

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

function Chat() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your Partner! Ask me anything!",
      sentTime: "just now",
      sender: "Partner",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";

      if (messageObject.sender === "Partner") {
        role = "assistant";
      } else {
        role = "user";
      }

      return {
        role: role,
        content: messageObject.message,
      };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "Partner",
          },
        ]);

        setIsTyping(false);
      });
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-900 flex">

      {/* Sidebar */}
      <div className="h-screen sticky top-0 shrink-0">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6">

        <div className="max-w-5xl mx-auto h-[calc(100vh-48px)] flex flex-col">

          {/* Page Header */}
          <div className="mb-5 flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
                Support
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-1">
                Chat With Partner
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                A private space to ask questions and get support.
              </p>
            </div>

            {/* Online Status */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">

              <span className="w-2 h-2 rounded-full bg-green-500"></span>

              <span className="text-xs font-semibold text-gray-600">
                AI ONLINE
              </span>

            </div>

          </div>

          {/* Chat Card */}
          <div className="flex-1 min-h-0 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

            {/* Chat Header */}
            <div className="h-16 px-5 sm:px-6 border-b border-gray-100 flex items-center justify-between bg-white">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 text-gray-900 flex items-center justify-center font-bold">
                  P
                </div>

                <div>
                  <p className="font-bold text-sm text-gray-900">
                    Partner
                  </p>

                  <p className="text-xs text-gray-400">
                    AI Support Assistant
                  </p>
                </div>

              </div>

              <div className="text-xs text-gray-400 hidden sm:block">
                Your conversation is active
              </div>

            </div>

            {/* ChatScope */}
            <div className="chat-wrapper h-[calc(100%-64px)]">

              <MainContainer>

                <ChatContainer>

                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={
                      isTyping ? (
                        <TypingIndicator content="Partner is typing" />
                      ) : null
                    }
                  >

                    {messages.map((message, i) => {
                      return (
                        <Message
                          key={i}
                          model={message}
                        />
                      );
                    })}

                  </MessageList>

                  <MessageInput
                    placeholder="Type your message..."
                    onSend={handleSend}
                  />

                </ChatContainer>

              </MainContainer>

            </div>

          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 mt-3">
            Partner provides general support and information. It is not a
            replacement for professional medical advice.
          </p>

        </div>

      </main>

      {/* ChatScope Theme Overrides */}
      <style>{`

        /* ==============================
           MAIN CHAT
        ============================== */

        .chat-wrapper .cs-main-container {
          border: none !important;
          background: #ffffff !important;
        }

        .chat-wrapper .cs-chat-container {
          border: none !important;
          background: #ffffff !important;
        }


        /* ==============================
           MESSAGE AREA
        ============================== */

        .chat-wrapper .cs-message-list {
          background: #fafafa !important;
          padding: 20px !important;
        }


        /* ==============================
           NORMAL MESSAGE TEXT
        ============================== */

        .chat-wrapper .cs-message__content {
          box-shadow: none !important;
          border: none !important;
          padding: 10px 14px !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
        }

        /* Incoming message */

        .chat-wrapper .cs-message--incoming .cs-message__content {
          background: #eeeeee !important;
          color: #1f2937 !important;
          border-radius: 16px 16px 16px 4px !important;
        }

        .chat-wrapper .cs-message--incoming .cs-message__content p {
          color: #1f2937 !important;
        }

        /* Outgoing message */

        .chat-wrapper .cs-message--outgoing .cs-message__content {
          background: #111111 !important;
          color: #ffffff !important;
          border-radius: 16px 16px 4px 16px !important;
        }

        .chat-wrapper .cs-message--outgoing .cs-message__content p {
          color: #ffffff !important;
        }


        /* ==============================
           INPUT AREA
        ============================== */

        .chat-wrapper .cs-message-input {
          border-top: 1px solid #eeeeee !important;
          background: #ffffff !important;
          padding: 12px 16px !important;
        }

        /* Input box */

        .chat-wrapper
        .cs-message-input__content-editor-wrapper {
          background: #f5f5f5 !important;
          border: 1px solid #e5e5e5 !important;
          border-radius: 12px !important;
          box-shadow: none !important;
        }

        /* Actual input text */

        .chat-wrapper .cs-message-input__content-editor {
          background: transparent !important;
          color: #111111 !important;
          font-size: 14px !important;
        }

        /* Placeholder */

        .chat-wrapper
        .cs-message-input__content-editor[data-placeholder]:before {
          color: #9ca3af !important;
          opacity: 1 !important;
        }

        .chat-wrapper
        .cs-message-input__content-editor::placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }

        /* Remove blue focus */

        .chat-wrapper
        .cs-message-input__content-editor-wrapper:focus-within {
          border-color: #d1d5db !important;
          box-shadow: none !important;
          outline: none !important;
        }


        /* ==============================
           SEND BUTTON
        ============================== */

        .chat-wrapper .cs-button--send {
          color: #6b7280 !important;
          background: transparent !important;
        }

        .chat-wrapper .cs-button--send:hover {
          color: #111111 !important;
          background: transparent !important;
        }


        /* ==============================
           ATTACHMENT BUTTON
        ============================== */

        .chat-wrapper .cs-button--attachment {
          color: #6b7280 !important;
          background: transparent !important;
        }

        .chat-wrapper .cs-button--attachment:hover {
          color: #111111 !important;
          background: transparent !important;
        }


        /* ==============================
           TYPING INDICATOR
        ============================== */

        .chat-wrapper .cs-typing-indicator {
          background: transparent !important;
          color: #9ca3af !important;
        }

        .chat-wrapper .cs-typing-indicator__text {
          color: #9ca3af !important;
        }

        .chat-wrapper .cs-typing-indicator__dot {
          background-color: #9ca3af !important;
        }


        /* ==============================
           SCROLLBAR
        ============================== */

        .chat-wrapper .cs-message-list__scroll-wrapper::-webkit-scrollbar {
          width: 6px;
        }

        .chat-wrapper .cs-message-list__scroll-wrapper::-webkit-scrollbar-track {
          background: #fafafa;
        }

        .chat-wrapper .cs-message-list__scroll-wrapper::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }


        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 640px) {

          .chat-wrapper .cs-message-list {
            padding: 12px !important;
          }

          .chat-wrapper .cs-message-input {
            padding: 8px !important;
          }

          .chat-wrapper .cs-message__content {
            font-size: 13px !important;
          }

        }

      `}</style>

    </div>
  );
}

export default Chat;