import React from 'react'
import { BsEnvelope } from "react-icons/bs"
import { RiFlashlightLine } from "react-icons/ri"
import {TbActivityHeartbeat} from "react-icons/tb"

function Features() {
  return (
    <div className="features">
        <h2 className='text-[36px] md:text-[40px] lg:text-[57px] font-clash font-medium mb-12'>Features</h2>
        <div className="feature-list">
            <div className='flex flex-col items-center'>
                <div className='h-[40px] mb-4 w-[40px] flex justify-center items-center rounded-full bg-[rgba(0,0,0,0.5)] border-2 border-black text-white' >
                    <BsEnvelope/>
                </div>
                
                <h3>Share notes with friends</h3>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
            <div className='flex flex-col items-center'>
            <div className='h-[40px] mb-4 w-[40px] flex justify-center items-center rounded-full bg-[rgba(0,0,0,0.5)] border-2 border-black text-white' >
                <RiFlashlightLine />
            </div>
                <h3>Auto Completion</h3>
                <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
            <div className='flex flex-col items-center'>
            <div className='h-[40px] mb-4 w-[40px] flex justify-center items-center rounded-full bg-[rgba(0,0,0,0.5)] border-2 border-black text-white' >
                <TbActivityHeartbeat />
            </div>
                <h3>Manage your notes with friends</h3>
                <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>
        </div>
    </div>
  )
}

export default Features