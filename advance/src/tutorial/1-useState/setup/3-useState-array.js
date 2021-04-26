import React from 'react';
import { data } from '../../../data';

const Render = ({people}) => {
  return(
    people.map((d,index) => <p key={index}>{d.name}</p>)
  )
}

const DeleteName = (props) => {
  let peoples = props.people;
  const id = props.id;
  peoples = peoples.filter(people => people.id !== id);
  return(peoples)
}

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)
  return( 
    <>
      {people.map((person) =>{
        const {id,name} = person
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button className="btn" style={{marginTop:0}} onClick={() => setPeople(DeleteName({people,id}))}>Delete this item</button>
        </div>
      })}
      <button className="btn" onClick={() => setPeople([])}>Clear items</button>
    </>
  )
};

export default UseStateArray;
