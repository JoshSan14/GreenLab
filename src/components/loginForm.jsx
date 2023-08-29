import { Outlet } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div
        class="card rounded-5 border-4 mx-auto col-10 col-md-8 col-lg-6 mt-5"
        style={{
          width: "35rem",
        }}
      >
        <form>
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
              Ingreso
            </h1>
          </div>
          <div class="form-group mx-3 my-2">
            <input
              type="email"
              class="form-control rounded-pill border-0 text-center"
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
          <div class="form-group mx-3 my-2">
            <input
              type="password"
              class="form-control rounded-pill border-0 text-center"
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
          <div class="d-grid mx-3 my-3">
            <button
              type="submit"
              class="btn btn-primary rounded-pill border-0"
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
          <hr class="mx-3" />
          <div class="form-group mx-3">
            <h4
              class="text-center"
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
              class="form-control rounded-pill"
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
          <hr class="mx-3" />
          <div class="form-group mx-3 mb-3">
            <h4
              class="text-center"
              style={{
                fontFamily: "Roboto Slab, serif",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 25,
              }}
            >
              ¿No tienes una cuenta?
            </h4>
            <div class="d-grid">
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
                Registrate
              </button>
            </div>
          </div>
        </form>
      </div>
      <Outlet/>
    </>
  );
}

export default LoginForm;
