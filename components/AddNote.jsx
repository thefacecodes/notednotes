import React, { useContext, useState } from 'react'
import { NotesContext } from './AppContext'
import ImageAvatar from './ImageAvatar'

function AddNote({addNewNote}) {
    const {state, dispatch} = useContext(NotesContext)
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [image, setImage] = useState("")

    // console.log(image);

    const submitNote = (e) => {
        e.preventDefault()
        const newNote = {id: new Date().getTime(), title: title ? title : "Untitled Note", note, image, date: new Date().toDateString()}
        console.log(newNote);
        
        setTitle("")
        setNote("")
        dispatch({type:"AddNote", payload: newNote})
        addNewNote(false)
    }

    const saveImage = (e) => {
      const pic = URL.createObjectURL(e.target.files[0])
      setImage(pic)
    }

  return (
    <div className="add-note">
        <button onClick={() => addNewNote(false)} className='self-end bg-white text-black h-[40px] w-[40px]'>X</button>
        <form onSubmit={submitNote}>
            <h1>Add New Note</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label htmlFor="image" className='bg-[#A1A1A1] overflow-hidden h-[200px] rounded'>{image ? <img src={image} alt="" className='object-cover'/> : <ImageAvatar />}</label>
            <input type="file" className='hidden' name="image" id="image" accept='image/*' onChange={saveImage}/>
            <label htmlFor="note">Note</label>
            <textarea name="note" id="note" value={note} required="true" onChange={(e) => setNote(e.target.value)}></textarea>
            <button type="submit"  className='bg-black text-white h-[35px] rounded'>Add Note</button>
        </form>
        
    </div>
  )
}

export default AddNote