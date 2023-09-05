import { Outlet } from "react-router-dom";

function NavMenu() {
  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: "#133100" }}>

        {/* Titulo */}
        <div className="d-flex p-1 m-1">
          <a
            href="#"
            className="navbar-brand"
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto Slab, serif",
              fontWeight: 600,
              fontSize: 25,
            }}
          > Laboratorio Fitosanitario TEC
          </a>

        </div>

        <div className="p-auto">
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 20,
                }}>
                Inicio
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>

                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 20
                }}>
                Precios
              </a>
            </li>
          </ul>
        </div>

      </nav>
      <Outlet />
    </>
  );
}
export default NavMenu;

