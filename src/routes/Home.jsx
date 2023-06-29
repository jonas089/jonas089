import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import casper from '../assets/casper.png';
import profile from '../assets/profile.jpeg';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.png';

const navigation = {
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/jonas089',
      icon: (props) => (
        <img src={github} className='w-16 h-16'></img>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jonas-pauli-a6ba38233/',
      icon: (props) => (
        <img src={linkedin} className='w-16 h-16'></img>
      ),
    },
    {
      name: 'Gmail',
      href: 'mailto:jonas089@gmail.com?subject=Hello&body=World!%3F',
      icon: (props) => (
        <img src={gmail} className='w-16 h-16'></img>
      ),
    },
  ],
}




const repos = [
  { name: 'React', description: 'Web3 Dapp template for building apps on Casper, utilizing the native browser extension "Casper Wallet"', href: 'https://github.com/jonas089/casper-voting-dapp-and-template', icon: github },
  { name: 'Rust', description: 'Proc Macros for Smart Contract ABIs / Metadata and plenty of Smart Contracts', href: 'https://github.com/jonas089/claptrap', icon: github },
  { name: 'Testing / Tooling - Typescript', description: "Testing suite for Casper Smart Contracts", href: 'https://github.com/casper-network/integrations-nestech/tree/master/casper-erc1155/testing/manual/typescript', icon: github },
  { name: 'Testing / Tooling - Rust', description: "Native integrations tests versus mock VM", href: 'https://github.com/casper-network/integrations-nestech/blob/experimental-event-standard/casper-erc1155/example/erc1155-tests/src/test_fixture_2.rs', icon: github },
  { name: 'Circom ZK', description: 'Small demo project for "birthday Zero knowledge proofs" deployed on-chain', href: 'https://github.com/jonas089/casper-circom', icon: github },
  { name: 'Cryptography', description: 'Articles on Medium, covering ECC and Zero knowledge', href: 'https://medium.com/@jonas_casper', icon: medium },
  { name: 'Inpigritas', description: 'Hobby-project: A blockchain transaction network built from scratch in Python (Flask, Pycryptodome)', href: 'https://github.com/jonas089/Inpigritas-2022', icon: profile },
]


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className=''>
          <div className="flex flex-col items-center justify-center bg-black ">


            <h1 className="pb-20 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Jonas Pauli
            </h1>

            <div className='px-5 flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-blue-500'>
              <p className='pt-5 pb-5 text-center text-xl w-full text-white'><p className='text-emerald-900'>Software Engineer</p> specialised in backend, systems and smart contract programming</p>
              <p className='text-emerald-900'>Current occupation: R&D Engineer at Casper Association</p>
              <div className='colo'></div>
              <div className='flex justify-center w-1/2 py-5'>
                <a href='https://github.com/jonas089' className='border border-black text-black rounded-md px-10 py-2 transition-colors duration-300 hover:bg-emerald-500 hover:text-white'>Github</a>
                <a href='https://www.linkedin.com/in/jonas-pauli-a6ba38233/' className='ml-4 border border-black text-black rounded-md px-10 py-2 transition-colors duration-300 hover:bg-blue-500 hover:text-white'>Connect</a>
              </div>      
            </div>


            <h1 className="pb-10 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Developer Spotlight
              <img src={profile} alt="Profile" className="w-30 h-16 ml-10 rounded-full" />
            </h1>



            <div className='pb-10'>
              <div className="w-full flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 bg-gradient-to-r from-emerald-500 to-blue-500">
                <div className="p-4">
                  {repos.map((item) => (
                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                        <img src={item.icon} className="h-10 w-10 text-white group-hover:text-grey-500 rounded-md" aria-hidden="true" />
                      </div>
                      <div>
                        <a href={item.href} className="font-semibold text-blue-800">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            <h1 className="pb-10 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Public Documents
            </h1>



            <div className='pt-10 py-10 px-5 flex flex-col items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-blue-500'>
              <a className='py-3 px-3 border border-white rounded-md' href="/cv.pdf" download="cv.pdf">Download CV</a> 
            </div>
          </div>
        </div>
        <footer className="bg-black">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <div className="mt-10 flex justify-center space-x-10">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-10 text-center text-20 leading-5 text-white">
              last updated: 29.06.2023
            </p>
          </div>
        </footer>

      </div>
    );
  }
}

export default Home;
