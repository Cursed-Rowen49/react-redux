export const INCREMENT = "increment/amount";
export const DECREMENT = "decrement/amount";
export const INCREMENTBYAMT = "incrementByAmt/amount";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const incrementByAmt = (data) => {
  return { type: INCREMENTBYAMT, payload: data };
};
