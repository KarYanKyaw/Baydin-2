import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import InputUi from "./InputUi";
import AOS from "aos";

const FormSection = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {

    setOpen(!open);
  };

  useEffect(() => {
    AOS.refresh();
  }, [open]);
  
  return (
    <div className="flex flex-col gap-3">
      <FormHeader open={open} handleClick={handleClick} />
      {open && <InputUi open={open} />}
    </div>
  );
};

export default FormSection;
