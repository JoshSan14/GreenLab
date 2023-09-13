import { Outlet } from "react-router-dom";

function GeneralResultForm() {
  return (
    <>
      <div
        className="card border-5 rounded-5 mx-auto col-10 col-md-8 col-lg-6 mt-5 w-auto"
        style={{}}
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
            Formulario
          </h1>
        </div>
        <form>
          <div className="d-flex align-content-center flex-wrap justify-content-center">
            <div className="row align-items-center">
              <div className="col-auto row-auto">
                <label for="idCliente">ID Cliente</label>
              </div>
              <div class="col-auto">
                <input
                  className="form-control text-center"
                  type="text"
                  id="idCliente"
                  placeholder="Cédula física o jurídica"
                ></input>
              </div>
              <div className="col-auto">
                <label for="nombre">Nombre</label>
              </div>
              <div class="col-auto">
                <input
                  className="form-control text-center"
                  type="text"
                  id="idCNombre"
                  placeholder="Nombre"
                ></input>
              </div>
              <div className="col-auto">
                <label for="fecha">Fecha</label>
              </div>
              <div class="col-auto">
                <input
                  className="form-control text-center"
                  type="datetime-local"
                  id="idCNombre"
                ></input>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-auto row-auto">
                <label for="provincia">Provincia</label>
              </div>
              <div class="col-auto">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto">
                <label for="canton">Cantón</label>
              </div>
              <div class="col-auto">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto">
                <label for="fecha">Fecha</label>
              </div>
              <div class="col-auto">
                <input
                  className="form-control text-center"
                  type="datetime-local"
                  id="idCNombre"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Outlet />
    </>
  );
}

export default GeneralResultForm;
