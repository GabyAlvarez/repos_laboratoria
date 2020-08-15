import React from 'react'
import '../index.js'
import {portaPapeles, addClassName} from '../helpers/commons'

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
                <button className="col-sm-2"  onClick={() => {portaPapeles('SSHCopy'); addClassName('SSHCopy','animate__headShake')}} > SSH </button>
                <div className="col-sm-9">
                    <input type="text" className="form-control animate__animated" disabled={true} value={state.sshUrl} id="SSHCopy"/>
                </div>
            </div>
            
            <div className="form-group row">
                <button className="col-sm-2"  onClick={() =>{ portaPapeles('HTTPCopy'); addClassName('HTTPCopy','animate__headShake')} } > HTTP </button>
                <div className="col-sm-9">
                    <input type="text" className="form-control animate__animated" disabled={true} value={state.httpUrl} id="HTTPCopy"/>
                </div>
            </div>

            </div>
        </div>
    )
}

export default RepositoryDetail
