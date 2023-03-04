import { useState } from "react";
import "./register.css";
import "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Navbar from "../components/navbar";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgType, setMsgType] = useState(null);
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function register() {
    setIsLoading(true);
    setMsgType(null);

    if (!email || !password) {
      setIsLoading(false);
      setMsgType("error");
      setMsg("Você precisa informar o e-mail e senha para se cadastrar!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((_userCredential) => {
        setIsLoading(false);
        setMsgType("success");
      })
      .catch((error) => {
        setIsLoading(false);
        setMsgType("error");
        switch (error.code) {
          case "auth/weak-password":
            setMsg("A senha deve ter pelo menos 6 caracteres!");
            break;
          case "auth/email-already-in-use":
            setMsg("Este e-mail já está sendo utilizado por outro usuário!");
            break;
          case "auth/invalid-email":
            setMsg("O e-mail digitado é inválido!");
            break;
          default:
            setMsg("Não foi possível cadastrar. Tente novamente mais tarde!");
            break;
        }
      });
  }

  return (
    <>
      <Navbar />
      <div className="register-form">
        <form className="text-center form-login mx-auto mt-5">
          <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control my-2"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control my-2"
            placeholder="Password"
          />

          {isLoading ? (
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-lg btn-block mt-3 mb-5 btn-register"
              onClick={register}
            >
              Register
            </button>
          )}

          <div className="msg-login text-black text-center my-4">
            {msgType === "success" && (
              <span>Usuário cadastrado com sucesso! &#128526;</span>
            )}
            {msgType === "error" && <span>Algo deu errado! {msg}</span>}
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
