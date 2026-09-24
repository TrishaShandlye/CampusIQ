import { useState } from "react";
import "./StudentDashboard.css";

function StudentDashboard({ onLogout }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const resources = [
    {
      title: "Compiler Design — Unit 3",
      subject: "Compiler Design",
      type: "Notes",
      icon: "📚",
      color: "purple",
    },
    {
      title: "DAA — Previous Year Questions",
      subject: "Design & Analysis of Algorithms",
      type: "PYQ",
      icon: "📝",
      color: "blue",
    },
    {
      title: "Computer Networks — Important Questions",
      subject: "Computer Networks",
      type: "Questions",
      icon: "💡",
      color: "orange",
    },
    {
      title: "Operating System — Unit 4 Notes",
      subject: "Operating System",
      type: "Notes",
      icon: "📖",
      color: "green",
    },
    {
      title: "Computer Graphics — PYQ 2025",
      subject: "Computer Graphics",
      type: "PYQ",
      icon: "📄",
      color: "pink",
    },
    {
      title: "Wireless Communication — Important Topics",
      subject: "Wireless Communication",
      type: "Questions",
      icon: "⭐",
      color: "yellow",
    },
  ];

  const categories = ["All", "Notes", "PYQ", "Questions"];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.type === activeCategory;

    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.subject.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="student-dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          Campus<span>IQ</span>
        </div>

        <div className="sidebar-menu">

          <button className="menu-item active">
            <span>⌂</span>
            Dashboard
          </button>

          <button className="menu-item">
            <span>📚</span>
            Notes
          </button>

          <button className="menu-item">
            <span>📝</span>
            Previous Papers
          </button>

          <button className="menu-item">
            <span>💡</span>
            Important Questions
          </button>

          <button className="menu-item">
            <span>🔖</span>
            Saved Resources
          </button>

        </div>

        <div className="sidebar-bottom">

          <div className="student-mini-profile">
            <div className="avatar">S</div>

            <div>
              <strong>Student</strong>
              <small>Student Account</small>
            </div>
          </div>

          <button className="logout-button" onClick={onLogout}>
            ↪ Logout
          </button>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* TOPBAR */}
        <header className="dashboard-header">

          <div>
            <p className="welcome-small">WELCOME BACK</p>

            <h1>
              Good morning, Student 👋
            </h1>

            <p className="header-subtitle">
              Find everything you need for your academics.
            </p>
          </div>

          <div className="header-profile">
            <div className="notification">🔔</div>
            <div className="profile-avatar">S</div>
          </div>

        </header>


        {/* SEARCH */}
        <section className="search-section">

          <div className="main-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search notes, questions, subjects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </section>


        {/* STATS */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon purple-bg">📚</div>

            <div>
              <span>Total Resources</span>
              <strong>120+</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue-bg">📝</div>

            <div>
              <span>Previous Papers</span>
              <strong>45+</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange-bg">💡</div>

            <div>
              <span>Important Questions</span>
              <strong>80+</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green-bg">⚡</div>

            <div>
              <span>Latest Uploads</span>
              <strong>12</strong>
            </div>
          </div>

        </section>


        {/* RESOURCE SECTION */}
        <section className="resources-section">

          <div className="resource-header">

            <div>
              <h2>Academic Resources</h2>
              <p>Find notes, PYQs and important questions.</p>
            </div>

            <div className="category-tabs">

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category active"
                      : "category"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}

            </div>

          </div>


          <div className="resource-grid">

            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (

                <div className="resource-card" key={index}>

                  <div className="resource-top">

                    <div className={`resource-icon ${resource.color}`}>
                      {resource.icon}
                    </div>

                    <span className="resource-type">
                      {resource.type}
                    </span>

                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.subject}</p>

                  <div className="resource-footer">

                    <span>Recently uploaded</span>

                    <button
                      onClick={() =>
                        alert(
                          `Opening ${resource.title}`
                        )
                      }
                    >
                      View →
                    </button>

                  </div>

                </div>

              ))
            ) : (

              <div className="no-results">
                <div>🔍</div>
                <h3>No resources found</h3>
                <p>
                  Try searching for another subject or resource.
                </p>
              </div>

            )}

          </div>

        </section>


        {/* RECENT UPLOADS */}
        <section className="recent-section-dashboard">

          <div className="recent-title">

            <div>
              <h2>Recently Uploaded</h2>
              <p>Latest resources added by teachers.</p>
            </div>

            <button>View all →</button>

          </div>

          <div className="recent-list">

            <div className="recent-item">

              <div className="recent-file">PDF</div>

              <div className="recent-info">
                <strong>Compiler Design — Unit 3 Notes</strong>
                <span>Compiler Design • Notes</span>
              </div>

              <span className="recent-time">
                Recently
              </span>

              <button>View</button>

            </div>


            <div className="recent-item">

              <div className="recent-file">PDF</div>

              <div className="recent-info">
                <strong>DAA Previous Year Questions</strong>
                <span>DAA • PYQ</span>
              </div>

              <span className="recent-time">
                Recently
              </span>

              <button>View</button>

            </div>


            <div className="recent-item">

              <div className="recent-file">PDF</div>

              <div className="recent-info">
                <strong>Computer Networks Important Questions</strong>
                <span>Computer Networks • Questions</span>
              </div>

              <span className="recent-time">
                Recently
              </span>

              <button>View</button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentDashboard;