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
  { name: 'Casper-Circom', description: 'Zero Knowledge: Circom verifier integrated with the Casper Node.', href: 'https://github.com/jonas089/casper-circom', icon: github },
  { name: 'Pos-Rust', description: 'Proof of stake in Rust.', href: 'https://github.com/jonas089/pos-rust', icon: github },
  { name: 'Macro Compiler', description: 'Smart Contract Metadata emitter build with Proc Macros.', href: 'https://github.com/jonas089/raptor-abi', icon: github },
  { name: 'Trike-shield', description: 'Secure communication in Python with Diffie-Hellman and AES.', href: 'https://github.com/jonas089/trike-shield', icon: github },
  { name: 'React-Voting', description: 'Voting App built on the Casper Blockchain with Casper Wallet support.', href: 'https://github.com/jonas089/casper-voting-dapp-demo', icon: github },
  { name: 'ECDSA-Noir', description: 'Input generator for Noir zk circuits that utilize ECDSA (secp256k1) written in Rust.', href: 'https://github.com/jonas089/ecdsa-circuit-input-lib', icon: github },
  { name: 'Merkle Trees', description: 'Efficient Rust Merkle Tree(s) for use in Blockchain systems.', href: 'https://github.com/jonas089/thyla-trees/blob/master/merkle-tree/src/tornado.rs', icon: github },
  { name: 'ECDSA', description: 'Elliptic Curve digital Signatures from scratch in Python.', href: 'https://github.com/jonas089/compy-sign', icon: github },
  { name: 'Inpigritas', description: 'A blockchain transaction network built from scratch in Python (Flask, Pycryptodome).', href: 'https://github.com/jonas089/Inpigritas-2022', icon: github },
  { name: 'Automated Market Maker', description: 'Automated Market Maker Smart Contracts written in Rust.', href: 'https://medium.com/casperblockchain/building-anautomated-market-maker-on-casper-fd35c5fa917e', icon: medium },
  { name: 'R&D Blog', description: 'Articles on Cryptography, Blockchain and Engineering.', href: 'https://medium.com/@jonas_casper', icon: medium },
]

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className=''>
          <div className="flex flex-col items-center justify-center bg-black">
            <h1 className="pb-20 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Jonas Pauli
              <img src={profile} alt="Profile" className="w-30 h-16 ml-10 rounded-full" />
            </h1>
            <div className='px-5 flex flex-col items-center justify-center w-full flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 bg-gradient-to-r from-emerald-500 to-blue-500'>
              <br />
              <p className='text-xl font-bold'>Experienced Rust Engineer specialized in Systems & Cryptography Engineering</p>
              <br />
              <p>Current occupation: R&D Engineer at Casper Association</p>
              <br />
              <div className='colo'></div>
              <div className='flex justify-center w-1/2 py-5'>
                <a href='https://github.com/jonas089' className='border border-black text-black rounded-md px-10 py-2 transition-colors duration-300 hover:bg-blue-500 hover:text-black'>Github</a>
                <a href='https://www.linkedin.com/in/jonas-pauli/' className='ml-4 border border-black text-black rounded-md px-10 py-2 transition-colors duration-300 hover:bg-blue-500 hover:text-black'>LinkedIn</a>
              </div>      
            </div>
            <h1 className="pb-10 pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Work Samples
            </h1>
            <div className='pb-10'>
              <div className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl shadow-lg ring-1 ring-gray-900/5 overflow-hidden">
                <div className="p-4">
                  {repos.map((item) => (
                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-blue-500">
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-blue-500">
                        <img src={item.icon} className="h-10 w-10 text-white group-hover:text-grey-500 rounded-md" aria-hidden="true" />
                      </div>
                      <div>
                        <a href={item.href} className="font-semibold text-emerald-900">
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
            <div className='pt-10 py-10 px-5 flex flex-col items-center justify-center w-full flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 bg-gradient-to-r from-emerald-500 to-blue-500'>
              <a className='py-3 px-3 border border-emerald-900 rounded-md hover:bg-blue-500' href="/cv.pdf" download="cv.pdf">Download CV</a> 
            </div>
          </div>
        </div>

        <footer className="bg-black">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py sm:py lg:px-8">
            <div className="mt-10 flex justify-center space-x-10">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-10 text-center text-20 leading-5 text-white">
              last updated: 13.12.2023
            </p>
          </div>
        </footer>

      </div>
    );
  }
}

export default Home;
