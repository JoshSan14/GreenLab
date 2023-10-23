function FormHeader(props) {
  return (
    <>
      <div
        class="card border-5 rounded-5 mx-auto col-10 col-md-8 col-lg-6 mt-5"
        style={{
          width: "90rem",
        }}
      >
        <div class="text-center my-2">
          <h1
            style={{
              fontFamily: "Roboto Slab, serif",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 50,
            }}
          >
            Formulario de Análisis
          </h1>
        </div>
        <form>
          <div class="mx-3 px-4 mb-4">
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="tipoForm" style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 15,
                  }}>
                  Tipo de Formulario
                </label>
              </div>
              <select class="form-select" id="distrito" style={{
                    fontFamily: "Roboto Slab, serif",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 15,
                  }}>
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-center px-4">
            <div class="container px-3">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="idCliente">
                    ID Cliente
                  </span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Cédula física o jurídica"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="provincia">
                    Provincia
                  </label>
                </div>
                <select class="form-select" id="provincia">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="container px-3">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="nombre">
                    Nombre
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Juan Rodriguez"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="canton">
                    Cantón
                  </label>
                </div>
                <select class="form-select" id="canton">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="container px-3">
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="fecha">
                    Fecha
                  </span>
                </div>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Cédula física o jurídica"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="distrito">
                    Distrito
                  </label>
                </div>
                <select class="form-select" id="distrito">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mx-3 px-4 mb-4">
            <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="nombre">
                      Cultivo
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                  />
                </div>
          </div>

          <div class="d-flex justify-content-between align-items-start px-4 mx-2">
            <div class="input-group mx-2 mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text" id="nLan">
                  NºLab
                </span>
              </div>
              <input type="number" class="form-control" />
            </div>
            <div class="input-group mx-2 mb-2">
              <span class="input-group-text">Cód</span>
              <input type="number" id="cod" class="form-control" />
              <span class="input-group-text">Año</span>
              <input type="number" id="year" class="form-control" />
              <span class="input-group-text">Serial</span>
              <input type="number" id="serial" class="form-control" />
            </div>
          </div>

        </form>
        {props.form}
      </div>
    </>
  );
}

export default FormHeader;
