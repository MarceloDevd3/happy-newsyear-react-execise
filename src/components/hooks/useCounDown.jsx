import { useState } from "react"

const useContDown = (date) => {
  
    const [day, setday] = useState()
    const [hour, sethour] = useState()
    const [Minute, setMinute] = useState()
    const [segundo, setsegundo] = useState()


   const countdown = () => {

    const countData = new Date(date).getTime() 
    const now = new Date().getTime() 

    const interval = countData - now
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    
 
    const dayNumber = Math.floor(interval / day) 
    const hourNumber = Math.floor((interval % day) / hour) 
    const minutoNumber = Math.floor((interval % hour) / minute) 
    const SegundoNumber = Math.floor((interval % minute) / second) 

    setday(dayNumber) 
    sethour(hourNumber) 
    setMinute(minutoNumber) 
    setsegundo(SegundoNumber) 
   }
   

   setInterval(countdown, 1000);
   return [day, hour, Minute, segundo];
} 

export default useContDown;