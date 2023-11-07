import { useState } from "react"
import { Data } from "./Data"
import {NavLink} from "react-router-dom"
import {HiMenuAlt3} from "react-icons/hi"
useState
export default function NavBar () {
    // the state that control the toggle
    const [Toggle, setToggle] = useState(false)
    const showNav = () => {
        setToggle(!Toggle)
    }
    // end of toggle control
    return(
        <div>
            <nav className="fixed top-0 w-full bg-[#160E2B] items-center flex p-4 border-white">
                <div className="flex justify-between items-center w-[80%] m-auto flex-wrap md:flex-nowrap">
                    <NavLink  className="text-3xl font-[700] cursor-pointer"><span className="text-[#FFFFFF]">get</span><span className="text-[#D434FE]">Linked</span></NavLink>
                    {/* this control the toggle */}
                    <div  className="flex justify-end md:hidden ring-1 ring-black rounded"
                    onClick={showNav}>  
                    <HiMenuAlt3/>
                    </div>
                    <ul className={ `${Toggle ? "flex" : "hidden"} flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`} >
                      {Data.map( (link,index) => {
                        return(
                            <li key={index} className={link.cname}>
                                <NavLink className="text-white font-bold" to={link.href}>
                                    {link.title}
                                </NavLink>
                            </li>
                        )
                      })}
                    </ul>
                    <button className={`${Toggle ? " flex" : " hidden"} text-white hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gradient-to-r from-[#903AFF] via-[#DA3AFE] to-[#FF26B9]  px-1 p-2 w-[172px] h-[53px] rounded-lg mt-4 `}>
                     Register
                    </button>
                </div>
            </nav>
        </div>
    )
}


