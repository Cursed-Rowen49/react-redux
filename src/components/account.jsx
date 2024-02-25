// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmt,
  userAccFulfilled,
  userAccPending,
} from "../redux/action/accountAction";
import axios from "axios";

const Account = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);
  const account = useSelector((state) => state.account);

  const getUser = (value) => {
    // eslint-disable-next-line no-unused-vars
    return async (dispatch, getState) => {
      dispatch(userAccPending());
      try {
        const response = await axios.get(
          `http://localhost:8000/accounts/${value}`
        );
        dispatch(userAccFulfilled(response.data.amount));
      } catch (error) {
        dispatch(userAccPending(error));
      }
    };
  };

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
      {account.pending ? <h1>Loading......</h1> : null}
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

      <button onClick={() => dispatch(getUser(1))} style={{ margin: "8px" }}>
        Get User
      </button>
    </div>
  );
};

export default Account;
