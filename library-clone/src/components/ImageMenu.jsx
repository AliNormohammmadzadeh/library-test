import React from 'react'

const ImageMenu = () => {
  return (
    <div className='relative flex flex-row items-center justify-start w-full h-big'>
        <img className="absolute left-0 w-full h-custom object-cover"  src="logo.jpg" alt="Image"></img>
        <div className="absolute top-24 right-1/4 w-1/4 text-center">
            <div className="relative flex flex-col z-9 p-4 bg-brown-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100" >
                <h2 className="text-2xl font-bold mt-0 py-2" style={{ backgroundColor: "#000" }}>Top Request</h2>
                <div className="mt-6 border-b border-gray-400"></div>
                <a className='mt-6 block text-sky-500 hover:text-sky-600 transition-colors duration-300' href="#">Account login</a>
                <div className="mt-6 border-b border-gray-400"></div>
                <a className='mt-6 block text-sky-500  hover:text-sky-600 transition-colors duration-300' href="#">New printing system</a>
                <div className="mt-6 border-b border-gray-400"></div>
                <a className='mt-6 block text-sky-500  hover:text-sky-600 transition-colors duration-300' href="#">Get a library card</a>
                <div className="mt-6 border-b border-gray-400"></div>
                <a className='mt-6 block text-sky-500  hover:text-sky-600 transition-colors duration-300' href="#">eNews signup</a>
                <div className="mt-6 border-b border-gray-400"></div>
                <a className='mt-6 block text-sky-500 hover:text-sky-600  transition-colors duration-300' href="#">New Year, New Reads</a>
                </div>
        </div>
    </div>
  )
}

export default ImageMenu