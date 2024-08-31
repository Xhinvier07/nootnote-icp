import React from 'react'
import logo from '../assets/logo.png'

const statistics = [
    { number: '1000+', title: 'Active Learners' },
    { number: '7000+', title: 'Available Learning Materials' },
    { number: '500+', title: 'Daily Active Peer Reviewers' },
    { number: '5000+', title: 'Quizzes' },
]

const Stats = () => {
    const text = "Noot Note";
    const colors = ['#67c1ac', '#e8bf62', '#e0696d'];


  return (
    <main className='font-poppins h-full py-10 pb-28 flex items-center flex-col'>
        <section className='flex md:flex-row pb-8 text-4xl md:text-6xl font-extrabold text-red2 items-center justify-center'>
            <p className='pr-3'>Why</p>
        {text.split("").map((char, index) => (
          <span 
            key={index} 
            style={{ 
              color: colors[index % colors.length], 
            }}
          >
            {char}
          </span>
        ))}
            <p>?</p>
        </section>
        <hr className='border-b-blue2 border-b-4 w-1/2 md:w-1/3 mb-10' />
        <section className='flex flex-wrap gap-10 justify-center'>
            {statistics.map((stat, index) => (
                <aside key={index} className='w-60 p-5 border-4 border-red2 rounded-xl flex flex-col items-center font-semibold text-center'>
                    <p className='border-b-red2 pb-3 border-b-4 text-5xl font-bold'>{stat.number}</p>
                    <p className='text-2xl pt-3'>{stat.title}</p>
                </aside>
            ))}
        </section>
    </main>
  )
}

export default Stats
