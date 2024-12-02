import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300 shadow-2xl'>
            <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.u_roXXqTeqpj6YkaZ_RMGQHaFj?w=244&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          </div>
          <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>Amazone Basics.</h2>
          <p className='text-xs mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.</p>
          </div>
          
      </div>
    </div>
  );
}

export default Card

