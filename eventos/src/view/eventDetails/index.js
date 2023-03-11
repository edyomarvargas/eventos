import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./eventDetails.css";
import { useSelector } from "react-redux";

function EventDetails(props) {
  const [event, setEvent] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const user = useSelector((state) => state.userEmail);

  useEffect(() => {
    async function fetchEvent() {
      const docRef = doc(db, "eventos", props.match.params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEvent(docSnap.data());
      } else {
        console.log("No such event!");
      }
    }

    fetchEvent();
  }, []);

  useEffect(() => {
    const storage = getStorage();

    getDownloadURL(ref(storage, `images/${event.image}`))
      .then((url) => {
        setImgUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [event]);

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <img src={imgUrl} className="img-banner" alt="Event banner" />
          <div className="col-12 mt-3 views">
            <i className="fas fa-eye"></i>
            <span>{event.views}</span>
          </div>
          <h3 className="text-center mt-5 title">{event.title}</h3>
        </div>

        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h5>
              <strong>Tipo</strong>
            </h5>
            <span className="mt-3">{event.type}</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5>
              <strong>Data</strong>
            </h5>
            <span className="mt-3">{event.date}</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-clock fa-2x"></i>
            <h5>
              <strong>Hora</strong>
            </h5>
            <span className="mt-3">{event.time}</span>
          </div>
        </div>

        <div className="row box-details mt-5">
          <h5 className="text-center">
            <strong>Detalhes do Evento</strong>
          </h5>
          <p className="p-3 text-center">{event.description}</p>
        </div>

        {user === event.user && (
          <Link to="" className="btn-edit">
            <i className="fas fa-pen-square fa-3x"></i>
          </Link>
        )}
      </div>
    </>
  );
}

export default EventDetails;
