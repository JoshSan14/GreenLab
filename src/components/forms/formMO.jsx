import { Outlet } from "react-router-dom";

function FormMO() {
  return (
    <>
      <form>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">N</span>
            <input
              type="number"
              id="n"
              placeholder="%m/m"
              class="form-control"
            />
            <span class="input-group-text">C</span>
            <input
              type="number"
              id="c"
              placeholder="%m/m"
              class="form-control"
            />
            <span class="input-group-text">S</span>
            <input
              type="number"
              id="s"
              placeholder="%m/m"
              class="form-control"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">Relación C/N</span>
            <input
              type="relacionCN"
              id="n"
              placeholder="%m/m"
              class="form-control"
            />
            <span class="input-group-text">Materia Orgánica</span>
            <input
              type="number"
              id="matOrg"
              placeholder="%m/m"
              class="form-control"
            />
          </div>
        </div>
      </form>
      <Outlet />
    </>
  );
}

export default FormMO;
