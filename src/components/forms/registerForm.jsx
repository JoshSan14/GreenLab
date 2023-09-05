import { Outlet } from "react-router-dom";

function RegisterForm() {
  return (
    <>
      <div
        className="card rounded-5 border-5 mx-auto col-10 col-md-8 col-lg-6 mt-5"
        style={{
          width: "50rem",
        }}
      >
        <div className="text-center my-3">
          <h1
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

        <form className="mx-2">
          <div className="d-flex flex-row pb-3">
            <div className="form-group container">
              <div className="mb-3 text-center">
                <label
                  for="inputEmail"
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill border-0 text-center"
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
              </div>

              <div className="mb-3 text-center">
                <label
                  for="inputFName"
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control mb-3 rounded-pill border-0 text-center"
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
              </div>

              <div className="mb-3 text-center">
                <label
                  for="inputLName"
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control mb-3 rounded-pill border-0 text-center"
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
              </div>

              <div className="mb-3 text-center">
                <label
                  for="inputPassword"
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control mb-3 rounded-pill border-0 text-center"
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
              </div>

              <div className="text-center">
                <label
                  for="inputPasswordVerif"
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Verificar Contraseña
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill border-0 text-center"
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
            </div>

            <div className="vr rounded-pill" style={{ width: 10 }}></div>

            <div className="form-group container text-center">
              <img
                className="img-fluid img-thumbnail rounded-circle mb-2 mx-auto d-block"
                src="src\resources\camera.png"
                style={{ maxHeight: "17.2rem" }}
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
                className="form-control rounded-pill"
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

          <div className="d-grid mx-2 mb-3">
            <button
              type="submit"
              className="btn btn-primary rounded-pill border-0"
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
