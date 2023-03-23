import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {
    let review = props.reviews;
  return (
    <div className=' flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className=' w-[140px] h-[140px] aspect-square rounded-full z-[23]' src={review.image}/>
            <div className='w-[140px] h-[140px]  rounded-full z-[-15] bg-violet-500 top-[-6px] left-[10px] absolute'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>


        <div className='text-center mt-7'>
            <p className='text-violet-300 uppercase text-sm '>{review.job}</p>
        </div>

        <div className='mx-auto text-violet-400 mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='mx-auto text-violet-400 mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>

    </div>
  )
}

export default Card