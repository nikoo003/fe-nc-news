import { useNavigate } from "react-router-dom";
import { getLogin } from "../src/utils/api";

const Login = () => {

const navigate = useNavigate()

function handleSubmit(){
    getLogin().then(()=>{
        navigate("/topics")
    }).catch((err)=>{
        console.log("login failed", err)
    })
}

  return (
    <section className="login">
      <h2>Login as Paul?</h2>
      <button className="login-button" onClick={handleSubmit}>Login</button>
      <p>I'm not paul</p>
    </section>
  );
};

export default Login;
