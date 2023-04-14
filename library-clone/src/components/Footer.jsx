import React from 'react'
import { BsTwitter , BsYoutube } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import Translate from './Translate'

const Footer = () => {
  return (
    <div className="max-h-h_max h-h_max mt-20 w-full bg-zinc-950">
        <div className='flex flex-col'> 
            <div className='flex flex-row h-96 justify-between items-start pt-10 mx-64'>
            <div className='flex flex-col items-center'>
                <h2 className='font-sans text-lg text-gray-700 mb-4'>Translate this page</h2>
                <div className='w-full max-w-md border border-gray-300 rounded-lg shadow-lg'>
                    <div className='p-4'>
                        <Translate />
                    </div>
                </div>
            </div>

                <div className='flex justify-around gap-x-10 w-1/2'>
                    <div className='flex flex-col '>
                        <h1 className='font-sans mb-2 text-slate-300'>About the library</h1>
                        <a href='#' className='hover:underline text-xl mb-6 font-sans text-zinc-50'>Contact the library</a>
                        <a href='#' className='hover:underline text-xl mb-6 font-sans text-zinc-50'>Newsletters</a>
                        <a href='#' className='hover:underline text-xl mb-6 font-sans text-zinc-50'>Library Board</a>
                        <a href='#' className='hover:underline text-xl mb-6 font-sans text-zinc-50'>Policies</a>
                        <a href='#' className='hover:underline text-xl mb-6 font-sans text-zinc-50'>Jobs and volunteer</a>
                        <a href='#' className='hover:underline text-xl mb-6 font-sans text-zinc-50'>Donate</a>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-sans mb-2 text-slate-300'>Social</h1>
                        <a href="#">
                            <div className='flex items-center rounded-sm gap-x-2 mb-6'>
                                <BsTwitter style={{background:"white" , borderRadius:"0.125rem" }} size={24} color='black'/>
                                <p className='text-2xl font-sans hover:underline'>Twitter</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='flex items-center rounded-sm gap-x-2 mb-6'>
                                <BsYoutube style={{background:"white" , borderRadius:"0.125rem" }} size={24} color='black'/>
                                <p className='text-2xl font-sans hover:underline'>YouTube</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='flex items-center rounded-sm gap-x-2 mb-6'>
                                <FaFacebookF style={{background:"white" , borderRadius:"0.125rem"}} size={24} color='black'/>
                                <p className='text-2xl font-sans hover:underline'>Facebook</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='flex items-center rounded-sm gap-x-2 mb-6'>
                                <AiOutlineInstagram style={{background:"white" , borderRadius:"0.125rem" }} size={24} color='black'/>
                                <p className='text-2xl font-sans hover:underline'>Instagram</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="flex justify-center">
                    <hr className=" mb-6 mt-20 w-full border-1 opacity-50  border-gray-500"/>
                </div>
                <div className="flex flex-row justify-around items-center">
                    <div>
                        <span className="text-md text-slate-300 font-sans">&copy; City of Mississauga 2019 - 2023</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <a href="#" className="mr-4 text-lg font-sans hover:underline">Privacy and terms</a>
                        <span className="border-l border-gray-400 h-4 inline-block"></span>
                        <a href="#" className="ml-4 font-sans  text-lg hover:underline">Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer