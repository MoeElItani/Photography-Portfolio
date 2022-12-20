import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[15vh] bg-[#1F2022] flex flex-col justify-center content-center text-center text-white'>
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