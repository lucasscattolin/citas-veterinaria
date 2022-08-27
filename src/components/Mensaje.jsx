import React from "react";

const Mensaje = ({ msg, bgColor}) => {
  return (
    <div className={`${bgColor} rounded-md mb-3 text-center uppercase text-white font-bold p-4`}>
      <p>{msg}</p>
    </div>
  );
};

export default Mensaje;
