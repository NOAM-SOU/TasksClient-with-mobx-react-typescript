import { Link } from "react-router-dom";
import SignUpForm from "../components/signUp/signUpForm";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-header">Wellcome to Todos</div>
      <SignUpForm />
      <div>
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}
