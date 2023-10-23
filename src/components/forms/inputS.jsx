import React, { useState } from "react";

function InputS() {
  const [c, setC] = useState("");
  const [s, setS] = useState("");

  return (
    <>
      <span class="input-group-text">C</span>
      <input
        type="number"
        id="c"
        placeholder="%m/m"
        class="form-control"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />
      <span class="input-group-text">S</span>
      <input
        type="number"
        id="s"
        placeholder="%m/m"
        class="form-control"
        value={s}
        onChange={(e) => setS(e.target.value)}
      />
    </>
  );
}

export default InputS;