import React from 'react'

const RepositoryTable = ({repository, setState,setIsDetail}) => {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Full-Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr> 
                </thead>
                <tbody>
                {
                repository.map( repo => (
                <tr key={repo.id}>
                    <td><img src={repo.avatar} alt="Laboratoria" className="avatar"/></td>
                    <td>{repo.id}</td>
                    <td>{repo.name}</td>
                    <td>{repo.category === false ? "Público" : "Privado"}</td>
                    <td>{repo.fullname}</td>
                    <td>{repo.description}</td>
                    <td><button 
                    className="btn btn-primary"
                    onClick={() => {
                        setState(repo)
                        setIsDetail(true)
                    }}>Ver</button></td>
                </tr>
                ))
                }
                </tbody>
                </table>
        </div>
    )
}

export default RepositoryTable



