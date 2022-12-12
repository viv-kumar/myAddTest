import React, { useRef, useState } from "react";
function App() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    
    const addFunc=()=>{
        //  console.log(+b+ +a);
        console.log(+num1+ +num2);
    }
    console.log(+num1+ +num2);



  return <div>
        <h2>
            ADD BELOW
        </h2>
        <input placeholder="enter first number" onChange={(e)=>{setNum1(e.target.value)}} />
        <input placeholder="enter second number"  onChange={(e)=>{setNum2(e.target.value)}}/>
        <button onClick={addFunc}>Add</button>
  </div>;
}
export default App;
