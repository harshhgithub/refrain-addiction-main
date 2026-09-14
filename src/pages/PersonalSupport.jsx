import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "../components";
import useSharedStore from "./Store";
import "./PersonalSupport.css";

const API_BASE = "http://localhost:8000"; // swap for your env var if you centralize it

// Content is keyed by the same values Assessment.jsx saves: drugs, devices, alcohol, other
const contentByAddiction = {
  drugs: {
    copingStrategies: [
      {
        icon: "◌",
        title: "Breathing Exercise",
        description:
          "Take a few slow, deep breaths to calm your mind and reduce stress."
      },
      {
        icon: "◉",
        title: "Manage Cravings",
        description:
          "Pause, identify the trigger and give yourself time before acting on the urge."
      },
      {
        icon: "○",
        title: "Talk to Someone",
        description:
          "Sharing what you are going through can make difficult moments easier."
      },
      {
        icon: "→",
        title: "Change Your Environment",
        description:
          "Step away from places or people that remind you of substance use."
      }
    ],
    resources: [
      {
        number: "01",
        title: "Understanding Substance Triggers",
        description:
          "Learn how situations, emotions and environments can influence substance use."
      },
      {
        number: "02",
        title: "Managing Withdrawal & Cravings",
        description:
          "Understand simple ways to handle urges and give yourself time to make healthier choices."
      },
      {
        number: "03",
        title: "Building a Support Network",
        description:
          "Connecting with people who understand your journey makes recovery easier."
      }
    ]
  },

  devices: {
    copingStrategies: [
      {
        icon: "◌",
        title: "Breathing Exercise",
        description:
          "Take a few slow, deep breaths before reaching for your phone or device."
      },
      {
        icon: "→",
        title: "Take a Short Walk",
        description:
          "Step away from your screen and take a few minutes to clear your mind."
      },
      {
        icon: "◉",
        title: "Notice the Urge to Scroll",
        description:
          "Pause before opening an app out of habit and ask if you actually need to."
      },
      {
        icon: "○",
        title: "Talk to Someone",
        description:
          "Sharing what you are going through can make difficult moments easier."
      }
    ],
    resources: [
      {
        number: "01",
        title: "Understanding Screen Triggers",
        description:
          "Learn how boredom, notifications and habit loops drive excessive device use."
      },
      {
        number: "02",
        title: "Setting Healthy Screen Boundaries",
        description:
          "Simple ways to reduce screen time without feeling like you're missing out."
      },
      {
        number: "03",
        title: "Building a Tech-Balanced Routine",
        description:
          "Small and consistent changes can help create a healthier daily routine."
      }
    ]
  },

  alcohol: {
    copingStrategies: [
      {
        icon: "◌",
        title: "Breathing Exercise",
        description:
          "Take a few slow, deep breaths to calm your mind and reduce stress."
      },
      {
        icon: "◉",
        title: "Manage Cravings",
        description:
          "Pause, identify the trigger and give yourself time before acting on the urge."
      },
      {
        icon: "→",
        title: "Avoid Known Triggers",
        description:
          "Steer clear of situations or settings strongly linked to drinking."
      },
      {
        icon: "○",
        title: "Talk to Someone",
        description:
          "Sharing what you are going through can make difficult moments easier."
      }
    ],
    resources: [
      {
        number: "01",
        title: "Understanding Drinking Triggers",
        description:
          "Learn how situations, emotions and environments can influence alcohol use."
      },
      {
        number: "02",
        title: "Managing Cravings",
        description:
          "Understand simple ways to handle urges and give yourself time to make healthier choices."
      },
      {
        number: "03",
        title: "Building Healthy Habits",
        description:
          "Small and consistent changes can help create a healthier daily routine."
      }
    ]
  },

  other: {
    copingStrategies: [
      {
        icon: "◌",
        title: "Breathing Exercise",
        description:
          "Take a few slow, deep breaths to calm your mind and reduce stress."
      },
      {
        icon: "→",
        title: "Take a Short Walk",
        description:
          "Change your environment and take a few minutes to clear your mind."
      },
      {
        icon: "◉",
        title: "Manage Cravings",
        description:
          "Pause, identify the trigger and give yourself time before acting on the urge."
      },
      {
        icon: "○",
        title: "Talk to Someone",
        description:
          "Sharing what you are going through can make difficult moments easier."
      }
    ],
    resources: [
      {
        number: "01",
        title: "Understanding Triggers",
        description:
          "Learn how situations, emotions and environments can influence addictive behavior."
      },
      {
        number: "02",
        title: "Managing Cravings",
        description:
          "Understand simple ways to handle urges and give yourself time to make healthier choices."
      },
      {
        number: "03",
        title: "Building Healthy Habits",
        description:
          "Small and consistent changes can help create a healthier daily routine."
      }
    ]
  }
};

