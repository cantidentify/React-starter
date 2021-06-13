import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { getEmitHelpers } from 'typescript';

interface IUser {
  name: string;
  age?: number;
  getMessage(): string;
}
class Greeter {
  greeting: string;
  constructor(message: string){
    this.greeting = message
  }

  greet(){
    return "hello, " +this.greeting;
  }
}

type ID = string;

let vAny: any = 10
let vUnknow: unknown = 10;

let vAny2: any = "10"
let s1: string = vAny2
let s2: number = vAny2
let s3: boolean = vAny2

// -------------------

function App() {

  let errorMessage: string | null = null;

  const userID: ID = "IDF-332";

  const tag:ID = "strg"

  const user:IUser = {
    name: "atip",
    age: 23,
    getMessage(){
      return "Hello " + this.name
    }
  }

  const user2:IUser = {
    name: "atip",
    getMessage(){
      return "Hello " + this.name
    }
  }

  const test = (name:string):string =>{
    return "hi"
  }

  const typescript = () =>{
    let hello:string = "world"
    hello = "world"
    return hello
  }

  const getFullName = (name:string,surname:string):string => {
    let newName = user.getMessage()
    return "HI " + newName
  }

  const hello = 'foo'
  return (
    <div className="App">
      <header className="App-header">
        <p>
        {s3}
        </p>
      </header>
    </div>
  );
}

export default App;
