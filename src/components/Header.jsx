import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='flex justify-between items-center px-[50px] py-[30px] bg-cyan-900'>
      <Link to='/' className="text-[55px] !font-bold uppercase">Logo</Link>
        <Navbar />
    </header>
  )
}

export default Header