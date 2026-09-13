import React from "react";
import "./About.scss";

function About() {
  const steps = [
    {
      number: "01",
      title: "Select websites",
      text: (
        <>
          Select the websites you want to block in the{" "}
          <b>"Select Websites to Block"</b> section.
        </>
      ),
    },
    {
      number: "02",
      title: "Add another website",
      text: (
        <>
          Enter the name or URL of any other website you want to block. The
          domain name will be automatically detected.
        </>
      ),
    },
    {
      number: "03",
      title: "Download the file",
      text: (
        <>
          Click <b>"Click and Download File"</b>.
          <span className="step-note">
            A .zip file will be downloaded after 3 seconds.
          </span>
        </>
      ),
    },
    {
      number: "04",
      title: "Unzip the file",
      text: <>Unzip the downloaded file at any location on your PC.</>,
    },
    {
      number: "05",
      title: "Open Chrome Extensions",
      text: (
        <>
          Go to <b>"Manage Extensions"</b> in Chrome and select{" "}
          <b>"Load Unpacked"</b>.
        </>
      ),
    },
    {
      number: "06",
      title: "Select the extension",
      text: <>Navigate to the unzipped folder and select it.</>,
    },
    {
      number: "07",
      title: "Enable the extension",
      text: (
        <>
          Switch on the extension and <b>Bien joué!</b> It's done.
        </>
      ),
    },
  ];

  return (
    <div id="about" className="modern-about">

      {/* Header */}
      <div className="about-header">
        <div className="about-eyebrow">GUIDE</div>

        <h1 id="heading_how">HOW TO USE</h1>

        <p className="about-subtitle">
          Follow these simple steps to activate your website blocker.
        </p>
      </div>

      {/* Guide */}
      <div className="how_to_use">

        {/* Intro */}
        <div className="steps-intro">
          <div className="intro-icon">✓</div>

          <div>
            <p className="intro-label">Steps to follow</p>
            <p className="intro-text">
              Complete the steps below to install your blocker.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="steps-container">

          {steps.map((step, index) => (
            <div
              className={`instruction-step ${
                index === steps.length - 1 ? "last-step" : ""
              }`}
              key={step.number}
            >

              <div className="step-number">
                {step.number}
              </div>

              {index !== steps.length - 1 && (
                <div className="step-line"></div>
              )}

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default About;