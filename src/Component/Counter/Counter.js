import React, {useEffect} from "react";
function Counter(){
    const [count,setCount]=React.useState(0);
    // const [disable,setDisable]=React.useState(false);
    useEffect(()=>{
        console.log("Hello this is useeffect effect")
        alert("this shows mounting")
    },[])

    const Increasecount=()=>{
        setCount((count)=>count+1);
    }
    const Decreasecount=()=>{
        setCount((count)=>count-1);
    }
    return (
      <div>
        {console.log("hello ...here is JSX")}
        <h2>CounterApp Below</h2>
        <h3>Count is {count}</h3>
        <button disabled={count === 20 ? true : false} onClick={Increasecount}>Increase</button>
        <button disabled={count === 0 ? true : false}  onClick={Decreasecount}>Decrease</button>
      </div>
    );
}
export default Counter;