import { Link } from "react-router-dom";

import "./eventCard.css";

function EventCard() {
  return (
    <div className="col-md-3 col-sm-12">
      <img
        src="https://via.placeholder.com/100x50"
        className="card-img-top img-card"
        alt="Imagem do evento"
      />

      <div className="card-body">
        <h5>Título do evento</h5>
        <p className="card-text text-justify">Detalhes do evento</p>

        <div className="row card-footer d-flex align-items-center">
          <div className="col-6">
            <Link to="" className="btn btn-sm btn-details">
              Mais detalhes
            </Link>
          </div>

          <div className="col-6 text-right">
            <i className="fas fa-eye"></i>
            <span>146</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
