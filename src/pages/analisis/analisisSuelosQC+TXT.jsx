import { useState } from "react";
import { Outlet } from "react-router-dom";
import FormHeader from "../../components/forms/formHeader";
import FormTXT from "../../components/forms/formTXT";
import FormSuelosQC from "../../components/forms/formSuelosQC";

function AnalisisSuelosQCTXT() {
  return (
    <>
      <FormHeader form={<FormSuelosQC formTXT={<FormTXT />} />} />
      <Outlet />
    </>
  );
}

export default AnalisisSuelosQCTXT;
