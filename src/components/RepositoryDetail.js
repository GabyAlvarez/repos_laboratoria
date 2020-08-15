import React from 'react'
import '../index.js'

const RepositoryDetail = ({state, setIsDetail}) => {

    console.log(state);

    return (
        <div className="cardContainer">
            <button 
            className="return"
            onClick={() => setIsDetail(false)}> Regresar </button>
            
            <div className="cardDetail">
            <img src={state.avatar} alt="Laboratoria" className="cardAvatar"/>
            <h4>{state.name}</h4>
            <p>{state.id}</p>
            <p>{state.category === false ? "Público" : "Privado"}</p>
            <a href={state.sshUrl}> Use SSH </a>
            <a href={state.httpUrl}> Use HTTP </a>
            </div>
        </div>
    )
}

export default RepositoryDetail
