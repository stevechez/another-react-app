import React from 'react'

function Instagram() {
  return (
    <div className='max-w-2xl mx-auto p-8'>
      <h2 className='sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase'></h2>
      <p className='text-5xl leading-n font-extrabold text-gray-900 mb-8'>Tailwind Stories</p>
      <ul className='flex space-x-6'>
        <li className='flex flex-col items-center space-y-2'>
          <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1'>
<a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-24 w-24 rounded-full' src='https://placekitten.com/200/203' alt='kittie' />
          </a>
          <button className='absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700'>+</button>
          </div>
          <a href='#'>you</a>
        </li>
        <li className='flex flex-col items-center space-y-2'>
          <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1'>
            <a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-24 w-24 rounded-full' src='https://placekitten.com/200/202' alt='kittie' />
          </a>
          
          </div>
          <a href='#'>snuggles22</a>
        </li>
        <li className='flex flex-col items-center space-y-2'>
          <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1'>
<a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-24 w-24 rounded-full' src='https://placekitten.com/200/200' alt='kittie' />
          </a>
          
          </div>
          <a href='#'>mrniceguy</a>
        </li>
        <li className='flex flex-col items-center space-y-2'>
          <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1'>
<a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-24 w-24 rounded-full' src='https://placekitten.com/200/201' alt='kittie' />
          </a>
          
          </div>
          <a href='#'>cat24</a>
        </li>

      </ul>
    </div>
  )
}

export default Instagram
