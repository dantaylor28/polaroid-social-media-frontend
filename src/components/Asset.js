import React from "react";
import { Spinner } from "react-bootstrap";

const Asset = ({ src, message, spinner }) => {
  return (
    <div>
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
      {spinner && <Spinner />}
    </div>
  );
};

export default Asset;
