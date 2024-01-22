import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubActivity = () => {
    const username = 'jonas089';
    const contributionImageUrl = `https://ghchart.rshah.org/${username}`;
  
    return (
    <div className='pt-10 pb-10 flex flex-col items-center justify-center'>
        <img src={contributionImageUrl} alt="GitHub Contributions" />
        <p style={{ 
            fontFamily: "'Roboto Slab', serif", // Use serif instead of cursive for Roboto Slab
            fontSize: '1.2em', // Larger font size
            fontWeight: 'bold', // Make it bold
            textAlign: 'center' // Center align the text if needed
            }} 
            className='text-gray-700'>
            Activity Monitor
        </p>
    </div>
    );
};

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
        axios.get('https://api.github.com/users/jonas089/repos?per_page=60')
            .then(response => {
                setRepos(response.data);
                const reposFilteredByTag = response.data.filter(repo => 
                    {
                        console.log('Repo: ', repo.html_url);
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
            <GitHubActivity/>           
            <ul className="list-none w-full">
                <p style={{ fontFamily: "'Roboto Slab', cursive" }} className='text-white'>Public Repositories: {profile.public_repos}</p>
                {filteredRepos.map((repo, index) => (
                    <li key={index} className="mb-4">
                        <a href={repo.html_url} className="block bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg shadow-md p-4">
                            <h1 style={{ fontFamily: "'Roboto Slab', cursive", textTransform: "uppercase" }} className='text-black text-xl'>{repo.name}</h1>
                            <p className='text-gray-700'>{repo.description}</p>
                        </a>
                    </li>
                ))}
                <li className="mb-4">
                    <a href='https://github.com/jonas089?tab=repositories' className="block bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg shadow-md p-4">
                        <h1 className='text-blue-900 text-xl'>...</h1>
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default GitHubProfile;
