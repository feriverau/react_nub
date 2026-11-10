import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          GuareverStore
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
          <Link to="/checkout" className="navbar-link">
            Carro
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Ingresar
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Registrarse
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hola, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
