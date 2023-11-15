import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>Hom</Link>
      </div>
      <h1 style={{ color: "white" }}>Details</h1>
    </>
  );
};

export default Details;
