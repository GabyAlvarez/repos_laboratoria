import React, { useEffect, useState } from 'react'
import RepositoryDetail from './RepositoryDetail';
import RepositoryTable from './RepositoryTable';

const CollectionRepos = () => {

    const [repository, setRepository] = useState([]);

    const [state, setState] = useState({});

    const [isDetail, setIsDetail] = useState(false);

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
                sshUrl: repos.ssh_url,
                httpUrl: repos.clone_url
            }
        })

        setRepository(repositories);
    }

    return (
        <div>
        { !isDetail  &&
            <RepositoryTable 
                repository={repository}
                setState={setState}
                setIsDetail={setIsDetail}
            />
                //document.execCommand('copy');
            }
        {
            isDetail  && 
            <RepositoryDetail
                state={state}
                setIsDetail={setIsDetail}
            />
        }
        </div>
    )
}

export default CollectionRepos
