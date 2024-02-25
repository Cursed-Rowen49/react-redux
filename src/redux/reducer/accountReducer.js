import { DECREMENT, INCREMENT, INCREMENTBYAMT } from "../action/accountAction";

export const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { amount: state.amount + 1 };
    case DECREMENT:
      return { amount: state.amount - 1 };
    case INCREMENTBYAMT:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
};
