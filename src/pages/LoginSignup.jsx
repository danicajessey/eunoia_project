import '../styles/LoginSignup.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">
          <div className="text">
            {showForgot
              ? "Forgot Password"
              : action === "Sign Up"
              ? "Sign Up"
              : "Login"}
          </div>
        </div>

        {showForgot ? (
          <div className="forgotpassform">
            <input type="email" placeholder="Enter your email" />
            <button>Send Reset Link</button>
            <p
              onClick={() => setShowForgot(false)}
            >
              Back to Login
            </p>
          </div>
        ) : (
          <>
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
              <div className="forgotpassword">
                Forgot Password?{" "}
                <span
                  onClick={() => setShowForgot(true)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Click Here!
                </span>
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
          </>
        )}
      </div>
    </>
  );
};
export default LoginSignup