import { useState } from "react";

function UseRefInput() {
const [name , setName] = useState(0);

  return (
    <div className="App">
      <h1>{`Count: ${name}`}</h1>
      <input
        name="name"
        autoComplete="off"
        type="text"
        value={name}
        onChange={(e)=>{ setName(e.target.value)}}
      />
      {/* <button className="action-btn" onClick={setName("")}>Clear</button> */}
    </div>
  );
}

export default UseRefInput;