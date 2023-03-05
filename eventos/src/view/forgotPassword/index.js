import { useState } from "react";
import Navbar from "../components/navbar";
import "./forgotPassword.css";
import "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((_result) => {
        setMsg(
          "Um link para redefinição de senha foi enviado para o seu e-mail."
        );
      })
      .catch((_error) => {
        setMsg("Algo deu errado! Verifique se o e-mail está correto.");
      });
  };

  return (
    <>
      <Navbar />

      <form className="text-center form-login mx-auto mt-5">
        <h3 className="mb-3 font-weight-bold">Esqueceu a senha?</h3>
        <input
          type="email"
          className="form-control my-2"
          placeholder="E-mail address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="msg my-4 text-center">
          <span>{msg}</span>
        </div>

        <button
          type="button"
          className="btn btn-lg btn-block btn-send"
          onClick={resetPassword}
        >
          Recuperar senha
        </button>
      </form>
    </>
  );
}

export default ForgotPassword;
