import React, { useState } from "react";
import { Sidebar } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSharedStore from "./Store";

function Assessment() {
  const [addiction, setAddiction] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const email = useSharedStore((state) => state.sharedData);

  const options = [
    {
      value: "drugs",
      number: "01",
      title: "Drugs",
      description: "Substance or drug-related concerns",
    },
    {
      value: "devices",
      number: "02",
      title: "Devices",
      description: "Excessive phone, gaming or device usage",
    },
    {
      value: "alcohol",
      number: "03",
      title: "Alcohol",
      description: "Alcohol consumption and dependency",
    },
    {
      value: "other",
      number: "04",
      title: "Other",
      description: "Any other habit or addiction concern",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    if (!addiction) {
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:8000/drugtype", {
        email,
        addiction,
      });

      navigate(`/${addiction}`);
    } catch (error) {
      console.error("Assessment submission error:", error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black flex">

      {/* Sidebar */}
      <div className="h-screen sticky top-0 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-5 sm:px-8 lg:px-12 py-8">

        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-8">

            <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
              Assessment
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Choose your focus
            </h1>

            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Select the area you would like to assess. Your responses will
              help us understand your needs and provide relevant support.
            </p>

          </div>

          {/* Assessment Card */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">

            {/* Progress / Step */}
            <div className="flex items-center justify-between mb-7">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Step 01
                </p>

                <h2 className="text-xl font-bold mt-1">
                  What would you like help with?
                </h2>
              </div>

              <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-black text-white text-sm font-bold">
                01
              </div>

            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {options.map((option) => {
                const selected = addiction === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setAddiction(option.value)}
                    className={`
                      text-left w-full rounded-xl border p-5
                      transition-all duration-200
                      ${
                        selected
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-200 hover:border-black"
                      }
                    `}
                  >

                    <div className="flex items-start justify-between">

                      <div
                        className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          text-xs font-bold
                          ${
                            selected
                              ? "bg-white text-black"
                              : "bg-black text-white"
                          }
                        `}
                      >
                        {option.number}
                      </div>

                      {/* Selection indicator */}
                      <div
                        className={`
                          w-5 h-5 rounded-full border flex items-center justify-center
                          ${
                            selected
                              ? "border-white"
                              : "border-gray-300"
                          }
                        `}
                      >
                        {selected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>

                    </div>

                    <h3 className="text-lg font-bold mt-5">
                      {option.title}
                    </h3>

                    <p
                      className={`
                        text-sm mt-1
                        ${
                          selected
                            ? "text-gray-300"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {option.description}
                    </p>

                  </button>
                );
              })}

            </div>

            {/* Bottom */}
            <div className="mt-8 pt-6 border-t border-gray-100">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div>
                  <p className="text-sm font-semibold">
                    Your assessment is private
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Choose an option to continue.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!addiction || loading}
                  className={`
                    px-8 py-3 rounded-xl text-sm font-semibold
                    transition-all
                    ${
                      addiction && !loading
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }
                  `}
                >
                  {loading ? "Saving..." : "Continue →"}
                </button>

              </div>

            </div>

          </section>

          {/* Bottom Note */}
          <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            Choose the option that best describes your current concern.
          </div>

        </div>

      </main>
    </div>
  );
}

export default Assessment;