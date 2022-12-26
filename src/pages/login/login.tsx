import { Link } from "react-router-dom";
import LoginForm from "../../components/login/loginForm";
import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-header">Wellcome</div>
      <LoginForm />
      <div className="login-link">
        Don't have an account?{" "}
        <Link id="login-link" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
