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
      setEntered([...entered, { title: list, completed: false }]);
    }
  }

  const deleteHandler = (id) => {
    setEntered((EnteredToDelete) => EnteredToDelete.filter((item, index) => index !== id));
  }

  const Completion = (id) => {
    setEntered((enteredToUpdate) => {
      const updatedList = enteredToUpdate.map((item, index) => {
        if (index === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return updatedList;
    });
  }

  let enteredList = <h1>No List Available</h1>;
  if (entered.length > 0) {
    enteredList = entered.map((item, id) => (
      <ul key={id} style={{ display: "flex", justifyContent: "space-between",alignItems:"center", backgroundColor: "black", height: "50px" }}>
      <div style={{display:"flex",justifyContent: "space-between",alignItems:"center"}}>
        <li style={{ color:"white"  }}>
          {item.title} 
         
        </li>
         {item.completed ? <p style={{color:"white",marginLeft: "10px"}}>  == Completed</p>
        : ""}
        </div>
     
        <div>
       
          <button style={{ color: "white", backgroundColor: "red", cursor: "pointer" }} onClick={() => deleteHandler(id)}>Delete</button>
          <button style={{ color: "white", backgroundColor: "blue", cursor: "pointer" }} onClick={() => Completion(id)}>
          {item.completed ? "Uncompleted" : "Completed"}</button>
        </div>
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
