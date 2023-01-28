import React from 'react'

function Footer() {
  return (
    <footer className='px-4 md:px-12 lg:px-40 py-8'>
        <div className="pt-4 flex flex-col md:flex-row justify-between items-start gap-2 md:items-center border-t-2 mt-4">
             <img src="Noted.png" className='h-[25px]' alt="" />
        <p className='text-[#98A2B3]'>© 2023 Note.d by The Face. All rights reserved.</p>
        </div>
       
    </footer>
  )
}

export default Footer