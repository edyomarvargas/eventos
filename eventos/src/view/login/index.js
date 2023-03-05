import { useState } from "react";
import "./login.css";
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgType, setMsgType] = useState("");

  const dispatch = useDispatch();

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((_userCredential) => {
        setMsgType("success");
        setTimeout(() => {
          dispatch({ type: "LOGIN", userEmail: email });
        }, 1000);
      })
      .catch((_error) => {
        setMsgType("error");
      });
  };

  return (
    <div className="login-container d-flex align-items-center">
      {useSelector((state) => state.isLogged) && <Redirect to="/" />}

      <form className="mx-auto">
        <h1 className="h3 mb-3 text-white fw-bold text-center">
          Login
        </h1>

        <div className="form-floating">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control my-2"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control my-2"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-login"
          type="button"
          onClick={login}
        >
          Sign in
        </button>

        <div className="msg-login text-white text-center my-4">
          {msgType === "success" && (
            <span>Tudo certo! Você está conectado! &#128526;</span>
          )}
          {msgType === "error" && (
            <span>Algo deu errado! Verifique o usuário ou a senha!</span>
          )}
        </div>

        <div className="login-options mt-4">
          <Link to="/forgot-password" className="mx-2">
            Recuperar senha
          </Link>
          <span className="text-white">&#9733;</span>
          <Link to="/register" className="mx-2">
            Quero cadastrar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
