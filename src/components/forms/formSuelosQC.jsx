import { Outlet } from "react-router-dom";

function FormSuelosQC(props) {
  return (
    <>
      <form>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="pH">
                pH
              </span>
            </div>
            <input type="number" class="form-control" />
          </div>
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">Acidez ext.</span>
            <input
              type="number"
              id="pH"
              placeholder="cmol(+)/L"
              class="form-control"
            />
            <span class="input-group-text">Ca</span>
            <input
              type="number"
              id="pH"
              placeholder="cmol(+)/L"
              class="form-control"
            />
            <span class="input-group-text">Mg</span>
            <input
              type="number"
              id="pH"
              placeholder="cmol(+)/L"
              class="form-control"
            />
            <span class="input-group-text">K</span>
            <input
              type="number"
              id="pH"
              placeholder="cmol(+)/L"
              class="form-control"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">Cu</span>
            <input
              type="number"
              id="pH"
              placeholder="mg/L"
              class="form-control"
            />
            <span class="input-group-text">Mn</span>
            <input
              type="number"
              id="pH"
              placeholder="mg/L"
              class="form-control"
            />
            <span class="input-group-text">Fe</span>
            <input
              type="number"
              id="pH"
              placeholder="mg/L"
              class="form-control"
            />
            <span class="input-group-text">Zn</span>
            <input
              type="number"
              id="pH"
              placeholder="mg/L"
              class="form-control"
            />
            <span class="input-group-text">P</span>
            <input
              type="number"
              id="pH"
              placeholder="mg/L"
              class="form-control"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="ca/mg">
                Ca/Mg
              </span>
            </div>
            <input type="number" class="form-control" readOnly />
          </div>
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="ca/k">
                Ca/K
              </span>
            </div>
            <input type="number" class="form-control" readOnly />
          </div>
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="mg/k">
                Mg/K
              </span>
            </div>
            <input type="number" class="form-control" readOnly />
          </div>
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="ca+mg/k">
                (Ca+Mg)/K
              </span>
            </div>
            <input type="number" class="form-control" readOnly />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="cice">
                C.I.C.E
              </span>
            </div>
            <input type="number" class="form-control" />
          </div>
          <div class="input-group mx-2 mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="satAcid">
                % Saturación de Acidez
              </span>
            </div>
            <input type="number" class="form-control" placeholder="%" />
          </div>
        </div>
      </form>
      {props.formTXT}
      <Outlet />
    </>
  );
}

export default FormSuelosQC;
