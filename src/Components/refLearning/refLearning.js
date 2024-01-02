import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

 const RefLearning=()=>{
  const [inputValue, setInputValue] = useState("");
  /*
  const count = useRef(0);
  console.log(count)

  useEffect(() => {
    count.current = count.current + 1;
  });*/
  
  const inputElement=useRef();

  const focusInput=()=>{
    console.log(inputElement.current.style.height);
    inputElement.current.style.height="20px";
    inputElement.current.typep="password";
    inputElement.current.focus();

  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        ref={inputElement}
        style={{height:"50px"}}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
     <button onClick={()=>{focusInput()}}>FoucsInput</button>
    </>
  );
}
export default RefLearning;