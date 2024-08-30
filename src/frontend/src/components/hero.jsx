import React from 'react';

const Hero = () => {
  const text = "Noot Note";
  
  const colors = ['#67c1ac', '#e8bf62', '#e0696d'];
  const hoverColors = ['#e0696d', '#67c1ac', '#e8bf62'];

  return (
    <main className='flex items-center justify-center flex-col font-poppins p-20 pt-32 md:pt-40 w-full bg-white'>
      <section className='font-poppins font-extrabold text-center text-8xl lg:text-9xl text-purple2 cursor-default'>
        {text.split("").map((char, index) => (
          <span 
            key={index} 
            className="transition-colors duration-200"
            style={{ 
              color: colors[index % colors.length], 
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.color = hoverColors[index % hoverColors.length]}
            onMouseLeave={(e) => e.target.style.color = colors[index % colors.length]} 
          >
            {char}
          </span>
        ))}
      </section>
      <section className='mt-3'>
        <p className='font-semibold text-center text-sm md:text-xl'>A note sharing community</p>
      </section>
    </main>
  );
}

export default Hero;
