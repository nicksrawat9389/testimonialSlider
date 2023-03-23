import React from 'react'
import Card from './Card'
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'



const Testimonial = (props) => {
    let reviews = props.reviews;
    const[index,setIndex] = useState(0);

    function leftShiftHanlder() {
        if(index-1<0){
            setIndex(reviews.length -1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHanlder(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }



  return (
    <div>
        <Card reviews={reviews[index]}></Card>


        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHanlder}>
                <FiChevronLeft/>
            </button>
            <button className='cursor-pointer hover:text-violet-500 ' onClick={rightShiftHanlder}>
                <FiChevronRight/>
            </button>
        </div>

        <div>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonial