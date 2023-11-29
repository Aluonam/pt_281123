import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      const interval = setInterval(()=>{
        const date = new Date();
        console.log(date.toLocaleString().split(",")[1])
      }, 1000)
      return ()=> clearInterval(interval)
    }, [])
    

  return (
    <div>{hour}</div>
  )
}

export default ActualHour