import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./eventCard.css";

function EventCard({ id, img, title, description, views }) {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    const storage = getStorage();

    getDownloadURL(ref(storage, `images/${img}`))
      .then((url) => {
        setImgUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-md-3 col-sm-12">
      <img
        src={imgUrl}
        className="card-img-top img-card"
        alt="Imagem do evento"
      />

      <div className="card-body">
        <h5>{title}</h5>
        <p className="card-text text-justify">{description}</p>

        <div className="row card-footer d-flex align-items-center">
          <div className="col-6">
            <Link to={`/event-details/${id}`} className="btn btn-sm btn-details">
              Mais detalhes
            </Link>
          </div>

          <div className="col-6 text-right">
            <i className="fas fa-eye"></i>
            <span className="mx-2">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
