import { useState } from "react";
import { Outlet } from "react-router-dom";
import FormFoliarQC from "../../components/forms/formFoliarQC";
import FormHeader from "../../components/forms/formHeader";

function AnalisisFoliarQC() {
  return (
    <>
      <FormHeader form={<FormFoliarQC />} />
      <Outlet />
    </>
  );
}

export default AnalisisFoliarQC;
