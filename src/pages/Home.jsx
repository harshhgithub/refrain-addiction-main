import React from "react";
import { Sidebar } from "../components";

function Home() {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 overflow-x-hidden bg-[#f7f7f7]">

          <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-8">

            {/* HEADER */}
            <div className="mb-8 flex items-center justify-between">

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                  REFRAIN ADDICTION
                </p>

                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Welcome back
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                  Your recovery journey starts with one small step.
                  Access support, assessment and professional guidance
                  from one place.
                </p>
              </div>

              {/* Simple profile icon */}
              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-black text-white sm:flex">
                <span className="text-lg font-semibold">
                  R
                </span>
              </div>

            </div>


            {/* HERO */}
            <div className="relative mb-8 overflow-hidden rounded-3xl bg-black p-7 text-white shadow-xl md:p-10">

              {/* Decorative shapes */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 right-24 h-64 w-64 rounded-full border border-white/5" />

              <div className="relative max-w-2xl">

                <div className="mb-5 inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300">
                  YOUR RECOVERY SPACE
                </div>

                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  You don't have to face
                  <br />
                  recovery alone.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
                  Understand your situation, explore helpful resources,
                  connect with counselors and take meaningful steps
                  toward a healthier life.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/assessment")}
                  className="mt-7 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Start Assessment →
                </button>

              </div>
            </div>


            {/* QUICK ACTIONS */}
            <div className="mb-8">

              <div className="mb-5">
                <h2 className="text-xl font-bold">
                  Quick Actions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Access the most important features.
                </p>
              </div>


              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                {/* ASSESSMENT */}
                <div
                  onClick={() => navigate("/assessment")}
                  className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-black hover:shadow-lg"
                >

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                      <span className="text-lg font-bold">
                        ✓
                      </span>
                    </div>

                    <span className="text-xl text-gray-300 transition group-hover:text-black">
                      →
                    </span>

                  </div>

                  <h3 className="text-lg font-bold">
                    Assessment
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Take an assessment to understand your current
                    situation and identify areas where you may need
                    support.
                  </p>

                </div>


                {/* COUNSELOR */}
                <div
                  onClick={() => navigate("/consultant")}
                  className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-black hover:shadow-lg"
                >

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                      <span className="text-xl">
                        ♧
                      </span>
                    </div>

                    <span className="text-xl text-gray-300 transition group-hover:text-black">
                      →
                    </span>

                  </div>

                  <h3 className="text-lg font-bold">
                    Find a Counselor
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Connect with professional counselors and get
                    guidance when you need someone to talk to.
                  </p>

                </div>


                {/* CHAT */}
                <div
                  onClick={() => navigate("/chat")}
                  className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-black hover:shadow-lg"
                >

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                      <span className="text-xl">
                        ◌
                      </span>
                    </div>

                    <span className="text-xl text-gray-300 transition group-hover:text-black">
                      →
                    </span>

                  </div>

                  <h3 className="text-lg font-bold">
                    Chat Support
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Communicate with your support network and get
                    assistance during your recovery journey.
                  </p>

                </div>

              </div>

            </div>


            {/* RECOVERY TOOLS */}
            <div className="mb-8">

              <div className="mb-5">
                <h2 className="text-xl font-bold">
                  Recovery Tools
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Tools designed to help you stay focused.
                </p>
              </div>


              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* WEBSITE BLOCKER */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                      <span className="text-lg">
                        ⛨
                      </span>
                    </div>

                    <div className="flex-1">

                      <h3 className="text-lg font-bold">
                        Website Blocker
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Reduce exposure to websites that may trigger
                        unhealthy habits or distractions.
                      </p>

                      <button
                        type="button"
                        onClick={() => navigate("/blockweb")}
                        className="mt-4 rounded-lg border border-black px-4 py-2 text-xs font-semibold transition hover:bg-black hover:text-white"
                      >
                        Open Tool
                      </button>

                    </div>

                  </div>

                </div>


                {/* SUPPORT */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                      <span className="text-lg">
                        +
                      </span>
                    </div>

                    <div className="flex-1">

                      <h3 className="text-lg font-bold">
                        Personal Support
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Explore the support modules available on
                        Refrain to help you understand and manage
                        addictive habits.
                      </p>

                      <button
                        type="button"
                        onClick={() => navigate("/personal-support")}
                        className="mt-4 rounded-lg border border-black px-4 py-2 text-xs font-semibold transition hover:bg-black hover:text-white"
                      >
                        Explore
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* HOW IT WORKS */}
            <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm md:p-9">

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                <div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-gray-400">
                    HOW IT WORKS
                  </p>

                  <h2 className="text-2xl font-bold leading-tight md:text-3xl">
                    One platform.
                    <br />
                    Multiple ways to get help.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    Refrain brings assessment, support, professional
                    counseling and recovery tools together in one
                    simple platform.
                  </p>

                </div>


                <div className="space-y-6">

                  {/* STEP 1 */}
                  <div className="flex gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                      01
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Assess
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Understand your current situation through
                        our assessment.
                      </p>
                    </div>

                  </div>


                  {/* STEP 2 */}
                  <div className="flex gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                      02
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Connect
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Connect with counselors and access support.
                      </p>
                    </div>

                  </div>


                  {/* STEP 3 */}
                  <div className="flex gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                      03
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Recover
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Build healthier habits with practical tools
                        and continued support.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* FINAL CTA */}
            <div className="mb-6 rounded-3xl bg-[#111111] p-7 text-white md:p-9">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                    NEED SUPPORT?
                  </p>

                  <h2 className="text-2xl font-bold">
                    Take the first step today.
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                    Start your assessment and learn more about the
                    support available to you.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() => navigate("/assessment")}
                  className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  Start Assessment →
                </button>

              </div>

            </div>


            {/* FOOTER */}
            <div className="border-t border-gray-200 py-6 text-center">

              <p className="text-xs text-gray-400">
                Refrain Addiction • Recovery & Support Platform
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;