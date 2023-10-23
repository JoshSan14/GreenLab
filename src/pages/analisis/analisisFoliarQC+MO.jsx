import { useState } from "react";
import { Outlet } from "react-router-dom";
import FormHeader from "../../components/forms/formHeader";
import FormFoliarQC from "../../components/forms/formFoliarQC";
import FormMO from "../../components/forms/formMO";
function AnalisisFoliarQCMO() {
  return (
    <>
      <FormHeader
        form={<FormFoliarQC formMO={<FormMO/>} />}
      />
      <Outlet />
    </>
  );
}

export default AnalisisFoliarQCMO;
