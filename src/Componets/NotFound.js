import React from "react";
import { Link } from "react-router-dom";
import images from './Images/preview.png';

const NotFound = () => {
  return (
    <div className="box1">
       <img src={images} alt="avatar"/>
      <h1 className="one">Something went wrong</h1>
      <p className="this">this page cannot be found</p>
      <Link to="/searchpage" className="link">Back to the searchpage.....</Link>
    </div>
  );
};

export default NotFound;
