import React from 'react'

const Services = () => {

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni distinctio quod maxime ducimus ipsa corporis quos impedit repudiandae minus fugiat corrupti atque, magnam minima quis nesciunt culpa cum veniam!"
    const gamification = 'Level up your studies with Noot Note! Our AI-powered quiz generator turns your notes into engaging challenges. Watch your personal virtual pet grow as you explore, quiz, upload, and review. Learning should be fun!'
    const upload = 'Share your knowledge, grow together. Upload your study materials and join a vibrant community of learners. Peer reviews and lively discussions ensure top-quality content that benefits everyone.'
    const collaborate = "Join a thriving educational ecosystem where connections are made and ideas flourish. With Noot Note, you're not just studying – you're part of a movement that's revolutionizing the way we learn and grow together."

  return (
    <main className='bg-white text-white w-full pt-20 gap-5 items-center flex flex-wrap justify-center font-poppins'>
        <section className='w-80 h-96 aspect-square bg-red2 rounded-xl text-center p-5 flex flex-col gap-3 '>
            <p className='font-bold text-2xl'>PLAY</p>
            <p className='text-justify text-lg md:text-xl font-medium'>{gamification}</p>
        </section>
        <section className='w-80 aspect-square bg-blue2 rounded-xl text-center p-5 flex flex-col gap-3'>
            <p className='font-bold text-2xl'>UPLOAD</p>
            <p className='text-justify text-lg md:text-xl font-medium'>{upload}</p>
        </section>
        <section className='w-80 h-96 aspect-square bg-yellow2 rounded-xl text-center p-5 flex flex-col gap-3'>
            <p className='font-bold text-2xl'>COLLABORATE</p>
            <p className='text-justify text-lg md:text-xl font-medium'>{collaborate}</p>
        </section>
    </main>
  )
}

export default Services;