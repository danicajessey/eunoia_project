import '../styles/LoginSignup.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
        </div>

        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Username" />
          </div>

          {action === "Sign Up" && (
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
          )}

          <div className="input password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
        </div>

        {action === "Login" && (
          <div className="lostpass">
            Forgot Password? <span> Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit white" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit white" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
