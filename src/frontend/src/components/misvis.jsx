import React from 'react'

const MisVIs = () => {

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni distinctio quod maxime ducimus ipsa corporis quos impedit repudiandae minus fugiat corrupti atque, magnam minima quis nesciunt culpa cum veniam!"

  return (
        <main className='bg-white text-white w-full pt-20 items-center flex flex-wrap justify-center font-poppins pb-10'>
            <section className='w-full h-80 aspect-square bg-red2 rounded-t-xl text-center p-10 md:px-36 flex flex-col gap-3'>
                <p className='font-bold text-2xl md:text-5xl'>MISSION</p>
                <p className='text-justify text-base md:text-lg font-medium'>{lorem}</p>
            </section>
            <section className='w-full h-80 aspect-square bg-blue2 rounded-b-xl text-center p-10 md:px-36 flex flex-col gap-3 '>
                <p className='font-bold text-2xl md:text-5xl'>VISION</p>
                <p className='text-justify text-base md:text-lg font-medium'>{lorem}</p>
            </section>
    </main>
  )
}

export default MisVIs