import { useReducer } from "react";
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
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

const UseReducerCounter = () => {
  const [countState, countDispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div className="App">
      <h1>UseReducer</h1>
      <h2>Count:{countState.count}</h2>
      <button
        button
        className="action-btn"
        onClick={() => {
          1({ type: ACTION.DECREMENT });
        }}
      >
        -
      </button>
      <button
        button
        className="action-btn"
        onClick={() => {
          countDispatch({ type: ACTION.INCREMENT });
        }}
      >
        +
      </button>
    </div>
  );
};
export default UseReducerCounter;
