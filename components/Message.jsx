import React from 'react'

function Message() {
  return (
    <div className="message">
        <div className="bg-[rgba(161,161,161,0.1)] rounded-2xl p-8 lg:p-20 flex flex-col items-center gap-2">
            <img src="Avatar.png" alt="" />
            <h4 className='text-black text-[20px]'>Do you have any questions?</h4>
            <p className='text-[#667085] text-[18px]'>We are available 24/7 to answer any question you have about Note.d</p>
            <button className='bg-black text-white rounded px-4 py-2'>Send a message</button>
        </div>
    </div>
  )
}

export default Message