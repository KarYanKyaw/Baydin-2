import Swal from "sweetalert2";

export const openSwal = () => {
  let timerInterval;
  Swal.fire({
    color: "#5b281d",
    html: `<p className="select-none font-semibold text-2xl text-slate-800"> တွက်ချက်နေသည်။ ခေတ္တစောင့်ပါ။ ကံကောင်းပါစေ။ </p>`,
    timer: 2000,
    allowOutsideClick: false,
    timerProgressBar: false,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
};
