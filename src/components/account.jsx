// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmt,
} from "../redux/action/accountAction";

const Account = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        border: "2px solid red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ marginRight: "16px" }}>Amount : $ {amount}</p>
      <input
        type="text"
        style={{ fontSize: "1.75rem" }}
        onChange={(e) => setValue(+e.target.value)}
      />
      <button onClick={() => dispatch(increment())} style={{ margin: "8px" }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: "8px" }}>
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmt(value))}
        style={{ margin: "8px" }}
      >
        IncrementByAmount
      </button>
    </div>
  );
};

export default Account;
