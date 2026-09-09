import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { sbIcon, confi } from '../assets';

function Landing() {
  return (
    <>
      <div className="landing-page modern-theme">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .modern-theme {
          --modern-bg: #07111f;
          --modern-surface: #0d1b2a;
          --modern-surface-2: #12263a;
          --modern-text: #f8fafc;
          --modern-muted: #a8b6c7;
          --modern-accent: #38bdf8;
          --modern-accent-dark: #0ea5e9;
          --modern-border: #22364a;
          color: var(--modern-text);
          background: var(--modern-bg);
          font-family: 'Inter', sans-serif;
        }

        .modern-theme h3,
        .modern-theme h4,
        .modern-theme .banner-w3layouts-inner h3 {
          font-family: 'Inter', sans-serif;
        }

        .modern-theme header {
          background: rgba(7,17,31,.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--modern-border);
        }

        .modern-logo,
        .modern-logo a {
          color: var(--modern-text) !important;
          font-family: 'Inter', sans-serif;
          letter-spacing: -.02em;
        }

        .modern-theme .modern-logo a:last-child {
          font-weight: 700;
        }

        .modern-theme .modern-logo img {
          filter: drop-shadow(0 4px 12px rgba(56,189,248,.18));
        }

        .modern-theme .nav_section nav {
          width: 100%;
        }

        .modern-theme .menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          gap: 14px;
        }

        .modern-theme .menu > li {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .modern-theme .menu > li > a,
        .modern-theme .menu > li > button,
        .modern-theme .menu > li > label {
          color: var(--modern-text);
          white-space: nowrap;
          font-size: 13px;
          letter-spacing: .02em;
        }

        .modern-nav-btn {
          border: 1px solid var(--modern-border) !important;
          background: transparent !important;
          color: var(--modern-text) !important;
          border-radius: 10px !important;
          padding: 9px 22px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          min-width: 180px;
          text-align: center;
          transition: all .2s ease;
        }

        .modern-nav-btn:hover {
          color: var(--modern-bg) !important;
          background: var(--modern-accent) !important;
          border-color: var(--modern-accent) !important;
        }

        .modern-theme .fa {
          font-size: .95em;
        }

        .modern-theme .modern-cta {
          border-radius: 10px !important;
          padding: 13px 28px !important;
          background: var(--modern-accent) !important;
          color: #06111c !important;
          border: none !important;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(56,189,248,.22);
          transition: all .2s ease;
        }

        .modern-theme .modern-cta:hover {
          background: var(--modern-accent-dark) !important;
          transform: translateY(-2px);
        }

        .modern-theme .banner-w3layouts-inner {
  background: rgba(7, 17, 31, 0.82);
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  padding: 32px;
  max-width: 760px;
}

        .modern-theme .banner-w3layouts-inner h3 {
          color: var(--modern-text);
          font-weight: 500;
        }

        .modern-theme .banner-w3layouts-inner h3 span {
          color: var(--modern-accent);
        }

        .modern-theme .banner-w3layouts-inner h4 {
          color: #a8b6c7;
          font-weight: 400;
        }

        .modern-features {
          background:
            radial-gradient(circle at 15% 10%, rgba(56,189,248,.07), transparent 30%),
            radial-gradient(circle at 85% 90%, rgba(14,165,233,.05), transparent 28%),
            var(--modern-bg) !important;
        }

        .modern-theme .banner-bottom,
        .modern-theme .lab-test {
          position: relative;
        }

        .modern-theme .title-w3pvt {
          color: var(--modern-text) !important;
          font-weight: 700;
          letter-spacing: -.02em;
        }

        .modern-features .feature-grids {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
        }

        .modern-features .gd-bottom {
          display: flex;
          border: none !important;
          border-right: none !important;
          border-left: none !important;
          box-shadow: none !important;
        }

        .modern-features .bottom-gd {
          background: var(--modern-surface);
          border: 1px solid var(--modern-border);
          border-radius: 14px;
          padding: 30px 22px;
          width: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 25px rgba(0,0,0,.28);
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .modern-features .bottom-gd:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0,0,0,.42);
        }

        .modern-features .bottom-gd > .fa {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(56,189,248,.14), rgba(14,165,233,.06));
          color: var(--modern-accent);
          font-size: 20px;
        }

        .modern-features h3 {
          color: var(--modern-text);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
        }

        .modern-features p,
        .modern-privacy p {
          color: #a8b6c7;
          line-height: 1.75;
          font-size: 14px;
        }

        .modern-appointment {
          position: relative;
        }

       .modern-appointment .overlay-last {
  background:
    linear-gradient(
      rgba(7, 17, 31, 0.65),
      rgba(7, 17, 31, 0.65)
    ),
    url("../assets/banner1.jpg");   /* Use your existing background image */

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 0;
}

        .modern-appointment .booking {
  background: rgba(10, 25, 47, 0.82);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 18px;
  padding: 36px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

        .modern-appointment .booking h3 {
          color: var(--modern-text);
          font-weight: 500;
        }

        .modern-appointment .booking input {
          border: 1px solid var(--modern-border) !important;
          border-radius: 4px !important;
          background: var(--modern-surface-2) !important;
          color: var(--modern-text) !important;
          margin-bottom: 12px;
          padding: 12px 14px !important;
          outline: none;
        }

        .modern-appointment .booking input::placeholder {
          color: #a8b6c7;
        }

        .modern-appointment .booking input:focus {
          border-color: var(--modern-accent) !important;
          box-shadow: 0 0 0 3px rgba(56,189,248,.16);
        }

        .modern-privacy {
          background: var(--modern-bg);
        }

        .modern-theme footer {
          background: #050b14;
        }

        .modern-theme .cpy-right {
          background: #03070d;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .modern-theme .cpy-right p {
          color: #a8b6c7;
        }

        @media (max-width: 991px) {
          .modern-theme .menu {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }

          .modern-nav-btn {
            margin-bottom: 8px;
            min-width: 0;
          }

          .modern-features .gd-bottom {
            margin-bottom: 16px;
          }
        }
      `}</style>
        {/* mian-content */}
        <div className="main-w3layouts-header-sec">
          {/* header */}
          <header>
            <div className="container">
              <div className="header d-lg-flex justify-content-between align-items-center">
                <div className="header-section">
                  <h1>
                    <a
                      className="navbar-brand logo editContent modern-logo"
                      href="index.html"
                    >
                      <div className="flex">
                        <img src={sbIcon} width={45} alt="" />
                        <a href="https://breadsbangalore.org/" className="mt-2 mx-2 text-3xl font-semibold tracking-tight">
                          Refrain Addiction
                        </a>
                      </div>
                    </a>
                  </h1>
                </div>
                <div className="nav_section">
                  <nav>
                    <label htmlFor="drop" className="toggle mt-lg-0 mt-1">
                      <span className="fa fa-bars" aria-hidden="true" />
                    </label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-3">
                      <li>
                        <Link to="/loginc">
                          <button className="menu modern-nav-btn">
                            LOGIN AS COUNCELOR
                          </button>{' '}
                        </Link>
                      </li>
                      <li>
                        <Link to="/adminlogin">
                          <button className="menu modern-nav-btn">
                            LOGIN AS ADMIN
                          </button>{' '}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* //header */}
          {/* banner */}
          <section className="banner_w3pvt" id="home">
            <div className="csslider infinity" id="slider1">
              <input
                type="radio"
                name="slides"
                defaultChecked="checked"
                id="slides_1"
              />
              <input type="radio" name="slides" id="slides_2" />
              <input type="radio" name="slides" id="slides_3" />
              <input type="radio" name="slides" id="slides_4" />
              <ul>
                <li>
                  <div className="banner-top">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We care and protect <span>your </span> health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3 modern-cta" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-top1">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We do our best for you and <span>your </span>{' '}
                              health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3 modern-cta" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-top2">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We care and protect <span>your </span> health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3 modern-cta" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-top3">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We do our best for you and <span>your </span>{' '}
                              health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3 modern-cta" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="arrows">
                <label htmlFor="slides_1" />
                <label htmlFor="slides_2" />
                <label htmlFor="slides_3" />
                <label htmlFor="slides_4" />
              </div>
            </div>
          </section>
          {/* //banner */}
        </div>
        {/* //header */}
        {/*/banner-bottom */}
        <section className="banner-bottom py-5 modern-features">
          <div className="container-fluid inner-sec-w3ls">
            <div className="feature-grids row text-center">
              <div className="col-lg-3 gd-bottom one">
                <div className="bottom-gd">
                  <span className="fa fa-heart-o" aria-hidden="true" />
                  <h3 className="mb-2">Medication-Assisted Treatment (MAT):</h3>
                  <p>
                    {' '}
                    MAT involves the use of medications, such as methadone,
                    buprenorphine, or naltrexone, in combination with counseling
                    and behavioral therapies. These medications help manage
                    withdrawal symptoms, reduce cravings, and normalize brain
                    chemistry, making it easier for individuals to recover from
                    addiction .
                  </p>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd">
                  <span className="fa fa-dribbble" aria-hidden="true" />
                  <h3 className="mb-2">Cognitive-Behavioral Therapy (CBT): </h3>
                  <p>
                    CBT is a widely used therapy for drug addiction. It focuses
                    on identifying and changing negative thought patterns and
                    behaviors associated with drug use. CBT helps individuals
                    develop coping skills, manage triggers, and build a strong
                    support system..
                  </p>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd">
                  <span className="fa fa-mobile" aria-hidden="true" />
                  <h3 className="mb-2">Motivational Interviewing (MI):</h3>
                  <p>
                    {' '}
                    MI is a counseling technique that helps individuals find
                    motivation to change their addictive behaviors. It involves
                    open-ended questions, active listening, and empathy to
                    enhance an individual's motivation and commitment to
                    recovery.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd">
                  <span className="fa fa-folder-open-o" aria-hidden="true" />
                  <h3 className="mb-2">Online Appointment Booking System: </h3>
                  <p>
                    Many treatment centers now offer online appointment booking
                    systems, allowing individuals to conveniently schedule a
                    visit for drug addiction treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //banner-bottom */}
        {/* /last-content */}
        <section className="last-content modern-appointment">
          <div className="overlay-last">
            <div className="container text-center">
              <div className="last-w3pvt-inner-content row">
                <div className="col-md-6 offset-md-6">
                  <form action="#" className="booking" method="post">
                    <h3 className="mb-4">Book Appointment</h3>
                    <div className="form-group">
                      <input
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        required
                      />
                      <input
                        placeholder="Contact Number"
                        name="number"
                        type="text"
                        required
                      />
                      <input placeholder="Address" type="text" required />
                      <input placeholder="Timing" type="text" required />
                      <span disabled className="book-appo btn mt-3">
                        Quick Appointment{' '}
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //footer */}
        <div className="cpy-right py-3">
  <div className="container position-relative">
    <div className="row">
      <p className="col-12 text-center mb-0">
        © 2026 Refrain Addiction. All rights reserved
      </p>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default Landing;