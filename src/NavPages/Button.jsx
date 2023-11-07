import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        {children}
        <button className='  text-white hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-[2rem] items-center justify-center font-medium bg-gradient-to-r from-[#903AFF] via-[#DA3AFE] to-[#FF26B9]  px-1 p-2 w-[172px] h-[53px] rounded-lg lg:mt-[2rem] mt-[2rem] '>Register</button>
    </div>
  )
}

export default Button
