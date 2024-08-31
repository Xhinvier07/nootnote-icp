import React, { useState } from 'react'
import logo from '../assets/logo.png';

const icons = [
    { icon: 'devicon-facebook-plain', coloredIcon: 'devicon-facebook-plain colored', link: 'https://www.facebook.com/'},
    { icon: 'devicon-github-original', coloredIcon: 'devicon-github-original colored', link: 'https://github.com/julsCadenas/petco'},
    { icon: 'devicon-twitter-original', coloredIcon: 'devicon-twitter-original colored', link: 'https://x.com/'}
]

const Footer = () => {
    const [color, setColor] = useState(null);
    const email = 'nootnote@gmail.com'

  return (
    <footer className='bg-yellow2 w-full p-10 h-80 rounded-t-xl font-poppins flex flex-col gap-3 justify-center items-center'>
        <section className='text-white2 flex flex-col items-center'>
            <p className='font-bold text-5xl'>NootNote</p>
            <p className='font-semibold'>A note sharing community</p>
        </section>
        <section className='text-white2 font-semibold cursor-pointer'>
            <p title='click to copy' >{email}</p>
        </section>
        <section className='text-white2 flex gap-3 text-5xl'>
            { icons.map((skill, index) => (
                <div key={index} onMouseEnter={() => setColor(skill.icon)} onMouseLeave={() => setColor(null)}>
                    <a href={skill.link} target='_blank' rel='noreferrer'>
                        <i className={`${color === skill.icon ? skill.coloredIcon : skill.icon} transition-colors`}></i>
                    </a>
                </div>
            ))}
        </section>
        <section className="flex justify-between items-center border-t-2 border-white2 text-white2 pt-4">
          <p className="text-sm">© 2024 NootNote. All rights reserved.</p>
        </section>
    </footer>
  )
}

export default Footer