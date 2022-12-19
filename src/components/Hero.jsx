import jessieIMG from '../assets/image1.png'

const Hero = () => {
   return (
      <section
         className='relative h-[100vh] bg-[#1F2022] flex flex-col md:flex-row bg-center md:bg-left-top  md:bg-contain bg-cover bg-no-repeat'
         style={{ backgroundPosition:'center', backgroundImage: `url(${jessieIMG})` }}
      >
         <div className='h-[100vh] flex-1'>
            <h3 className='absolute z-10 top-[20vh] left-[27vh] md:top-[45vh] md:left-[5rem] font-extrabold text-[24px] text-[#00ADB5] tracking-[0.75px]'>
               <div className='absolute -top-[7.5px] -left-[11.25px] -z-10 bg-[#eee] w-[20px] h-[20px] rounded-full' />
               Pro <br /> photographer
            </h3>

         <h3 className='absolute z-10 top-[70vh] left-[19vh] md:top-[78vh] md:left-[5rem] text-[#eee] text-[24px] font-extrabold flex content-center justify-center gap-2'>
           <div className='w-[20px] h-[3px] bg-[#00ADB5] mt-3'/>
               Let's take your
               <br />
               photographs to next level
            </h3>
         </div>
         <div className='flex-1 h-[100vh] '></div>
      </section>
   )
}

export default Hero
