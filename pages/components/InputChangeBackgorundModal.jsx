import React, { useState } from 'react'
import ModalANT from './ModalANT'

const InputChangeBackgorundModal = () => {

    const [colorUser, setColorUser] = useState("#000000")

  return (
    <>
    <h3>Escribe un color:</h3>
    <input type='color' onChange={(e)=>{setColorUser(e.target.value)}}></input>
    <ModalANT colorUser={colorUser}></ModalANT>
    </>
  )
}

export default InputChangeBackgorundModal