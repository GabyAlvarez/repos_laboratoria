import React from 'react'

const RepositoryDetail = ({state, setIsDetail}) => {

    return (
        <div>
            <button 
            className="btn btn-primary"
            onClick={() => setIsDetail(false)}>Regresar</button>
            <img src={state.avatar} alt="Laboratoria" className="avatar"/>
            <h4>{state.name}</h4>
            <p>{state.id}</p>
            <p>{state.category === false ? "Público" : "Privado"}</p>
            <a href={state.sshUrl}> Use SSH </a>
            <a href={state.httpUrl}> Use HTTP </a>
        </div>
    )
}

export default RepositoryDetail
