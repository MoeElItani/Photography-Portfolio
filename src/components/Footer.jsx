import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-[65vh] md:pt-0 h-[75vh] md:h-[15vh] bg-[#1F2022] flex flex-col justify-center content-center text-center text-white z-50'>
            <p className='font-semibold my-[0.5rem]'>
               &copy; 2022 Mohammad El Itani | All Rights
               Reserved{' '}
            </p>
            <p className='my-[0.25rem]'>
               Visit my {' '}
               <a
                  href='https://portfolio-moeelitani.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                  className='underline underline-offset-1'
               >
                 web portfolio
               </a>
            </p>
         </footer>
  )
}

export default Footer