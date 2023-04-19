import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards1 from '../cards/Cards1'
import Cards2 from '../cards/Cards2'
import Cards3 from '../cards/Cards3'
import Cards4 from '../cards/Cards4'


function Home() {
    const [card,setCard]= useState('')
    console.log(card);
    return (
        <div>
            <h1 className='text-4xl text-center pt-[50px] font-bold'>Chose Your Card style</h1>
            <div className='p-5 mt-5 grid grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
                <div  onClick={()=>{setCard(1)}} >
                <Cards1 status={card}/>
                </div>
                <div  onClick={()=>{setCard(2)}} >
                <Cards2 status={card}/>
                </div>
                <div  onClick={()=>{setCard(3)}} >
                <Cards3 status={card}/>
                </div>
                <div  onClick={()=>{setCard(4)}} >
                <Cards4 status={card}/>
                </div>
            </div>
            <div className='py-10 flex justify-around'>
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white mt-4 lg:mt-0">More styles</button>
                <Link to={'/update-details'} state={{card}} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black mt-4 lg:mt-0">Next Step</Link>
            </div>

        </div>
    )
}
export default Home