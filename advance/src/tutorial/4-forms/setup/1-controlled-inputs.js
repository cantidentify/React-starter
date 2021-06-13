import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  const [person,setPerson] = useState({firstName:'',email:'',age:''})
  const [people, setPeople] = useState([]);

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name] : value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(person.firstName && person.email && person.age){
      const newPerson = {...person,id: new Date().getTime.toString}
      setPeople([...people , newPerson])
      setPerson({firstName:'',email:'',age:''})
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(firstName && email){
  //     // setPeople((people)=>{
  //     //   return [...people,{firstName,email}]
  //     // })
  //     setPeople([...people,{id: new Date(),firstName,email}])
  //     setFirstName('')
  //     setEmail('')
  //   }else{
  //     console.log('empty')
    
  //   }
  // };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              onChange={handleChange}
              value={person.firstName}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              onChange={handleChange}
              value={person.email}
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              onChange={handleChange}
              value={person.age}
              type="text"
              id="age"
              name="age"
            />
          </div>
          <button type="submit">Add person</button>
        </form>
        {people.map((value)=>{
          return(
            <div key={value.id} className='item'>
              <h4>{value.firstName}</h4>
              <p>{value.email}</p>
              <p>{value.age}</p>
            </div>
          )
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
