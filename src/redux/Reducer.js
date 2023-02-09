import { DECREMENT, INCREMENT, TOGGLE } from "./ActionType";

const init = {
  count: 0,
  isShown: true,
};
const reducer = (state = init, { type }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case TOGGLE:
      return { ...state, isShown: !state.isShown };
    default:
      return state;
  }
};
export default reducer;
