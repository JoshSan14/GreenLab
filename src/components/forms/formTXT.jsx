import { Outlet } from "react-router-dom";

function FormTXT() {
  return (
    <>
      <form>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">Arena</span>
            <input
              type="number"
              id="arena"
              placeholder="%"
              class="form-control"
            />
            <span class="input-group-text">Arcilla</span>
            <input
              type="number"
              id="arcilla"
              placeholder="%"
              class="form-control"
            />
            <span class="input-group-text">Limo</span>
            <input
              type="number"
              id="limo"
              placeholder="%"
              class="form-control"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text">Nombre Textura</span>
            </div>
            <input type="text" class="form-control" id="nomText"/>
          </div>
        </div> 
      </form>
      <Outlet />
    </>
  );
}

export default FormTXT;
