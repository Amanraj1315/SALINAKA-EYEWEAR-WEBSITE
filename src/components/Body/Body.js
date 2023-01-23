import React from "react";
import classes from "./Body.module.css";
import pic from "../../Assests/Images/profile.png";

function body() {
  return (
    <div>
      <div className={classes.banner}>
        <div className={classes.container}>
          <h1 className="display-6 w-42"> <b>See</b>  everything with <b>clearity</b></h1>
          <br/>
          <p>
            Buying eyewear should leave you happy and good-looking, with money
            in your pocket. Glasses, sunglasses, and contacts—we’ve got your
            eyes covered.
          </p>
          <br/>
          <button className="btn btn-outline-dark mb-5">Shop Now</button>
        </div>
        <img className={classes.img} src={pic} alt="pic" />
      </div>
    </div>
  );
}
export default body;
