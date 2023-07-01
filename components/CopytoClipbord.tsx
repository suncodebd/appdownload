import React, { useState } from "react";
import { toast } from "react-toastify";

const CopyToClipboardButton: React.FC<{ promo: string }> = ({ promo }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promo);
    toast.success(`Promo Code copy ${promo}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setCopy(true);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={copy ? "btn btn-success" : "btn btn-outline"}
    >
      {copy ? "Copied" : "Copy"}
    </button>
  );
};

export default CopyToClipboardButton;
