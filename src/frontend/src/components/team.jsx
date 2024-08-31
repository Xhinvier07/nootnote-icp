import React from 'react'
// import o9 from '../assets/o9.png';
import juls from '../assets/o9/juls.jpg';
import xtian from '../assets/o9/xtian.jpg';
import jansen from '../assets/o9/jansen.jpg';
import xten from '../assets/o9/xten.jpg';
import lyka from '../assets/o9/lyka.jpg';

const pics = [ 
    {pic: juls, name: 'Julian Cadenas', title: 'Developer'},
    {pic: xtian, name: 'Christian Javier', title: 'Project Manager'},
    {pic: jansen, name: 'Jansen Moral', title: 'Developer'},
    {pic: xten, name: 'Cristen Tolentino', title: 'UI/UX Designer, CEO'},
    {pic: lyka, name: 'Lyka Villaflores', title: 'Chief Marketing Officer'},
];

const Team = () => {
  return (
    <main className='flex flex-col items-center justify-center font-poppins max-w-5xl pb-10'>
        <section className='text-4xl md:text-6xl font-bold flex gap-3'>
            <p className='text-red2'>MEET</p>
            <p className='text-blue2'>O9</p>
        </section>
        <hr className='border-b-blue2 border-b-4 w-1/2 md:w-1/3' />
        <section className='flex flex-wrap justify-center items-center'>
        { pics.map((pic, index) => (
            <figure className='max-w-60 md:max-w-72 p-5' key={index}>
                <img src={pic.pic} alt="o9" className='w-full rounded-full border-8 border-yellow2' />
                <section className='mt-3 flex flex-col items-center justify-center'>
                    <p className='font-bold'>{pic.name}</p>
                    <p className='font-semibold text-red2' >{pic.title}</p>
                </section>
            </figure>
        ))}
        </section>
    </main>
  )
}

export default Team