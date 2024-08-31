import React from 'react'

const About = () => {
  const about = 'Noot Note is a collaborative note-sharing platform that boosts leaming through peer reviews, discussions, and AI-generated quizzes. Users earn experience points for their virtual pets by engaging in these activities. Noot Note offers an interactive and immersive educational experience, fostering a dynamic and supportive learning community.'
  
  return (
    <main>
        <section className='text-lg md:text-xl max-w-[800px] text-justify md:text-center mx-5 tracking-tight font-semibold w-auto'>
          <p>{about}</p>
        </section>
    </main>
  )
}

export default About