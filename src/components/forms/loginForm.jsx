import { Outlet } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div
        className="card border-5 rounded-5 mx-auto col-10 col-md-8 col-lg-6 mt-5"
        style={{
          width: "35rem",
        }}
      >
        <div className="text-center my-2">
          <h1       
            style={{
              fontFamily: "Roboto Slab, serif",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 50,
            }}
          >
            Ingreso
          </h1>
        </div>

        <form className="mx-3">
          <div>
            <div className="form-group">
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
            <div className="form-group">
              <input
                type="password"
                className="form-control my-2 rounded-pill border-0 text-center"
                id="inputPassword"
                placeholder="Introduce tu contraseña"
                style={{
                  backgroundColor: "#D9D9D9",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: 15,
                }}
              />
            </div>
            <div className="d-grid mt-3">
              <button
                type="submit"
                className="btn btn-primary rounded-pill border-0"
                style={{
                  backgroundColor: "#37949A",
                  color: "#FFFFFF",
                  fontFamily: "Roboto Slab, serif",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                Ingresar
              </button>
            </div>
          </div>
        </form>

        <hr className="mx-3" />

        <form className="mx-3">
          <div className="form-group">
            <h4
              className="text-center"
              style={{
                fontFamily: "Roboto Slab, serif",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 25,
              }}
            >
              Ingresar con Fotografía
            </h4>
            <input
              className="form-control rounded-pill"
              type="file"
              id="formFile"
              style={{
                backgroundColor: "#6824AB",
                color: "#FFFFFF",
                fontFamily: "Roboto Slab, serif",
                textDecoration: "none",
                fontWeight: 400,
                fontSize: 20,
              }}
            />
          </div>
        </form>

        <hr className="mx-3" />

        <div className="form-group mx-3 mb-3">
          <h4
            className="text-center"
            style={{
              fontFamily: "Roboto Slab, serif",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 25,
            }}
          >
            ¿No tienes una cuenta?
          </h4>
          <div className="d-grid">
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
              Registrate
            </button>
          </div>
        </div>

      </div>
      <Outlet />
    </>
  );
}

export default LoginForm;
