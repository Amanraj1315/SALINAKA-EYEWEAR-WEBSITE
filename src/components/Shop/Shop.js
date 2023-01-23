import React from "react";
import classes from "./Shop.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../Store/Store";
// import pic from "../../Assests/Images/profile1.png";
import pic1 from "../../Assests/Images/salt-image-1.png";
import pic2 from "../../Assests/Images/salt-image-2.png";
import pic3 from "../../Assests/Images/salt-image-3.png";
import pic4 from "../../Assests/Images/salt-image-4.png";
import pic5 from "../../Assests/Images/salt-image-5.png";
import pic7 from "../../Assests/Images/salt-image-7.png";
import pic10 from "../../Assests/Images/salt-image-10.png";

const data = [
  {
    id: 1,
    name: "Burnikk",
    design: "sexBomb",
    price: "Rs-4000",
    img: pic1,
    quantity: 0,
  },
  {
    id: 2,
    name: "Burnikk",
    design: "sexBomb",
    price: "Rs-3500",
    img: pic2,
    quantity: 0,
  },
  {
    id: 3,
    name: "Very Nice",
    design: "saltmaalat",
    price: "Rs-2650",
    img: pic3,
    quantity: 0,
  },
  {
    id: 4,
    name: "Buldit",
    design: "saltmaalat",
    price: "Rs-1500",
    img: pic4,
    quantity: 0,
  },
  {
    id: 5,
    name: "Buldit",
    design: "kibalblack",
    price: "Rs-1300",
    img: pic5,
    quantity: 0,
  },
  {
    id: 6,
    name: "Balakubak",
    design: "bedMalaat",
    price: "Rs-1750",
    img: pic2,
    quantity: 0,
  },
  {
    id: 7,
    name: "Tiktilaok Manok",
    design: "sexBomb",
    price: "Rs-1400",
    img: pic7,
    quantity: 0,
  },
  {
    id: 8,
    name: "Kutu",
    design: "sexBomb",
    price: "Rs-2100",
    img: pic5,
    quantity: 0,
  },
  {
    id: 9,
    name: "Quake Overload",
    design: "saltmaalat",
    price: "Rs-2000",
    img: pic3,
    quantity: 0,
  },
  {
    id: 10,
    name: "Kutu",
    design: "sexBomb",
    price: "Rs-2500",
    img: pic10,
    quantity: 0,
  },
  {
    id: 11,
    name: "Balakubak",
    design: "bedMalaat",
    price: "Rs-1250",
    img: pic2,
    quantity: 0,
  },
  {
    id: 12,
    name: "Tiktilaok Manok",
    design: "sexBomb",
    price: "Rs-2400",
    img: pic7,
    quantity: 0,
  },
];

const Shop = () => {
  const dispatch = useDispatch();

  const addCartItemHandler = (id) => {
    dispatch(counterActions(id));
    console.log(id);
  };
  return (
    <div>
      <div className={classes.container2}>
        <div className="row">
          <div className={classes.containerImage}>
            {data.map((item) => (
              <div className={classes.card}>
                <div className={classes.image}>
                  <img className={classes.img} src={item.img} alt="img" />
                </div>
                <div className={classes.container}>
                  <h4 className="text-center">
                    <b>{item.name}</b>
                  </h4>
                  <p className="text-center">{item.design}</p>
                  <p className="text-center">
                    <b>{item.price}</b>
                  </p>
                  <button
                    className="btn btn-outline-success  mb-3"
                    type="submit"
                    onClick={() => addCartItemHandler(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
