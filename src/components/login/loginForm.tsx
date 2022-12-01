import { Link } from "react-router-dom";

export function LoginForm() {
  return (
    <>
      <div className="login-form-inputs">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="login-form-btn">
        <button className="login-btn">Sign Up</button>
      </div>
      <div className="login-form-link">
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </>
  );
}
