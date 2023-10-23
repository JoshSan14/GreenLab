import { useState } from "react";
import { Outlet } from "react-router-dom";
import FormHeader from "../../components/forms/formHeader";
import InputS from "../../components/forms/inputS";
import InputB from "../../components/forms/inputB";
import FormFoliarQC from "../../components/forms/formFoliarQC";

function AnalisisFoliarQCBS() {
  return (
    <>
      <FormHeader
        form={<FormFoliarQC inputS={<InputS />} inputB={<InputB />} />}
      />
      <Outlet />
    </>
  );
}

export default AnalisisFoliarQCBS;
