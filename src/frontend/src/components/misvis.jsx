import React from 'react'

const MisVIs = () => {

  const mission = 'To empower learners by creating a collaborative and engaging platform that fosters knowledge sharing, interactive learning, and community growth through innovative technology.'
  const vision = 'To be the leading educational community where individuals can connect, learn, and grow together, transforming the way knowledge is shared and valued in a secure and decentralized environment.'

  return (
        <main className='bg-white text-white w-full pt-20 items-center flex flex-wrap justify-center font-poppins pb-10'>
            <section className='w-full h-64 aspect-square bg-red2 rounded-t-xl text-center p-7 md:p-10 md:px-36 flex flex-col gap-3'>
                <p className='font-bold text-2xl md:text-4xl'>MISSION</p>
                <p className='text-justify text-base md:text-lg font-medium'>{mission}</p>
            </section>
            <section className='w-full h-64 aspect-square bg-blue2 rounded-b-xl text-center p-7 md:p-10 md:px-36 flex flex-col gap-3'>
                <p className='font-bold text-2xl md:text-4xl'>VISION</p>
                <p className='text-justify text-base md:text-lg font-medium'>{vision}</p>
            </section>
    </main>
  )
}

export default MisVIs