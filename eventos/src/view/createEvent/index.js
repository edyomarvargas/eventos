import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { db } from "../../config/firebase";
import "./createEvent.css";

function CreateEvent() {
  const [msgType, setMsgType] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const userEmail = useSelector((state) => state.userEmail);

  const createNewEvent = async () => {
    setMsgType("");

    try {
      await addDoc(collection(db, "eventos"), {
        title,
        type,
        description,
        date,
        time,
        user: userEmail,
        views: 0,
        image: image.name,
        isPublic: true,
        created: new Date(),
      });

      const storage = getStorage();
      const storageRef = ref(storage, `images/${image.name}`);
      uploadBytesResumable(storageRef, image);

      setMsgType("success");
    } catch (error) {
      setMsgType("error");
    } 
  };

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
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Tipo do Evento:</label>
            <select
              className="form-control"
              onChange={(e) => setType(e.target.value)}
            >
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
            <textarea
              className="form-control"
              rows="3"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-6">
              <label>Hora:</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Imagem do evento:</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button
            type="button"
            className="btn btn-lg btn-block mt-3 mb-5 btn-register"
            onClick={createNewEvent}
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
