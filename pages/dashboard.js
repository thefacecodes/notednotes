import React, { useContext, useState } from 'react'
import { BiPlus, BiUser } from "react-icons/bi"
import { BsPower } from 'react-icons/bs'
import AddNote from '../components/AddNote'
import { NotesContext } from '../components/AppContext'
import NotePreview from '../components/NotePreview'
import { signOut } from "firebase/auth";
import { auth } from '../components/firebase'


function dashboard() {
    const [newNote, addNewNote] = useState(false)
    const {state, dispatch} = useContext(NotesContext)

    const logOut = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Signed out success");
        })
        .catch((error) => {
          // An error happened.
          console.log("Couldn't sign you out");
        });
    };


  return (
    <div className="dashboard">
        {newNote && <AddNote addNewNote={addNewNote}/>}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
            <h1>Welcome, {state.user?.displayName ? state.user.displayName : state.user?.email}</h1>
            <div className="flex gap-4 items-center">
                <button className='flex gap-2 items-center border-2 rounded border-black px-6 py-2 hover:bg-black hover:text-white'><BiUser /> Profile</button>
                <button className='flex gap-2 items-center border-2 rounded border-black px-6 py-2 hover:bg-black hover:text-white' onClick={logOut}><BsPower /> Log out</button>
            </div>
        </div>
            <div className="notes">
                <div onClick={() => addNewNote(true)} className="flex bg-black border-black text-white border-2 h-[200px] rounded-xl flex-col gap-2 justify-center items-center">
                    <BiPlus className='text-[40px] border-2 rounded-full'/>
                    <h3>Add New Note</h3>
                </div>
                {state.notes.map(item => <NotePreview key={item.id} item={item}/>)}
            </div>
        
    </div>
  )
}

export default dashboard