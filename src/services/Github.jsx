import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProfile = () => {
    const [profile, setProfile] = useState(null);
    const [Repos, setRepos] = useState(null);
    const [filteredRepos, setFilteredRepos] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/jonas089')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get('https://api.github.com/users/jonas089/repos')
            .then(response => {
                setRepos(response.data);
                const reposFilteredByTag = response.data.filter(repo => 
                    {
                    console.log(repo.topics);
                    return repo.topics.includes('portfolio')
                    }
                );
                setFilteredRepos(reposFilteredByTag);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (!profile || !filteredRepos) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col items-center justify-center bg-black w-3/4'>
            <h1 className="pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Github
              <img src={profile.avatar_url} alt="Profile" className="w-30 h-16 ml-10 rounded-full" />
            </h1>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>            
            <ul className="list-none w-full">
                <p className='text-white'>Public Repositories: {profile.public_repos}</p>
                {filteredRepos.map((repo, index) => (
                    <li key={index} className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg shadow-md p-4 mb-4">
                        <h1 className='text-blue-900 text-xl'><a href={repo.html_url}>{repo.name}</a></h1>
                        <p className='text-black'>{repo.description}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default GitHubProfile;