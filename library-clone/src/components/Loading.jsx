import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20'>
      <h1 className=' text-2xl text-gray-900'>Loading...</h1>
      <ReactLoading width={140} type='balls' color='#A6E9F9' />
    </div>
  )
}

export default Loading