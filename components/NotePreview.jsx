import React from "react";

function NotePreview({ item }) {
  return (
    <div className="preview">
      <h3>{item.title}</h3>
      <p>{item.note}</p>
      <img
        src={item.image}
        className="object-cover rounded-xl h-[200px] w-full object-top"
        alt=""
      />
    </div>
  );
}

export default NotePreview;
