import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-content">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/ficcion">Ficción</Link></li>
          <li><Link to="/poesia">Poesía</Link></li>
          <li><Link to="/historia">Historia</Link></li>
          <li><Link to="/infantil">Infantil</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <Link to="/registro" className="btn-registro">Registrarse</Link>
      </div>
    </nav>
  );
}

export default Navbar;
// mi nav bar con links, probando como funcan las cosas con react router, que es lo que me permite navegar entre las diferentes paginas de la aplicacion, sin recargar cada pagina.
// me interesa la idea de que cada pagina sea un componente, y que al hacer click en un link, se muestre el componente correspondiente sin recargar la pagina.
// no lo implemente nunca en ninguna aplicacion, pero me parece que es una buena forma de hacerlo, y ademas es lo que se usa en react actualmente segun compañeros avanzados en la carrera-