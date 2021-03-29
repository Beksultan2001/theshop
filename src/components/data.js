import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {AiFillSafetyCertificate,AiFillSketchCircle,AiFillCodeSandboxCircle} from 'react-icons/ai';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: 'products',
    text: 'Products',
  },
  {
    id: 3,
    url: 'about',
    text: 'about',
  },

  
];


export const base = [
  {
    id: 1,
    title: 'Mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    icon: <AiFillSafetyCertificate/>,

  },
  {
    id: 2,
    title: 'Vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    icon: <AiFillSketchCircle/>,

    
  },
  {
    id: 3,
    title: 'History',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    icon: <AiFillCodeSandboxCircle/>,
    
  }
]