import React from 'react';
import "./App.css"

const Tapri = ({objList}) => {
    return objList.map(tapriList => {
        return (<div key={tapriList.id}>
            <span>
                <a target="_blank" href={tapriList.fbLink}><h4>Click to see profile</h4>   </a>
            </span>
            <span className="App-link">   Name: {tapriList.name}</span>
            <span> | Location: {tapriList.city}</span>
            <span> | Age: {tapriList.age}</span>
            <hr />
        </div>)
    })
}

export default Tapri;