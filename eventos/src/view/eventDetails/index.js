import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./eventDetails.css";

function EventDetails() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <img
            src="https://via.placeholder.com/150x100"
            className="img-banner"
            alt="Event banner"
          />
        </div>

        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h5>
              <strong>Tipo</strong>
            </h5>
            <span className="mt-3">Festa</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5>
              <strong>Data</strong>
            </h5>
            <span className="mt-3">20/10/2023</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-clock fa-2x"></i>
            <h5>
              <strong>Hora</strong>
            </h5>
            <span className="mt-3">19:00</span>
          </div>
        </div>

        <div className="row box-details mt-5">
          <h5 className="mx-auto"><strong>Detalhes do Evento</strong></h5>
          <p className="text-justify p-3"></p>
        </div>

        <Link to="" className="btn-edit"><i className="fas fa-pen-square fa-3x"></i></Link>
      </div>
    </>
  );
}

export default EventDetails;
