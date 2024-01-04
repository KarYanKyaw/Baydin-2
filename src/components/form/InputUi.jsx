import AOS from "aos";
import { useEffect, useRef } from "react";

const InputUi = ({ open }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div
      data-aos={open ? "fade-down" : "fade-up"}
      data-aos-easing={open ? "linear" : "ease-out"}
    >
      <input
        ref={inputRef}
        placeholder="ပညာရေးအကြောင်း"
        type="text"
        className=" outline-none focus:shadow-2xl shadow-lg px-4 text-secondary bg-primary w-full py-3"
      />
    </div>
  );
};

export default InputUi;
