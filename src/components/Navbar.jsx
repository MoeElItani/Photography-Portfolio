import React, { useState } from 'react'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   return (
      <div className='bg-[#1F2022]'>
         <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
               <a
                  href='/'
                  aria-label='Company'
                  title='Company'
                  className='inline-flex items-center'
               >
                  <span className='ml-2 text-xl font-bold tracking-wide text-[#eee] uppercase'>
                     Jessie
                  </span>
               </a>
               <ul className='items-center hidden space-x-8 lg:flex'>
                  <li>
                     <a
                        href='/portfolio'
                        aria-label='My portfolio'
                        title='My portfolio'
                        className='font-medium tracking-wide text-[#00ADB5] hover:text-[#00ADB5] transition-colors duration-200 hover:text-teal-accent-400'
                     >
                        Portfolio
                     </a>
                  </li>
                  <li>
                     <a
                        href='/blog'
                        aria-label='My blog'
                        title='My blog'
                        className='font-medium tracking-wide text-[#eee] hover:text-[#00ADB5] transition-colors duration-200 hover:text-teal-accent-400'
                     >
                        Blog
                     </a>
                  </li>
                  <li>
                     <a
                        href='/testimonials'
                        aria-label='Client reviews'
                        title='Client reviews'
                        className='font-medium tracking-wide text-[#eee] hover:text-[#00ADB5] transition-colors duration-200 hover:text-teal-accent-400'
                     >
                        Client reviews
                     </a>
                  </li>
                  <li>
                     <a
                        href='/contact'
                        aria-label='Contact me'
                        title='Contact me'
                        className='font-medium tracking-wide text-[#eee] hover:text-[#00ADB5] transition-colors duration-200 hover:text-teal-accent-400'
                     >
                        Contact me
                     </a>
                  </li>
               </ul>
               <ul className='items-center hidden space-x-8 lg:flex'>
                  <li>
                     <a
                        href='/call'
                        className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-[#1F2022] transition duration-200 rounded shadow-md bg-[#eee] hover:bg-[#ccc] focus:shadow-outline focus:outline-none'
                        aria-label='Schedule a call'
                        title='Schedule a call'
                     >
                        Schedule a call
                     </a>
                  </li>
               </ul>
               <div className='lg:hidden p-[1rem]'>
                  <button
                     aria-label='Open Menu'
                     title='Open Menu'
                     className='p-2 absolute right-0 -top-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
                     onClick={() =>
                        setIsMenuOpen(!isMenuOpen)
                     }
                  >
                     <svg
                        className='w-5 text-[#eee]'
                        viewBox='0 0 24 24'
                     >
                        <path
                           fill='currentColor'
                           d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                        />
                        <path
                           fill='currentColor'
                           d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                        />
                        <path
                           fill='currentColor'
                           d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                        />
                     </svg>
                  </button>
                  {isMenuOpen && (
                     <div className='z-50 absolute top-9 left-0 w-full'>
                        <div className='p-5 bg-[#1F2022] border rounded shadow-lg'>
                           <div className='flex items-center justify-between mb-4'></div>
                           <nav>
                              <ul className='space-y-5 '>
                                 <li>
                                    <a
                                       href='/'
                                       aria-label='My portfolio'
                                       title='My portfolio'
                                       className='font-medium tracking-wide text-[#00ADB5] transition-colors duration-200 active:text-[#00ADB5] md:hover:text-[#00ADB5]'
                                    >
                                       Portfolio
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href='/blog'
                                       aria-label='My blog'
                                       title='My blog'
                                       className='font-medium tracking-wide text-[#eee] transition-colors duration-200 md:hover:text-[#00ADB5] active:text-[#00ADB5]'
                                    >
                                       Blog
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href='/testimonials'
                                       aria-label='Client reviews'
                                       title='Client reviews'
                                       className='font-medium tracking-wide text-[#eee] transition-colors duration-200 md:hover:text-[#00ADB5] active:text-[#00ADB5]'
                                    >
                                       Client reviews
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href='/contact'
                                       aria-label='Contact me'
                                       title='Contact me'
                                       className='font-medium tracking-wide text-[#eee] transition-colors duration-200 md:hover:text-[#00ADB5] active:text-[#00ADB5]'
                                    >
                                       Contact me
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href='/call'
                                       className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-[#1F2022] bg-[#eee] md:hover:bg-[#ccc] active:bg-[#ccc] transition duration-200 rounded shadow-md'
                                       aria-label='Schedule a call'
                                       title='Schedule a call'
                                    >
                                       Schedule a call
                                    </a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar
