"use client";
import { FaFlutter, FaReact } from "react-icons/fa6";
import Image from "next/image";

const l = [
  {"id": 1, "image": '/banar/c3.webp'},
  {"id": 2, "image": '/banar/c2.webp'},
  {"id": 3, "image": '/banar/c3.webp'},
  {"id": 4, "image": '/banar/c4.webp'},
  {"id": 5, "image": '/banar/c5.webp'},
  {"id": 6, "image": '/banar/c6.webp'}
]
const Hero = () => {

  return (
    <section className="bg-primary md:bg-hero md:bg-no-repeat md:bg-cover md:bg-bottom">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-success md:text-5xl lg:text-6xl" data-aos="zoom-in">حلول رقمية مبتكرة</h1>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg">
              <div className="flex flex-wrap justify-center items-center mt-12 text-success sm:justify-center">
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block">Flutter</span>
                    <FaFlutter className="w-20 h-20"/>
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block">ReactJs</span>
                    <FaReact className="w-20 h-20"/>
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block">Odoo</span>
                    <Image src="/banar/erp.png" width={80} height={20} alt="..." />
                  </div>
              </div>
              <div className="flex flex-wrap justify-center items-center mt-12 text-success sm:justify-center">
                  <div className="flex items-center mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo15.png" width={90} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo16.png" width={90} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo17.png" width={90} height={20} alt="..." />
                  </div>
              </div>
          </div> 
      </div>
      <div className="mx-20 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1" data-aos="fade-down">
        {l?.map((l) => ( 
            <div key={l.id} className="flex justify-center mt-5 mb-10 md:mt-16 md:mb-32">
              <Image
                src={l.image}
                width={150}
                height={150}
                alt="Picture"
              />
            </div>
        ))}
      </div>
    </section>
    // <section ref={sectionRef} classNameName="hero bg-cover bg-center flex flex-col items-center relative">
    //   <div classNameName="py-10 mx-auto text-center w-full">
    //     <div classNameName="hidden lg:grid lg:grid-cols-3  lg:absolute w-full">
    //       <div classNameName={`flex justify-center ${
    //         isVisible ? "visible animate-fadeInx opacity-100" : "animate-slideIntLeft opacity-0 invisible"
    //       }`}>
    //         <img src="/image_hero1.svg" alt="image hero" classNameName="w-20 lg:w-60 xl:w-96 lg:-mt-20" />
    //       </div>
    //       <div classNameName={`flex justify-center left-40 items-start ${
    //         isVisible ? "animate-fadeInx visible opacity-100" : "animate-fadeOutx opacity-0 invisible"
    //       }`}>
    //         <img src="/image_hero2.svg" alt="image hero" classNameName="w-20 lg:w-36 xl:w-36 lg:mt-32" />
    //       </div>
    //       <div classNameName={`flex justify-start absolute left-40 items-end ${
    //         isVisible ? "animate-fadeOutx visible opacity-100" : "invisible"
    //       }`}>
    //         <img src="/image_hero3.svg" alt="image hero" classNameName="w-20" />
    //       </div>
    //     </div>
    //     <div
    //       classNameName={`transition-all duration-500 my-40 ${
    //         isVisible ? "animate-fadeIn visible opacity-100" : "animate-fadeOut opacity-0 invisible"
    //       }`}
    //     >
    //       <img src="/masa.png" alt="hero image" classNameName="mx-auto w-40 md:w-52 lg:w-72 xl:w-80" />
    //     </div>
    //     <div classNameName="hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:absolute w-full bottom-0">
    //       <div classNameName="flex justify-center">
    //       </div>
    //       <div classNameName={`flex justify-end absolute left-96 -top-44 items-end pl-16  mt-2 ${
    //         isVisible ? "animate-fadeOutx visible opacity-100" : "invisible"
    //       }`}>
    //         <img src="/image_hero5.svg" alt="image hero" classNameName="w-26 -mt-64 lg:ml-96 " />
    //       </div>
    //       <div  classNameName={`flex justify-start absolute left-40 -top-20 items-end ${
    //         isVisible ? "animate-fadeOutx visible opacity-100" : "invisible"
    //       }`}>
    //         <img src="/image_hero4.svg" alt="image hero" classNameName="w-20 lg:w-36 xl:w-36 -mt-12 lg:mr-12" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Hero