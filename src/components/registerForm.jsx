import { Outlet } from "react-router-dom";

function RegisterForm() {
  return (
    <>
      <div
        class="card rounded-5 border-4 mx-auto col-10 col-md-8 col-lg-6 mt-5"
        style={{
          width: "50rem",
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
              Registro
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
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default RegisterForm;
