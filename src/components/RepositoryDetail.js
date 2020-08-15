import React from 'react'
import '../styles/styleCard.css'
import {clipboard, addClassName} from '../helpers/commons'

const RepositoryDetail = ({state, setIsDetail}) => {

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

            <div className="form-group row">
                <div className="col-sm-9">
                    <input type="text" className="form-control animate__animated" disabled={true} value={state.sshUrl} id="SSHCopy"/>
                </div>
                <button className="col-sm-2"  onClick={() => {clipboard('SSHCopy'); addClassName('SSHCopy','animate__headShake')}} > SSH </button>
            </div>
            
            <div className="form-group row">
                <div className="col-sm-9">
                    <input type="text" className="form-control animate__animated" disabled={true} value={state.httpUrl} id="HTTPCopy"/>
                </div>
                <button className="col-sm-2" onClick={() =>{ clipboard('HTTPCopy'); addClassName('HTTPCopy','animate__headShake')} } > HTTP </button>
            </div>

            </div>
        </div>
    )
}

export default RepositoryDetail
