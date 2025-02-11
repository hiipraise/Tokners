import { useState } from "react";
import "./auth.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      {/* Left Side - Form */}
      <div className="auth-form">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <p>
          {isSignUp
            ? "Create an account"
            : "Welcome back! Please enter your details."}
        </p>

        <form>
          {isSignUp && (
            <>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </>
          )}

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          {isSignUp && (
            <>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </>
          )}

          {!isSignUp && (
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
          )}

          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>

          <p className="toggle-link">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? " Sign In" : " Sign Up"}
            </span>
          </p>
        </form>
      </div>

      {/* Right Side - Image/Background */}
      <div className="auth-image">{/* Background Image or Color */}</div>
    </div>
  );
};

export default Auth;
