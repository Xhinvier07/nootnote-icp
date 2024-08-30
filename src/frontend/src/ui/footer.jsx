import React, { useState } from 'react'

const icons = [
    { icon: 'devicon-facebook-plain', coloredIcon: 'devicon-facebook-plain colored'},
    { icon: 'devicon-github-original', coloredIcon: 'devicon-github-original colored'},
    { icon: 'devicon-twitter-original', coloredIcon: 'devicon-twitter-original colored'}
]

const Footer = () => {
    const [color, setColor] = useState(null);

  return (
    <footer className='bg-yellow2 w-full p-10 h-60 rounded-t-xl font-poppins flex flex-col gap-3 justify-center items-center'>
        <aside className='text-white2 flex flex-col items-center'>
            <p className='font-bold text-5xl'>NootNote</p>
            <p className='font-semibold'>A note sharing community</p>
        </aside>
        <aside className='text-white2 flex gap-3 text-5xl'>
            { icons.map((skill, index) => (
                <div key={index}                         
                onMouseEnter={() => setColor(skill.icon)}
                onMouseLeave={() => setColor(null)}>
                    <i className={`${color === skill.icon ? skill.coloredIcon : skill.icon} transition-colors`}></i>
                </div>
            ))}
        </aside>
    </footer>
  )
}

export default Footer