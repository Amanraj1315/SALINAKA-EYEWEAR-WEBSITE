import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActionsDec } from "../../Store/Store";

const Cart = () => {
  const items = useSelector((state) => state.counter.items);

  useEffect(() => {
    console.log(items);
  }, [items]);
  const dispatch = useDispatch();
  const removeCartItemHandler = (id) => {
    dispatch(counterActionsDec(id));
    console.log(id);
  };
  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Items</h1>

      {items.map((item) => (
        <div className="d-flex justify-content-around">
          <div>
            <img src={item.img} alt="pic" />
          </div>
          <div>
            <p className="display-4">{item.name}</p>
            <p>{item.design}</p>
            <p> Quantity : {item.quantity}</p>
            <b className="fs-5">{item.price}</b>
          </div>
          <div>
            <button
              className="btn btn-outline-danger mt-5"
              onClick={() => removeCartItemHandler(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
