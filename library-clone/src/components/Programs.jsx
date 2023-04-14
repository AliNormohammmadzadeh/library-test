import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Programs = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8 ">
        <div className='flex flex-col justify-center items-center border-l-4 border-green-900'>
            <h1 className=" font-serif items-center ml-4 text-3xl mb-4 text-black mt-4">Programs</h1>
        </div>
        <div className='flex justify-center items-center '>
            <div className="flex flex-row gap-x-10 relative mt-10 ">
                <a href="#">
                    <div className="relative flex flex-col items-center hover:scale-110 hover:shadow-2xl transition duration-300">
                        <img src="image2.jpg" alt="Avatar" className="object-cover w-width_3 h-h_img1 rounded-lg hover:shadow-2xl" />
                        <div className="top-44 absolute  h-44 py-2.5 bottom-0  border active:border-blue-900 shadow hover:shadow-2xl rounded-md w-11/12  border-gray-300 bg-slate-100 text-black text-xs text-left leading-3">
                            <h1 className=' font-sans font-bold text-sky-900 text-lg p-3 text-center'>Author Talks</h1>
                            <p className='font-sans text-gray-950 load text-base ml-5 '>Meet a wide range of talented writers as they share their experiences and written works. April 19: Madhur Anand</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="relative flex flex-col items-center hover:scale-110 hover:shadow-2xl transition duration-300">
                        <img src="image1.jpg" alt="Avatar" className="object-cover w-width_3 h-h_img1 rounded-lg hover:shadow-2xl" />
                        <div className="top-44 absolute  h-44 py-2.5 bottom-0  border active:border-blue-900 shadow hover:shadow-2xl rounded-md w-11/12  border-gray-300 bg-slate-100 text-black text-xs text-left leading-3">
                            <h1 className=' font-sans font-bold text-sky-900 text-lg p-3 text-center'>Peel Libraries Pride Book Club</h1>
                            <p className='font-sans text-gray-950 load text-base ml-5 '>All are welcome to join us for this virtual book club featuring titles written by 2SLGBTQ+ authors.(Fuck LGBTQ)</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="relative flex flex-col items-center hover:scale-110 hover:shadow-2xl transition duration-300">
                        <img src="image3.jpg" alt="Avatar" className="object-cover w-width_3 h-h_img1 rounded-lg hover:shadow-2xl" />
                        <div className="top-44 absolute  h-44 py-2.5 bottom-0  border active:border-blue-900 shadow hover:shadow-2xl rounded-md w-11/12  border-gray-300 bg-slate-100 text-black text-xs text-left leading-3">
                            <h1 className=' font-sans font-bold text-sky-900 text-lg p-3 text-center'>One eRead Canada</h1>
                            <p className='font-sans text-gray-950 load text-base ml-5 '>A digital, bilingual, book club connecting readers across the country. Get unlimited ebook access to Tatouine by Jean-Christophe Réhel.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className=' mt-40 flex items-center justify-center'>
            <a className="flex justify-between items-center" href='#'>
                <div className=" text-black h-12 p-4 flex flex-row items-center gap-2 bg-slate-50 border-t rounded-md hover:scale-105 shadow-lg shadow-slate-600/50 hover:shadow-slate-800/50 transition duration-300">
                    <h2 className=' text-xl text-sky-700 hover:text-sky-900'>View more programs</h2>
                    <MdKeyboardArrowRight color='#2c5282' className='ml-2' size={30}  />
                </div>
            </a>
        </div>
    </div>
  )
}

export default Programs