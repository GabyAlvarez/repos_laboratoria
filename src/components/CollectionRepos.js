import React, { useEffect, useState } from 'react'
import RepositoryDetail from './RepositoryDetail';

const CollectionRepos = () => {

    const [repository, setRepository] = useState([]);

    useEffect( () => {
        getRepository();
    }, [])

    const getRepository = async () => {

        const url = 'https://api.github.com/users/Laboratoria/repos'
        const reply = await fetch(url);
        const data = await reply.json();

        const repositories = data.map( repos => {
            return{
                id:repos.id,
                name: repos.name,
                category: repos.private,
                fullname: repos.full_name,
                description: repos.description,
                avatar: repos.owner.avatar_url,
                ssh: repos.owner.ssh_url,
                urlRepo: repos.owner.html_url
            }
        })

        console.log(repositories);
        setRepository(repositories);
    }

    return (
        <div>
        <table className="table">
            <tr>
                <th>Avatar</th>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Full-Name</th>
                <th>Description</th>
                <th>Actions</th>
                </tr> 
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
                <td><button className="btn btn-primary">Ver</button></td>
            </tr>
            ))
            }
            </tbody>
            </table>
        </div>
    )
}

export default CollectionRepos
