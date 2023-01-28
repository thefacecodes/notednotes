import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"

function MobileNav() {
    const [nav, navOpen] = useState(false)
  return (
    <nav className='px-4'>
        <Link href="/">
        <img src="Noted.png" alt="" />
      </Link>
      <button onClick={() => navOpen(true)} className='h-[40px] w-[40px] text-[#F5F8FD] bg-[#352957] flex justify-center items-center text-[24px]'><RxHamburgerMenu /></button>
      {nav && <ul className="menu">
        <button onClick={() => navOpen(false)}  className='self-end justify-self-start h-[40px] w-[40px] text-[20px] bg-[#F5F8FD] flex justify-center items-center mb-6 text-[#352957]'>X</button>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/signin">Sign in</Link></li>
        <li><Link href="/">Subscribe</Link></li>
      </ul>}
    </nav>
  )
}

export default MobileNav