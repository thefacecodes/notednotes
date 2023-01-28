import Link from 'next/link'
import React, { useContext } from 'react'
import { AppContext, NotesContext } from './AppContext'

function Nav() {
  const {state} = useContext(NotesContext)
  return (
    <nav>
        <Link href="/"><img src="Noted.png" alt="" /></Link>

        <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/signin">{state.user ? "Dashboard" : "Sign in"}</Link></li>
            <li><Link href="/about">FAQs</Link></li>
            <button>Subscribe</button>
        </ul>
    </nav>
  )
}

export default Nav