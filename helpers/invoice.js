import { getCookie } from "../actions/auth";

export const downloadInvoice = (invoiceNumber) => {
  const token = getCookie("accessToken");
  fetch(process.env.BACKEND_LINK + `downloadPDF/${invoiceNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      // create url address
      let url = window.URL.createObjectURL(blob);
      // create html element
      let a = document.createElement("a");
      a.href = url;
      a.download = `${invoiceNumber}.pdf`;
      document.body.appendChild(a);
      // click to start download
      a.click();
      // delete element
      a.remove();
    })
    .catch((err) => {
      console.log(err.error);
    });
};
