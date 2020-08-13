import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem';

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
                avatar: repos.owner.avatar_url
            }
        })

        console.log(repositories);
        setRepository(repositories);
    }

    return (
        <div>
            {
                repository.map( repo => (
                    <RepositoryItem 
                        key={repo.id}
                        {...repo } 
                    />
                
                ))
            }
        </div>
    )
}

export default CollectionRepos
