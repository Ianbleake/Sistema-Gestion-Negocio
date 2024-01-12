import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdList } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";
import { IoMdBasket } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='w-full h-12 bg-emerald-700 text-white fixed bottom-0 z-50 flex justify-around items-center'>
                <Link to="/"><IoMdHome className='h-32 w-10'/></Link>
                <Link to="/product"><IoMdList className='h-32 w-10'/></Link>
                <Link to="/admin"><IoMdBriefcase className='h-32 w-10'/></Link>
                <Link to="/carrito"><IoMdBasket className='h-32 w-10'/></Link>
        </footer>
    )
}
