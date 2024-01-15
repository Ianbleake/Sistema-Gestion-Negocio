import React from 'react'


export const LogIn = () => {
    return (
        <div className='container w-full min-h-[100VH] pt-44 pb-12 sm:pt-56 sm:px-[130px]'>

            <div className="card relative flex flex-col p-4 rounded-md text-black bg-emerald-300 sm:w-[900px]">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Bienvenido a <span className="text-emerald-600">ControlApp</span></div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Accede a tu cuenta de Administrador:</div>
                <form action='/Admin' className="flex flex-col gap-3">
                    <div className="block relative">
                        <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                        <input type="text" id="email" className="rounded border border-emerald-600 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                    </div>
                    <div className="block relative">
                        <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                        <input type="password" id="password" className=" rounded border border-emerald-600 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                    </div>
                    <button type="submit" className="bg-emerald-500 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
                </form>
            </div>

        </div>
    )
}