const PersonalSupport = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [addiction, setAddiction] = useState("other");

  const email = useSharedStore((state) => state.sharedData);

  useEffect(() => {
    if (!email) return;

    async function fetchUserAddiction() {
      try {
        const res = await axios.get(`${API_BASE}/api/userss`, {
          params: { email }
        });
        const savedAddiction = res.data?.addiction;

        if (savedAddiction && contentByAddiction[savedAddiction]) {
          setAddiction(savedAddiction);
        } else {
          setAddiction("other");
        }
      } catch (error) {
        console.error("Error fetching user addiction type:", error);
        setAddiction("other");
      }
    }

    fetchUserAddiction();
  }, [email]);

  const { copingStrategies, resources } = contentByAddiction[addiction];

  return (
    <div className="support-layout">
      <Sidebar />

      <main className="support-main">
        {/* Header */}
        <section className="support-header">
          <div>
            <span className="support-label">PERSONAL SUPPORT</span>

            <h1>Your recovery journey.</h1>

            <p>
              Small steps, healthier habits and the right support can make a
              difference.
            </p>
          </div>
        </section>

        {/* Recovery Plan */}
        <section className="support-section">
          <div className="section-heading">
            <div>
              <span className="small-label">YOUR PLAN</span>
              <h2>Recovery Plan</h2>
            </div>

            <span className="progress-text">2 of 4 completed</span>
          </div>

          <div className="recovery-card">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div className="plan-list">
              <div className="plan-item completed">
                <div className="check-circle">✓</div>

                <div>
                  <h3>Understand your triggers</h3>
                  <p>Identify situations that may influence your behavior.</p>
                </div>
              </div>

              <div className="plan-item completed">
                <div className="check-circle">✓</div>

                <div>
                  <h3>Recognize your patterns</h3>
                  <p>Become aware of habits and situations that affect you.</p>
                </div>
              </div>

              <div className="plan-item">
                <div className="empty-circle">3</div>

                <div>
                  <h3>Build a healthy routine</h3>
                  <p>
                    Create small daily habits that support your recovery.
                  </p>
                </div>
              </div>

              <div className="plan-item">
                <div className="empty-circle">4</div>

                <div>
                  <h3>Practice coping strategies</h3>
                  <p>
                    Learn practical ways to manage difficult moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Check-in */}
        <section className="support-section">
          <div className="section-heading">
            <div>
              <span className="small-label">TODAY</span>
              <h2>Daily Check-in</h2>
            </div>
          </div>

          <div className="checkin-card">
            <div className="checkin-content">
              <h3>How are you feeling today?</h3>

              <p>
                A quick check-in can help you become more aware of how you are
                feeling.
              </p>
            </div>

            <div className="mood-options">
              <button
                className={selectedMood === "good" ? "mood active" : "mood"}
                onClick={() => setSelectedMood("good")}
              >
                <span>😊</span>
                <strong>Good</strong>
              </button>

              <button
                className={selectedMood === "okay" ? "mood active" : "mood"}
                onClick={() => setSelectedMood("okay")}
              >
                <span>😐</span>
                <strong>Okay</strong>
              </button>

              <button
                className={
                  selectedMood === "struggling" ? "mood active" : "mood"
                }
                onClick={() => setSelectedMood("struggling")}
              >
                <span>😟</span>
                <strong>Struggling</strong>
              </button>

              <button
                className={
                  selectedMood === "needhelp" ? "mood active" : "mood"
                }
                onClick={() => setSelectedMood("needhelp")}
              >
                <span>🤝</span>
                <strong>Need Support</strong>
              </button>
            </div>

            {selectedMood && (
              <div className="checkin-message">
                Thanks for checking in. Being aware of how you feel is an
                important step.
              </div>
            )}
          </div>
        </section>

        {/* Coping Strategies */}
        <section className="support-section">
          <div className="section-heading">
            <div>
              <span className="small-label">WHEN YOU NEED IT</span>
              <h2>Coping Strategies</h2>
            </div>
          </div>

          <div className="strategy-grid">
            {copingStrategies.map((strategy, index) => (
              <div className="strategy-card" key={index}>
                <div className="strategy-icon">{strategy.icon}</div>

                <h3>{strategy.title}</h3>

                <p>{strategy.description}</p>

                <button className="learn-button">Learn more →</button>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="support-section resources-section">
          <div className="section-heading">
            <div>
              <span className="small-label">LEARN & GROW</span>
              <h2>Recovery Resources</h2>
            </div>
          </div>

          <div className="resources-card">
            {resources.map((resource, index) => (
              <div className="resource-item" key={index}>
                <div className="resource-number">{resource.number}</div>

                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>

                <span className="resource-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom message */}
        <section className="support-footer-card">
          <div>
            <span className="small-label">REMEMBER</span>

            <h2>You don't have to do it alone.</h2>

            <p>
              Recovery is a journey. Take things one step at a time and reach
              out for support whenever you need it.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalSupport;