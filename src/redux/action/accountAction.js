export const INCREMENT = "increment/amount";
export const DECREMENT = "decrement/amount";
export const INCREMENTBYAMT = "incrementByAmt/amount";

export const PENDING = "account/pending";
export const FULFILLED = "account/fulfilled";
export const REJECTED = "account/rejected";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const incrementByAmt = (data) => {
  return { type: INCREMENTBYAMT, payload: data };
};

// Async
export const userAccPending = () => {
  return { type: PENDING };
};
export const userAccFulfilled = (data) => {
  return { type: FULFILLED, payload: data };
};
export const userAccRejected = (error) => {
  return { type: REJECTED, error: error };
};
