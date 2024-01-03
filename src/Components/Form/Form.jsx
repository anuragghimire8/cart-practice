import React, { useState } from 'react';

const Form = () => {
  const [list, setList] = useState("");
  const [entered, setEntered] = useState([]);

  const writeForm = (e) => {
    setList(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (list.trim() !== "") {
      setList('');
      setEntered([...entered, { list }]);
    }
  }

  const deleteHandler = (id) => {
    setEntered((EnteredToDelete) => EnteredToDelete.filter((items, index) => index !== id));
    console.log(entered)
   
  }
 

  let enteredList = <h1>No List Available</h1>;
  if (entered.length > 0) {
    enteredList = entered.map((item, id) => (
      <ul key={id} style={{ display: "flex", justifyContent: "space-between", backgroundColor: "black", height: "50px" }}>
        <li style={{ color: "white" }}>{item.list}</li>
        <button style={{ color: "white", backgroundColor: "red", cursor: "pointer" }} onClick={() => { deleteHandler(id) }}>Delete</button>
      </ul>
    ));
  }

  return (
    <div>
      <h1 style={{ color: 'red', backgroundColor: 'black', textAlign: 'center', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        TODO LIST
      </h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Enter Your TODO LIST here' value={list} style={{ width: "100vh", border: "5px solid red" }} onChange={writeForm} />
        <button style={{ height: "25px", cursor: "pointer" }}>Search</button>
      </form>
      <div>
        {enteredList}
      </div>
    </div>
  );
};

export default Form;
