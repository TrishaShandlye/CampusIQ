import { useState } from "react";
import "./TeacherDashboard.css";

function TeacherDashboard({ onLogout }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showUpload, setShowUpload] = useState(false);

  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Compiler Design — Unit 3",
      subject: "Compiler Design",
      type: "Notes",
      uploaded: "Recently",
    },
    {
      id: 2,
      title: "DAA — Previous Year Questions",
      subject: "Design & Analysis of Algorithms",
      type: "PYQ",
      uploaded: "Recently",
    },
    {
      id: 3,
      title: "Computer Networks — Important Questions",
      subject: "Computer Networks",
      type: "Questions",
      uploaded: "Recently",
    },
    {
      id: 4,
      title: "Operating System — Unit 4 Notes",
      subject: "Operating System",
      type: "Notes",
      uploaded: "Recently",
    },
    {
      id: 5,
      title: "Computer Graphics — PYQ 2025",
      subject: "Computer Graphics",
      type: "PYQ",
      uploaded: "Recently",
    },
  ]);

  const [newResource, setNewResource] = useState({
    title: "",
    subject: "",
    type: "Notes",
  });

  const categories = ["All", "Notes", "PYQ", "Questions"];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.type === activeCategory;

    const searchText = search.toLowerCase();

    const matchesSearch =
      resource.title.toLowerCase().includes(searchText) ||
      resource.subject.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const handleUpload = (e) => {
    e.preventDefault();

    if (!newResource.title || !newResource.subject) {
      alert("Please enter resource title and subject.");
      return;
    }

    const resource = {
      id: Date.now(),
      title: newResource.title,
      subject: newResource.subject,
      type: newResource.type,
      uploaded: "Just now",
    };

    setResources((prev) => [resource, ...prev]);

    setNewResource({
      title: "",
      subject: "",
      type: "Notes",
    });

    setShowUpload(false);

    alert("Resource uploaded successfully!");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resource?"
    );

    if (!confirmDelete) return;

    setResources((prev) =>
      prev.filter((resource) => resource.id !== id)
    );
  };

  return (
    <div className="teacher-dashboard">

      {/* SIDEBAR */}

      <aside className="teacher-sidebar">

        <div className="teacher-logo">
          Campus<span>IQ</span>
        </div>

        <div className="teacher-menu">

          <button className="teacher-menu-item active">
            <span>⌂</span>
            Dashboard
          </button>

          <button className="teacher-menu-item">
            <span>📚</span>
            Resources
          </button>

          <button className="teacher-menu-item">
            <span>📤</span>
            Upload Resource
          </button>

          <button className="teacher-menu-item">
            <span>📊</span>
            Activity
          </button>

        </div>

        <div className="teacher-sidebar-bottom">

          <div className="teacher-profile-mini">

            <div className="teacher-avatar">
              T
            </div>

            <div>
              <strong>Teacher</strong>
              <small>Teacher Account</small>
            </div>

          </div>

          <button
            className="teacher-logout"
            onClick={onLogout}
          >
            ↪ Logout
          </button>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="teacher-main">

        {/* HEADER */}

        <header className="teacher-header">

          <div>

            <p className="teacher-welcome">
              TEACHER DASHBOARD
            </p>

            <h1>
              Good morning, Teacher 👋
            </h1>

            <p className="teacher-subtitle">
              Manage academic resources for your students.
            </p>

          </div>

          <div className="teacher-header-right">

            <div className="teacher-notification">
              🔔
            </div>

            <div className="teacher-profile-avatar">
              T
            </div>

          </div>

        </header>


        {/* STATS */}

        <section className="teacher-stats">

          <div className="teacher-stat-card">

            <div className="teacher-stat-icon purple">
              📚
            </div>

            <div>
              <span>Total Resources</span>
              <strong>{resources.length}</strong>
            </div>

          </div>

          <div className="teacher-stat-card">

            <div className="teacher-stat-icon blue">
              📝
            </div>

            <div>
              <span>Notes</span>
              <strong>
                {resources.filter((r) => r.type === "Notes").length}
              </strong>
            </div>

          </div>

          <div className="teacher-stat-card">

            <div className="teacher-stat-icon orange">
              📄
            </div>

            <div>
              <span>Previous Papers</span>
              <strong>
                {resources.filter((r) => r.type === "PYQ").length}
              </strong>
            </div>

          </div>

          <div className="teacher-stat-card">

            <div className="teacher-stat-icon green">
              💡
            </div>

            <div>
              <span>Questions</span>
              <strong>
                {resources.filter((r) => r.type === "Questions").length}
              </strong>
            </div>

          </div>

        </section>


        {/* RESOURCE MANAGEMENT */}

        <section className="teacher-resource-section">

          <div className="teacher-section-heading">

            <div>

              <h2>
                Resource Management
              </h2>

              <p>
                Upload and manage academic resources.
              </p>

            </div>

            <button
              className="upload-resource-btn"
              onClick={() => setShowUpload(true)}
            >
              + Upload Resource
            </button>

          </div>


          {/* SEARCH + FILTER */}

          <div className="teacher-controls">

            <div className="teacher-search">

              <span>🔍</span>

              <input
                type="text"
                placeholder="Search resources or subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <div className="teacher-tabs">

              {categories.map((category) => (

                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "teacher-tab active"
                      : "teacher-tab"
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </div>


          {/* RESOURCE LIST */}

          <div className="teacher-resource-list">

            {filteredResources.length > 0 ? (

              filteredResources.map((resource) => (

                <div
                  className="teacher-resource-item"
                  key={resource.id}
                >

                  <div className="teacher-file-icon">
                    PDF
                  </div>

                  <div className="teacher-resource-info">

                    <strong>
                      {resource.title}
                    </strong>

                    <span>
                      {resource.subject} • {resource.type}
                    </span>

                  </div>

                  <span className="teacher-upload-time">
                    {resource.uploaded}
                  </span>

                  <button
                    className="replace-btn"
                    onClick={() =>
                      alert(
                        `Replace ${resource.title}`
                      )
                    }
                  >
                    Replace
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(resource.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))

            ) : (

              <div className="teacher-no-results">

                <div>🔍</div>

                <h3>
                  No resources found
                </h3>

                <p>
                  Try another search or category.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>


      {/* UPLOAD MODAL */}

      {showUpload && (

        <div
          className="upload-overlay"
          onClick={() => setShowUpload(false)}
        >

          <div
            className="upload-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="upload-modal-header">

              <div>

                <h2>
                  Upload Resource
                </h2>

                <p>
                  Add a new academic resource.
                </p>

              </div>

              <button
                className="close-modal"
                onClick={() => setShowUpload(false)}
              >
                ×
              </button>

            </div>


            <form onSubmit={handleUpload}>

              <div className="teacher-input-group">

                <label>
                  Resource Title
                </label>

                <input
                  type="text"
                  placeholder="e.g. Compiler Design — Unit 4"
                  value={newResource.title}
                  onChange={(e) =>
                    setNewResource({
                      ...newResource,
                      title: e.target.value,
                    })
                  }
                />

              </div>


              <div className="teacher-input-group">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="e.g. Compiler Design"
                  value={newResource.subject}
                  onChange={(e) =>
                    setNewResource({
                      ...newResource,
                      subject: e.target.value,
                    })
                  }
                />

              </div>


              <div className="teacher-input-group">

                <label>
                  Resource Type
                </label>

                <select
                  value={newResource.type}
                  onChange={(e) =>
                    setNewResource({
                      ...newResource,
                      type: e.target.value,
                    })
                  }
                >

                  <option value="Notes">
                    Notes
                  </option>

                  <option value="PYQ">
                    Previous Year Questions
                  </option>

                  <option value="Questions">
                    Important Questions
                  </option>

                </select>

              </div>


              <div className="teacher-file-upload">

                <span>📎</span>

                <div>
                  <strong>
                    Resource file
                  </strong>

                  <small>
                    PDF upload will be connected with backend later.
                  </small>
                </div>

              </div>


              <button
                type="submit"
                className="submit-upload"
              >
                Upload Resource →
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default TeacherDashboard;