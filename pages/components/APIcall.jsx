import React, { useEffect, useState } from 'react'

const APIcall = () => {

    const [dataAPI, setDataAPI] = useState([])
    const [idWriteByUser, setIdWriteByUser] = useState(1)

    useEffect(() => {
      
        const request = async (idTask)=>{
            try{
                const url = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${idTask}`);
                const data = await url.json();
                setDataAPI(data)
            } catch(err){err,"error detected"}
        }
        request()
    }, [])
    
  return (
    <>
    <h3>Escribe el id de la tarea:</h3>
    <input type='number' onChange={(e)=>{setIdWriteByUser(e.target.value)}}></input>
    <button onClick={()=>{}}>Muestra la tarea</button>
    {dataAPI}
    </>
  )
}

export default APIcall