import { Link } from "react-router-dom";

const Login = () => {

  return (
    <section className="login">
      <h2>Login as Paul?</h2>
      <Link to={"/topics"}>
      <button className="login-button">Login</button>
      </Link>
      <p>I'm not paul</p>
    </section>
  );
};

export default Login;
