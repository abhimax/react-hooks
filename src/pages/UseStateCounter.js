import { useState } from "react";

function UseStateCounter() {
const [count , setCount] = useState(0);
const increment = ()=>{
  console.log('count', count)
  setCount(count + 1);
}

const decrement = ()=>{
  console.log('count', count)
  setCount(count - 1);
}
  return (
    <div className="App">
      <h1>{`Count: ${count}`}</h1>
      <button className="action-btn" onClick={increment}>+</button>
      <button className="action-btn" onClick={decrement}>-</button>
    </div>
  );
}

export default UseStateCounter;
