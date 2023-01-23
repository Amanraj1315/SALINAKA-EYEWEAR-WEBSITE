import React from "react";
import classes from "./RecommendedProduct.module.css";
import pic from "../../Assests/Images/profile2.png";
import pic1 from "../../Assests/Images/salt-image-1.png";
import pic2 from "../../Assests/Images/salt-image-2.png";
import pic3 from "../../Assests/Images/salt-image-3.png";
import pic4 from "../../Assests/Images/salt-image-4.png";
import pic5 from "../../Assests/Images/salt-image-5.png";
import pic7 from "../../Assests/Images/salt-image-7.png";

function RecommendedProduct() {
  return (
<div>
<div className={classes.banner}>
        <div className={classes.container}>
          <div className="display-6 w-42 mx-5"> <h1>Recommanded Product </h1></div>
        </div>
        <img className={classes.img1} src={pic} alt="pic" />
        </div> 
      <div className={classes.container2}>
        <div className="row">
          <div className="col-12">
            <h1>Recommended Products</h1>
          </div>
          <div className={classes.containerImage}>
            <div className={classes.card}>
              <img className={classes.img} src={pic1} alt="img" />
              <div className="container">
                <h4 className="text-center">
                  <b>Burnikk</b>
                </h4>
                <p className="text-center">Sex Bomb</p>
              </div>
            </div>

            <div className={classes.card}>
              <img className={classes.img} src={pic2} alt="img" />
              <div className="container">
                <h4 className="text-center">
                  <b>Kibal Batal</b>
                </h4>
                <p className="text-center">kibal Black</p>
              </div>
            </div>
            <div className={classes.card}>
              <img className={classes.img} src={pic3} alt="img" />
              <div className="container">
                <h4 className="text-center">
                  <b>Very Nice</b>
                </h4>
                <p className="text-center">Salt Maalat</p>
              </div>
            </div>
            <div className={classes.card}>
              <img className={classes.img} src={pic4} alt="img" />
              <div className="container">
                <h4 className="text-center">
                  <b>Buldit</b>
                </h4>
                <p className="text-center">Salt Maalat</p>
              </div>
            </div>
            <div className={classes.card}>
              <img className={classes.img} src={pic5} alt="img" />
              <div className="container">
                <h4 className="text-center">
                  <b>Balakubak</b>
                </h4>
                <p className="text-center">Bed Maalat</p>
              </div>
            </div>
            <div className={classes.card}>
              <img className={classes.img} src={pic7} alt="img" />
              <div className="container">
                <h4 className="text-center">
                  <b>Tiktilaok Manok</b>
                </h4>
                <p className="text-center">Sex Bomb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default RecommendedProduct;
