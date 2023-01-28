import React from 'react'

function NotePreview({item}) {
  return (
    <div className="preview">
        <h3>{item.title}</h3>
        <p>{item.note}</p>
        <img src={item.image} alt="" />
    </div>
  )
}

export default NotePreview