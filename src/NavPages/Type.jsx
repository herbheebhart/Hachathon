import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Type = () => {
    const [text] = useTypewriter({
        words: ['Innovations'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed:80,
       
      })
  return (
    <div className='w-[80%] lg:m-auto pt-[3rem] '>
      <h1 className='text-right lg:text-2xl text-xl text-white'>igniting the revolution in HR <span>{text}</span>
      <Cursor cursorColor='red' />
      </h1>
      <div className="border border-opacity-100 border-t-[#FF26B9] border-t-4 border-b-transparent border-r-transparent border-l-transparent bottom-2 lg:w-[10%] w-[30%] float-right h-[30px] rounded-[50%]"></div>
    </div>
  )
}

export default Type

