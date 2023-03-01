import { useState } from "react";
import "./login.css";
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((_userCredential) => {
        alert("User logged in successfully!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login-container d-flex align-items-center">
      <form className="mx-auto">
        <h1 className="h3 mb-3 fw-normal text-white font-weight-bold text-center">
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
          <span>Tudo certo! Você está conectado! &#128526;</span>
          <br />
          <span>Algo deu errado! Verifique o usuário ou a senha!</span>
        </div>

        <div className="login-options mt-4">
          <a href="#" className="mx-2">
            Recuperar senha
          </a>
          <span className="text-white">&#9733;</span>
          <a href="#" className="mx-2">
            Quero cadastrar
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
