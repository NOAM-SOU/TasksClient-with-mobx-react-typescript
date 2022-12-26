import { Link } from "react-router-dom";
import SignUpForm from "../../components/signUp/signUpForm";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-header">Wellcome</div>
      <SignUpForm />
      <div className="signup-link">
        Already have an account?{" "}
        <Link id="signup-link" to="/login">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}
