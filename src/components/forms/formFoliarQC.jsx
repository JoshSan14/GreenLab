import { useState } from "react";

function FormFoliarQC(props) {
  const [nTotal, setNTotal] = useState("");
  const [proteina, setProteina] = useState("");
  const [k, setK] = useState("");
  const [ca, setCa] = useState("");
  const [mg, setMg] = useState("");
  const [p, setP] = useState("");
  const [cu, setCu] = useState("");
  const [mn, setMn] = useState("");
  const [fe, setFe] = useState("");
  const [zn, setZn] = useState("");
  
  return (
    <>
      <form>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">N-total</span>
            <input
              type="number"
              id="nTotal"
              placeholder="%m/v"
              class="form-control"
              value={nTotal}
              onChange={(e) => setNTotal(e.target.value)}
            />
            <span class="input-group-text">Proteina</span>
            <input
              type="number"
              id="proteina"
              placeholder="%m/v"
              class="form-control"
              value={proteina}
              onChange={(e) => setProteina(e.target.value)}
            />
            {props.inputS}
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">K</span>
            <input
              type="number"
              id="k"
              placeholder="%m/v"
              class="form-control"
              value={k}
              onChange={(e) => setK(e.target.value)}
            />
            <span class="input-group-text">Ca</span>
            <input
              type="number"
              id="ca"
              placeholder="%m/v"
              class="form-control"
              value={ca}
              onChange={(e) => setCa(e.target.value)}
            />
            <span class="input-group-text">Mg</span>
            <input
              type="number"
              id="mg"
              placeholder="%m/v"
              class="form-control"
              value={mg}
              onChange={(e) => setMg(e.target.value)}
            />
            <span class="input-group-text">P</span>
            <input
              type="number"
              id="p"
              placeholder="%m/v"
              class="form-control"
              value={p}
              onChange={(e) => setP(e.target.value)}
            />
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start px-4 mx-2">
          <div class="input-group mx-2 mb-2">
            <span class="input-group-text">Cu</span>
            <input
              type="number"
              id="cu"
              placeholder="%mg/l"
              class="form-control"
              value={cu}
              onChange={(e) => setCu(e.target.value)}
            />
            <span class="input-group-text">Mg</span>
            <input
              type="number"
              id="mn"
              placeholder="%mg/l"
              class="form-control"
              value={mn}
              onChange={(e) => setMn(e.target.value)}
            />
            <span class="input-group-text">Fe</span>
            <input
              type="number"
              id="fe"
              placeholder="%mg/l"
              class="form-control"
              value={fe}
              onChange={(e) => setFe(e.target.value)}
            />
            <span class="input-group-text">Zn</span>
            <input
              type="number"
              id="zn"
              placeholder="%mg/l"
              class="form-control"
              value={zn}
              onChange={(e) => setZn(e.target.value)}
            />
            {props.inputB}
          </div>
        </div>
        {props.formMO}
      </form>
    </>
  );
}

export default FormFoliarQC;