import React from "react";

const PrimaryButton = ({ buttonText, onClick }) => {
  return (
    <button
      className="px-6 py-2 bg-blue-600 hover:bg-blue-900 w-fit rounded-md text-white text-xl font-semibold"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
