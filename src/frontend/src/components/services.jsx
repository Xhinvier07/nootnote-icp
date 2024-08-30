import React from 'react'

const Services = () => {

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni distinctio quod maxime ducimus ipsa corporis quos impedit repudiandae minus fugiat corrupti atque, magnam minima quis nesciunt culpa cum veniam!"

  return (
    <main className='bg-white text-white w-full pt-20 gap-5 items-center flex flex-wrap justify-center font-poppins'>
        <section className='w-80 aspect-square bg-red2 rounded-xl text-center p-5 flex flex-col gap-3 '>
            <p className='font-bold text-2xl'>LOREM</p>
            <p className='text-justify text-lg font-medium'>{lorem}</p>
        </section>
        <section className='w-80 aspect-square bg-blue2 rounded-xl text-center p-5 flex flex-col gap-3'>
            <p className='font-bold text-2xl'>LOREM</p>
            <p className='text-justify text-lg font-medium'>{lorem}</p>
        </section>
        <section className='w-80 aspect-square bg-yellow2 rounded-xl text-center p-5 flex flex-col gap-3'>
            <p className='font-bold text-2xl'>LOREM</p>
            <p className='text-justify text-lg font-medium'>{lorem}</p>
        </section>
    </main>
  )
}

export default Services;