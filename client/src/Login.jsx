import { useState } from "react";
import "./Login.css";

function Login({ onBack, onLogin }) {

  const [role, setRole] = useState("student");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    onLogin(role);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="login-logo">
          Campus<span>IQ</span>
        </div>

        <h1>
          Welcome back 👋
        </h1>

        <p className="login-subtitle">
          Login to access your academic resources
        </p>

        {/* ROLE */}
        <div className="role-switch">

          <button
            className={
              role === "student"
                ? "active-role"
                : ""
            }
            onClick={() => setRole("student")}
          >
            🎓 Student
          </button>

          <button
            className={
              role === "teacher"
                ? "active-role"
                : ""
            }
            onClick={() => setRole("teacher")}
          >
            👨‍🏫 Teacher
          </button>

        </div>

        {/* EMAIL */}
        <div className="input-group">

          <label>
            {role === "student"
              ? "Student Email"
              : "Teacher Email"}
          </label>

          <input
            type="email"
            placeholder={
              role === "student"
                ? "student@college.edu"
                : "teacher@college.edu"
            }
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        {/* PASSWORD */}
        <div className="input-group">

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        <button
          className="login-submit"
          onClick={handleLogin}
        >
          Login as{" "}
          {role === "student"
            ? "Student"
            : "Teacher"} →
        </button>

        <p className="demo-text">
          Demo login • Any email and password works
        </p>

      </div>

    </div>
  );
}

export default Login;