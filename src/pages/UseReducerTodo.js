import { useReducer } from "react";
const ACTION = {
};
const countReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
      break;
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
      break;
    default:
      return state;
      break;
  }
};

const UseReducerTodo = () => {
  const [countState, countDispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="App">
      TODO
    </div>
  );
};
export default UseReducerTodo;
