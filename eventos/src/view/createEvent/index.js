import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./createEvent.css";
import firebase from "../../config/firebase";

function CreateEvent() {
  const [msgType, setMsgType] = useState("");
  return (
    <>
      <Navbar />

      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="text-center fw-bold">Novo Evento</h3>
        </div>

        <form className="form-container">
          <div className="form-group">
            <label>Título:</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Tipo do Evento:</label>
            <select className="form-control">
              <option disabled selected value>
                -- Selecione um tipo --
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descrição do evento:</label>
            <textarea className="form-control" rows="3" />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-6">
              <label>Hora:</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label>Imagem do evento:</label>
            <input type="file" className="form-control" />
          </div>

          <button
            type="button"
            className="btn btn-lg btn-block mt-3 mb-5 btn-register"
          >
            Criar Evento
          </button>
        </form>

        <div className="msg-login text-center my-4">
          {msgType === "success" && (
            <span>Evento criado com sucesso! &#128526;</span>
          )}
          {msgType === "error" && (
            <span>Algo deu errado! Tente novamente!</span>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
