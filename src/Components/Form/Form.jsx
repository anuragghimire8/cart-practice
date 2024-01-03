import React, { useState } from 'react';

const Form = () => {
  // State variables
  const [list, setList] = useState("");
  const [entered, setEntered] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Event handler for input field
  const writeForm = (e) => {
    setList(e.target.value);
  }
const updateForm=(e)=>{
  setList(e.target.value)

}
  // Event handler for form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Check if the input is not empty
    if (list.trim() !== "") {
       // If not in edit mode, add a new item to the list
       setEntered([...entered, { title: list, completed: false }]);
       setList('');
      // If in edit mode, update the existing item
      if (editIndex !== null) {
        const updatedList = [...entered];
        updatedList[editIndex] = { title: list, completed: entered[editIndex].completed };
        setEntered(updatedList);
        setEditIndex(null);
        setList('');
        setShowModal(false);
      } 
    }
  };

  // Event handler for deleting an item
  const deleteHandler = (id) => {
    setEntered((EnteredToDelete) => EnteredToDelete.filter((item, index) => index !== id));
    // If in edit mode and delete the item being edited, exit edit mode
    if (editIndex === id) {
      setEditIndex(null);
      setShowModal(false);
    }
  }

  // Event handler for completing or uncompleting an item
  const completionHandler = (id) => {
    setEntered((completedbhako) => {
      const completedist = completedbhako.map((item, index) => {
        if (index === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return completedist;
    });
  }

  // Event handler for editing an item
  const editHandler = (id) => {
    setEditIndex(id);
    setList(entered[id].title);
    setShowModal(true);
  }

  // Event handler for closing the modal
  const closeModal = () => {
    setEditIndex(null);
    setShowModal(false);
  }

  // Rendering the list
  let enteredList = <h1>No List Available</h1>;
  if (entered.length > 0) {
    enteredList = entered.map((item, id) => (
      <ul key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", height: "50px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <li style={{ color: "white" }}>{item.title}</li>
          {item.completed ? <p style={{ color: "white", marginLeft: "10px" }}>  == Completed</p> : ""}
        </div>
        <div>
          <button style={{ color: "white", backgroundColor: "red", cursor: "pointer" }} onClick={() => deleteHandler(id)}>Delete</button>
          <button style={{ color: "white", backgroundColor: "blue", cursor: "pointer" }} onClick={() => completionHandler(id)}>
            {item.completed ? "Uncompleted" : "Completed"}
          </button>
          {!showModal && <button style={{ color: "white", backgroundColor: "green", cursor: "pointer" }} onClick={() => editHandler(id)}>Edit</button>}
        </div>
      </ul>
    ));
  }

  return (
    <div>
      {/* Header */}
      <h1 style={{ color: 'red', backgroundColor: 'black', textAlign: 'center', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        TODO LIST
      </h1>

      {/* Form for adding or updating items */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Enter Your TODO LIST here'
          value={list}
          style={{ width: "100vh", border: "5px solid red" }}
          onChange={writeForm}
          disabled={editIndex !== null}
        />
        {editIndex === null && (
          <button style={{ height: "25px", cursor: "pointer" }}>
            {editIndex !== null ? 'Update' : 'Add'}
          </button>
        )}
      </form>

      {/* Modal for editing items */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Edit Item</h2>
            <form onSubmit={onSubmit}>
              <input type="text" value={list} onChange={updateForm} />
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      )}

      {/* Displaying the list */}
      <div>{enteredList}</div>
    </div>
  );
};

export default Form;
