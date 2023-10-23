import React, { useState } from "react";

function InputB() {
  const [b, setB] = useState("");

  return (
    <>
      <span class="input-group-text">B</span>
      <input
        type="number"
        id="b"
        placeholder="mg/L"
        class="form-control"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
    </>
  );
}

export default InputB;