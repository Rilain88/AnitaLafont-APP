import './Navbar.css';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (


   <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
              <NavLink className="navbar-brand" to="#">
                  Anita Lafont
              </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Productos</NavLink>
          </li>
          
          <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/Nosotros" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nosotros...
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item first-dropdown" href="#nosotros">¿Quien soy?</a></li>
                <li><a className="dropdown-item second-dropdown" href="#contacto">Contacto</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>

  );
}

export default Navbar;