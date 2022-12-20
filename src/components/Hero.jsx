import jessieIMG from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

const Hero = () => {
   return (
      <section
         className='flex md:flex-row flex-col relative h-[100vh] bg-[#1F2022] bg-center md:bg-left-top  md:bg-contain bg-cover bg-no-repeat'
         style={{
            backgroundPosition: 'center',
            backgroundImage: `url(${jessieIMG})`,
         }}
      >
         <div className='flex-1'>
            <h3 className='absolute z-10 top-[20vh] left-[23vh] md:top-[45vh] md:left-[5rem] font-extrabold text-[24px] text-[#00ADB5] tracking-[0.75px]'>
               <div className='absolute -top-[7.5px] -left-[11.25px] -z-10 bg-[#eee] w-[20px] h-[20px] rounded-full' />
               Pro <br /> photographer
            </h3>

            <h3 className='absolute z-10 top-[70vh] left-[19vh] md:top-[78vh] md:left-[5rem] text-[#eee] text-[24px] font-extrabold flex content-center justify-center gap-2'>
               <div className='w-[20px] h-[3px] bg-[#00ADB5] mt-3' />
               Let's take your
               <br />
               photographs to next level
            </h3>
         </div>
         <div className='flex-1 h-[100vh] mt-[100vh] pt-[2rem] bg-inherit md:bg-transparent md:pt-[7.5rem] md:mt-0 md:pl-[20rem] text-center md:text-left flex flex-col justify-start'>
            <p className='text-[#eee] w-[100%] text-[18px] font-medium'>
               Hello there, Nice to meet you. I am
            </p>
            <h3 className='text-[#00ADB5]  text-[80px] md:text-[100px] font-extrabold '>
               Jessie
            </h3>
            <p className='text-[#aaa] md:text-[16px] w-[85%] md:w-[80%]'>
               Amet minim mollit non deserunt ullamco est
               sit aliqua dolor do amet sint. Velit officia
               consequat duis enim velit mollit.
               Exercitation veniam consequat sunt nostrud
               amet. Amet minim mollit non deserunt ullamco
               est sit aliqua dolor do amet sint.
            </p>

            <div>
               <div className='flex space-x-[51.5%] pt-[4rem]'>
                  <p className='font-bold text-[24px] text-[#eee]'>
                     Latest shots
                  </p>
                  <p className='font-sans font-semibold text-[14px] text-[#00ADB5]'>
                     View all
                  </p>
               </div>
               <div className='flex overflow-hidden space-x-4'>
                  <img
                     src={image2}
                     width='220px'
                     alt='image1'
                  />
                  <img
                     src={image3}
                     width='220px'
                     alt='image2'
                  />
                  <img
                     src={image4}
                     width='220px'
                     alt='image3'
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
