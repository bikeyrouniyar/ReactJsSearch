import React from 'react';
import Tapri from './Tapri';

const objList = [{ id: 1, name: "Bikey", age: 27, city: "New York", fbLink: "https://www.linkedin.com/in/bikey-rouniyar-14272a123/" },
{ id: 2, name: "Alen", age: 25, city: "Paris", fbLink: "https://www.facebook.com/josealen02" },
{ id: 3, name: "Shekhar", age: 26, city: "London", fbLink: "http://google.com/" },
{ id: 4, name: "Nagen", age: 29, city: "Jogbani", fbLink: "https://www.linkedin.com/in/nagendra-sardar-90b9b9152/" },
{ id: 5, name: "Birendra", age: 22, city: "Gudri", fbLink: "https://stackoverflow.com/" }];



const App=()=> {
const inputText= valuee=>{
  console.log(valuee.target.value);
}

const pressFunction=event=>{
  if(event.key==="Enter"){
    console.log("pressed this key : " + event.target.value)
  }
}


  return (
    <div >
      <h1>The tapri details: </h1>
      <hr />
    <label htmlFor="searchInput">Search: </label>
      <input id="search" type="text"   onKeyPress={pressFunction}/>
     <Tapri objList={objList}/>
    </div>
  );
}

export default App;
