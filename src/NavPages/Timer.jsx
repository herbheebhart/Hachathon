import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [day,setDay] = useState("00");
    const [hour,setHours] = useState("00");
    const [minute,setMinutes] = useState("00");
    const [second,setSeconds] = useState("00");
    let interval = useRef();
    const startTimer = () => {
        const newDate = new Date("march 12,2024 00:00:00");
        interval = setInterval(() =>{
            const now = new Date();
            const diff = newDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 *24)/(1000 * 60 * 60)));
            const minutes = Math.floor((diff % (1000 * 60 *60))/(1000 * 60));
            const seconds = Math.floor((diff % (1000 *60)) / 1000);
            if (diff < 0){
                clearInterval(interval.current);
            }else{
                setDay(days);
              setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
          
        },1000)

    }
    useEffect( ()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current);
        }
    })
  return (
    <div className='timer-container'>
        <div className="timer flex flex-row gap-5 mt-[2rem] lg:text-[44px] md:text-[30px] md:pb-4 lg:pb-4 sm:text-[54px] sm:font-[400] leading-[30px]">
        <section>
                <p>{day}</p>
            </section>
            <span>:</span>
            <section>
                <p>{hour}</p>
            </section>
            <span>:</span>
            <section>
                <p>{minute}</p>
            </section>
            <span>:</span>
            <section>
                <p>{second}</p>
            </section>
        </div>
    </div>
  )
}

export default Timer
