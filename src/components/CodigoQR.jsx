import React from 'react'
import QRCode from "react-qr-code";

export const CodigoQR = () => {
  return (
    <div className='w-full min-h-[100VH] pt-16 pb-12'>
        <QRCode value="http://192.168.1.76:3000" />
    </div>
  )
}

