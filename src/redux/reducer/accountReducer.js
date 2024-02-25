import {
  DECREMENT,
  FULFILLED,
  INCREMENT,
  INCREMENTBYAMT,
  PENDING,
  REJECTED,
} from "../action/accountAction";

export const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { amount: state.amount + 1 };
    case DECREMENT:
      return { amount: state.amount - 1 };
    case INCREMENTBYAMT:
      return { amount: state.amount + action.payload };
    // Async
    case PENDING:
      return { ...state, loading: false };
    case FULFILLED:
      return { amount: action.payload, loading: false };
    case REJECTED:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
