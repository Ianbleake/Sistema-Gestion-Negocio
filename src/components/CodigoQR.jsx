import React from 'react'
import QRCode from "react-qr-code";

export const CodigoQR = () => {
  return (
    <div className='w-full min-h-[100VH] pt-16 pb-12'>
        <h1 className='hidden text-3xl ml-[350px] mt-[100px] sm:block'>Porfavor escane el codigo con su dispositivo</h1>
        <QRCode value="http://10.31.7.14:3000" className='m-16 mt-[50px] sm:mx-[520px] '/>
    </div>
  )
}

