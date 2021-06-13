import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import {reducer} from './reducer'

// const reducer = (state, action) => {
//   if (action.type === "ADD_ITEM") {
//     const newPeople = [...state.people, action.payload];
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: "Item added",
//     };
//   }
//   if(action.type === "NO_VALUE"){
//     return {...state, isModalOpen: true, modalContent:'Please enter value'}
//   }
//   if(action.type === "CLOSE_MODAL"){
//     return {...state , isModalOpen:false}
//   }
//   if(action.type === "DELETE_ITEM"){
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload
//     )
//     return{...state,people:newPeople, isModalOpen:true, modalContent:"Item deleted"}
//   } 
//   throw new Error("no matching action type");
// };

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  };
  const closeModal = () => {
    dispatch({type:"CLOSE_MODAL"})
  }
  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={()=>{dispatch({type:"DELETE_ITEM",payload:person.id})}}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
