import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import Person from '../../11-react-router/final/Person';
// more components
// fix - context api, redux (for more complex cases)


const PersonContext = React.createContext()
const AnimalContext = React.createContext()
// two components - Provider, Consumer


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson}} >
      <AnimalContext.Provider value="Hello">
        <h3>prop drilling</h3>
        <List people={people} />
      </AnimalContext.Provider>
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext)
  const greeting = useContext(AnimalContext)
  console.log(greeting)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
