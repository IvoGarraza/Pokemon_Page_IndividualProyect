import React from 'react'
import './Create.css'

const Create = () => {
  return (
    <div className='createContainer'>
        <div className="titleContainer">
            <h2>Creacion</h2>
        </div>
        <div className="inputsContainer">
            <input placeholder='nombre pokemon'></input>
            <input placeholder='tipo pokemon'></input>
            <input placeholder='imagen'></input>
            <input placeholder='stats'></input>
            <input placeholder='altura y peso'></input>
            <label>input</label>
        </div>
        <div className="containerButton">
            <button>Crear</button>
        </div>
    </div>
  )
}

export default Create