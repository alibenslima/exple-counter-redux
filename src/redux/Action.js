import { DECREMENT, INCREMENT, TOGGLE } from "./ActionType";

export const INC = () => {
  return {
    type: INCREMENT,
  };
};
export const DEC = () => {
  return {
    type: DECREMENT,
  };
};

export const TOG = () => {
  return {
    type: TOGGLE,
  };
};
