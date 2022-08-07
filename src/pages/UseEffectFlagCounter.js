import { useEffect, useState } from "react";
function UseEffectFlagCounter() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("count useEffect", count);
    if (count >= 5) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [count]);
  return (
    <div className="App">
      <h1>{`Count: ${count}`}</h1>
      <button className="action-btn" onClick={increment}>
        +
      </button>
      <button className="action-btn" onClick={decrement}>
        -
      </button>
      {flag ? <h1>5 Star FLAG!</h1> : ""}
    </div>
  );
}

export default UseEffectFlagCounter;
