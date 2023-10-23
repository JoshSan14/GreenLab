import { useState } from "react";
import { Outlet } from "react-router-dom";
import FormSuelosQC from "../../components/forms/formSuelosQC";
import FormHeader from "../../components/forms/formHeader";

function AnalisisSuelosQC() {
  return (
    <>
      <FormHeader form={<FormSuelosQC />} />
      <Outlet />
    </>
  );
}

export default AnalisisSuelosQC;
