import { Outlet } from "react-router-dom";

function NavMenu() {
  return (
    <>
      <nav
        class="navbar"
        style={{ backgroundColor: "#133100" }}>

        {/* Titulo */}
        <div class="d-flex p-1 m-1">
          <a
            href="#"
            class="navbar-brand"
            style={{
              color: "#FFFFFF",
              fontFamily: "Roboto Slab, serif",
              fontWeight: 600,
              fontSize: 25,
            }}
          > Laboratorio Fitosanitario TEC
          </a>

        </div>

        <div class="p-auto">
          <ul class="nav">
            <li class="nav-item">
              <a href="#" class="nav-link"
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

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>

                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link"
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

