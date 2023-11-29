import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")

    useEffect(() => {
      
    }, [])
    

  return (
    <div>{hour}</div>
  )
}

export default ActualHour