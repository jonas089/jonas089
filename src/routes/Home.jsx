import React from 'react';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.png';
import GitHubProfile from '../services/Github';
import BitcoinPrice from "../services/Coingecko";
import './Home.css';

const navigation = {
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/jonas089',
      icon: (props) => (
        <img alt="Github" src={github} className='w-16 h-16'></img>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jonas-pauli-a6ba38233/',
      icon: (props) => (
        <img alt="LinkedIn" src={linkedin} className='w-16 h-16'></img>
      ),
    },
    {
      name: 'Gmail',
      href: 'mailto:jonas089@gmail.com?subject=Hello&body=World!%3F',
      icon: (props) => (
        <img alt="Gmail" src={gmail} className='w-16 h-16'></img>
      ),
    },
  ],
}


const articles = [
  { name: 'R&D Blog', description: 'Articles on Cryptography, Blockchain and Engineering.', href: 'https://medium.com/@jonas_casper', icon: medium },
]

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='bg-default flex flex-col items-center justify-center bg-center'>
          <div className="flex flex-col items-center justify-center bg-black w-full md:w-1/2">
            {/* 
              Candidate information and Links
            */}
            <div className='bg-black flex flex-col items-center justify-center  w-3/4 py-5'>
              <BitcoinPrice />
            </div>
            <div className='px-5 flex flex-col items-center justify-center flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-white-900/5 bg-gradient-to-r from-purple-500 to-red-500 w-3/4'>
              <br />
              <p className='text-xl font-bold'>Experienced Rust Engineer specialized in Systems Design & Cryptography</p>
              <br />
              <p>Current occupation: Senior Blockchain & ZK Engineer @ Chainsafe Systems</p>
              <br />
              <div className='flex justify-center w-1/2 pb-5'>
                <a href='https://github.com/jonas089' className='border border-black text-black rounded-md px-10 py-2 transition-colors duration-300 hover:bg-red-500 hover:text-black'>Github</a>
                <a href='https://www.linkedin.com/in/jonas-pauli/' className='ml-4 border border-black text-black rounded-md px-10 py-2 transition-colors duration-300 hover:bg-red-500 hover:text-black'>LinkedIn</a>
              </div>
            </div>
            <GitHubProfile />
            {/* 
              Medium articles - R&D
            */}
            <div className='bg-black flex flex-col items-center justify-center  w-3/4'>
              <h1 className="pb-10 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                Articles
              </h1>
            </div>
            <div className='bg-black flex flex-col items-center justify-center  w-3/4'>
              <ul className="list-none w-full">
                {articles.map((article, index) => (
                  <li key={index} className="mb-4">
                    <a href={article.href} className="block bg-gradient-to-r from-purple-500 to-red-500 rounded-lg shadow-md p-4">
                      <h1 style={{ fontFamily: "'Roboto Slab', cursive", textTransform: "uppercase" }} className='text-black text-xl'>{article.name}</h1>
                      <p className='text-white-700'>{article.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 
              Public documents & downloads - includes the CV as PDF.
            */}
            <div className='bg-black flex flex-col items-center justify-center  w-3/4'>
              <h1 className="pb-10 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                Documents
              </h1>
              <div className='flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-red-500 rounded-lg shadow-md p-4 mb-4 w-full'>
                <a className='py-3 px-3 border border-purple-900 rounded-md hover:bg-red-500' href="/jonas-pauli-cv.pdf" download="jonas-pauli-cv.pdf">Download CV</a>
              </div>
            </div>
            <footer className="bg-black">
              <div className="mx-auto max-w-7xl overflow-hidden px-6 py sm:py lg:px-8">
                <div className="mt-10 pb-10 flex justify-center space-x-10">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-white-400 hover:text-white-500">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div >
    );
  }
}

export default Home;
