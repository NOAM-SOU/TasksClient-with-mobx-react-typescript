import { Link } from "react-router-dom";
import LoginForm from "../../components/login/loginForm";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-header">Wellcome to Todos</div>
      <LoginForm />
      <div>
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}
