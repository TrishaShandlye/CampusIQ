import { useState } from "react";
import "./App.css";
import Login from "./Login";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // STUDENT DASHBOARD
  if (userRole === "student") {
    return (
      <StudentDashboard
        onLogout={() => {
          setUserRole(null);
          setShowLogin(false);
        }}
      />
    );
  }

  // TEACHER DASHBOARD
  if (userRole === "teacher") {
    return (
      <TeacherDashboard
        onLogout={() => {
          setUserRole(null);
          setShowLogin(false);
        }}
      />
    );
  }

  // LOGIN PAGE
  if (showLogin) {
    return (
      <Login
        onBack={() => setShowLogin(false)}
        onLogin={(role) => {
          setUserRole(role);
          setShowLogin(false);
        }}
      />
    );
  }

  // HOME PAGE
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Campus<span>IQ</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>

          <button
            className="login-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main className="hero">

        <div className="hero-content">

          <div className="badge">
            🎓 Smart Academic Platform
          </div>

          <h1>
            Your academics.
            <br />
            <span>One place.</span>
          </h1>

          <p>
            Find notes, previous year papers, important questions
            and academic answers — all in one place.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setShowLogin(true)}
            >
              Get Started →
            </button>

            <button className="secondary-btn">
              Explore Resources
            </button>
          </div>

        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="dashboard-preview">

          <div className="preview-top">
            <div>
              <small>WELCOME BACK</small>

              <h3>
                Good morning, Student 👋
              </h3>
            </div>

            <div className="profile-circle">
              S
            </div>
          </div>

          <div className="search-box">
            🔍
            <span>
              Search questions, subjects, notes...
            </span>
          </div>

          <div className="preview-cards">

            <div className="mini-card">
              <div className="mini-icon">
                📚
              </div>

              <div>
                <strong>Notes</strong>
                <small>120+ resources</small>
              </div>
            </div>

            <div className="mini-card">
              <div className="mini-icon">
                📝
              </div>

              <div>
                <strong>PYQs</strong>
                <small>Past papers</small>
              </div>
            </div>

            <div className="mini-card">
              <div className="mini-icon">
                💡
              </div>

              <div>
                <strong>Questions</strong>
                <small>Quick answers</small>
              </div>
            </div>

          </div>

          {/* RECENT SECTION */}
          <div className="recent-section">

            <div className="section-heading">
              <strong>Recently Uploaded</strong>
              <span>View all →</span>
            </div>

            <div className="resource">

              <div className="file-icon">
                PDF
              </div>

              <div>
                <strong>
                  Compiler Design — Unit 3
                </strong>

                <small>
                  Notes • Uploaded recently
                </small>
              </div>

            </div>

            <div className="resource">

              <div className="file-icon">
                PDF
              </div>

              <div>
                <strong>
                  DAA — Previous Year Questions
                </strong>

                <small>
                  PYQ • 2025
                </small>
              </div>

            </div>

          </div>

        </div>

      </main>

      {/* FEATURES */}
      <section
        id="features"
        className="features"
      >

        <div className="section-title">

          <span>
            WHY CAMPUSIQ?
          </span>

          <h2>
            Everything you need to study smarter.
          </h2>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div>🔎</div>

            <h3>
              Smart Search
            </h3>

            <p>
              Quickly find questions, topics and academic resources.
            </p>

          </div>

          <div className="feature-card">

            <div>📚</div>

            <h3>
              Study Resources
            </h3>

            <p>
              Access notes and previous year papers subject-wise.
            </p>

          </div>

          <div className="feature-card">

            <div>⚡</div>

            <h3>
              Latest Updates
            </h3>

            <p>
              Stay updated with the latest resources uploaded by teachers.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="logo">
          Campus<span>IQ</span>
        </div>

        <p>
          Your academics. One place.
        </p>

      </footer>

    </div>
  );
}

export default App;