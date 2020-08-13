import React from 'react'
//import '../styles/repository.css'
import '../index.css'

const RepositoryItem = ({avatar, id, name, full_name, category, description}) => {

    //const {avatar, id, name, full_name, category, description} = repo

    return (
        <div>
            <table className="table">
                {/* <thead className="thead-light">
                    <tr>
                    <th scope="col">Avatar</th>
                    <th scope="col">Id</th>
                    <th scope="col"></th>
                    <th scope="col">Full-Name</th>
                    <th scope="col">State</th>
                    <th scope="col">Description</th>
                    </tr>
                </thead> */}
            
                <tbody key={id}>
                    <tr>
                    <th><img src={avatar} alt="Laboratoria" className="avatar"/></th>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{full_name}</td>
                    <td>{description}</td>
                    </tr>
                </tbody>
              
            </table>
            
        </div>
    )
}

export default RepositoryItem
