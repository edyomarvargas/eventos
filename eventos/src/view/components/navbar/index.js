import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand text-white font-weight-bold">
          Eventos
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            {useSelector((state) => state.isLogged) ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="">
                    Publicar evento
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="">
                    Meus eventos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    onClick={() => dispatch({ type: "LOGOUT" })}
                  >
                    Sair
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/register">
                    Cadastrar
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
