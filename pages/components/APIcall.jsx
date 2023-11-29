import React, { useState } from 'react'

const APIcall = () => {

    const [dataAPI, setDataAPI] = useState([])
    const [idWriteByUser, setIdWriteByUser] = useState(1)
      
    const request = async (idTask)=>{
            try{
                const url = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${idTask}`);
                const data = await url.json();
                setDataAPI(data[0].title)
            } catch(err){err,"error detected"}
        }
  
    
  return (
    <>
    <h3>Escribe el id de la tarea:</h3>
    <input type='number' onChange={(e)=>{setIdWriteByUser(e.target.value)}} min="1" max="100"></input>
    <button onClick={()=>{request(idWriteByUser)}}>Muestra la tarea</button>
    {dataAPI}
    </>
  )
}

export default APIcall