import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { db } from "../../config/firebase";
import "./createEvent.css";

function CreateEvent(props) {
  const [msgType, setMsgType] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const userEmail = useSelector((state) => state.userEmail);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEvent() {
      const docRef = doc(db, "eventos", props.match.params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTitle(docSnap.data().title);
        setType(docSnap.data().type);
        setDescription(docSnap.data().description);
        setDate(docSnap.data().date);
        setTime(docSnap.data().time);
        setCurrentImage(docSnap.data().image);
      }
    }

    if (props.match.params.id) {
      fetchEvent();
    }
  }, [isLoading]);

  async function updateEvent() {
    setMsgType("");
    setIsLoading(true);

    if (newImage) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${newImage.name}`);
      uploadBytesResumable(storageRef, newImage);
    }

    const docRef = doc(db, "eventos", props.match.params.id);

    await updateDoc(docRef, {
      title,
      type,
      description,
      date,
      time,
      image: newImage ? newImage.name : currentImage,
    });
    setMsgType("success");
    setIsLoading(false);
  }

  const createNewEvent = async () => {
    setMsgType("");
    setIsLoading(true);

    try {
      await addDoc(collection(db, "eventos"), {
        title,
        type,
        description,
        date,
        time,
        user: userEmail,
        views: 0,
        image: currentImage.name,
        isPublic: true,
        created: new Date(),
      });

      const storage = getStorage();
      const storageRef = ref(storage, `images/${currentImage.name}`);
      uploadBytesResumable(storageRef, currentImage);

      setMsgType("success");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setMsgType("error");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="text-center fw-bold">
            {props.match.params.id ? "Editar evento" : "Novo evento"}
          </h3>
        </div>

        <form className="form-container">
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title && title}
            />
          </div>

          <div className="form-group">
            <label>Tipo do Evento:</label>
            <select
              className="form-control"
              onChange={(e) => setType(e.target.value)}
              value={type && type}
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
              value={description && description}
            />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                value={date && date}
              />
            </div>

            <div className="col-6">
              <label>Hora:</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => setTime(e.target.value)}
                value={time && time}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Imagem do evento:</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) =>
                currentImage
                  ? setNewImage(e.target.files[0])
                  : setCurrentImage(e.target.files[0])
              }
            />
          </div>

          <div className="row">
            {isLoading ? (
              <div className="spinner-border text-danger mx-auto" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-lg btn-block mt-3 mb-5 btn-register"
                onClick={props.match.params.id ? updateEvent : createNewEvent}
              >
                {props.match.params.id ? "Atualizar evento" : "Criar evento"}
              </button>
            )}
          </div>
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
