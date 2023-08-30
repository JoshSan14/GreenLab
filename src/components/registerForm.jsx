import { Outlet } from "react-router-dom";

function RegisterForm() {
  return (
    <>
      <div
        class="card rounded-5 border-5 mx-auto col-10 col-md-8 col-lg-6 mt-5"
        style={{
          width: "50rem",
        }}
      >
        <div>
          <h1
            class="text-center my-3"
            style={{
              fontFamily: "Roboto Slab, serif",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 50,
            }}
          >
            Registro
          </h1>
        </div>
        <form class="mx-2">
          <div class="d-flex flex-row pb-3">
            <div class="form-group container">
              <input
                type="email"
                class="form-control mb-3 rounded-pill border-0 text-center"
                id="inputEmail"
                placeholder="Introduce tu correo"
                style={{
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />
              <input
                type="text"
                class="form-control mb-3 rounded-pill border-0 text-center"
                id="inputFName"
                placeholder="Introduce tu nombre"
                style={{
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />
              <input
                type="text"
                class="form-control mb-3 rounded-pill border-0 text-center"
                id="inputLName"
                placeholder="Introduce tu apellido"
                style={{
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />
              <input
                type="password"
                class="form-control mb-3 rounded-pill border-0 text-center"
                id="inputPassword"
                placeholder="Introduce una contraseña"
                style={{
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />
              <input
                type="password"
                class="form-control rounded-pill border-0 text-center"
                id="inputPasswordVerif"
                placeholder="Repite tu contraseña"
                style={{
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />
            </div>
            <div class="vr rounded-pill" style={{ width: 10 }}></div>
            <div class="form-group container text-center">
              <img
                class="img-fluid img-thumbnail rounded-circle mb-2 mx-auto d-block"
                src="src\resources\camera.png"
                style={{ maxHeight: "9.5 rem" }}
              ></img>
              <label
                for="formFile"
                style={{
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                Añade una Fotografía
              </label>
              <input
                class="form-control rounded-pill"
                type="file"
                id="formFile"
                style={{
                  backgroundColor: "#6824AB",
                  color: "#FFFFFF",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              />
            </div>
          </div>
          <div class="d-grid mx-2 mb-3">
            <button
              type="submit"
              class="btn btn-primary rounded-pill border-0"
              style={{
                backgroundColor: "#FF8A00",
                color: "#FFFFFF",
                fontFamily: "Roboto Slab, serif",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 20,
              }}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default RegisterForm;
