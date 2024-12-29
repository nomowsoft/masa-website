"use client";

import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && !isVisible);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="hero bg-cover bg-center flex flex-col items-center relative">
      <div className="py-10 mx-auto text-center w-full">
        <div className="hidden lg:grid lg:grid-cols-3  lg:absolute w-full">
          <div className={`flex justify-center ${
            isVisible ? "visible animate-fadeInx opacity-100" : "animate-slideIntLeft opacity-0 invisible"
          }`}>
            <img src="/image_hero1.svg" alt="image hero" className="w-20 lg:w-60 xl:w-96 lg:-mt-20" />
          </div>
          <div className={`flex justify-center left-40 items-start ${
            isVisible ? "animate-fadeInx visible opacity-100" : "animate-fadeOutx opacity-0 invisible"
          }`}>
            <img src="/image_hero2.svg" alt="image hero" className="w-20 lg:w-36 xl:w-36 lg:mt-32" />
          </div>
          <div className={`flex justify-start absolute left-40 items-end ${
            isVisible ? "animate-fadeOutx visible opacity-100" : "invisible"
          }`}>
            <img src="/image_hero3.svg" alt="image hero" className="w-20" />
          </div>
        </div>
        <div
          className={`transition-all duration-500 my-40 ${
            isVisible ? "animate-fadeIn visible opacity-100" : "animate-fadeOut opacity-0 invisible"
          }`}
        >
          <img src="/masa.png" alt="hero image" className="mx-auto w-40 md:w-52 lg:w-72 xl:w-80" />
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:absolute w-full bottom-0">
          <div className="flex justify-center">
          </div>
          <div className={`flex justify-end absolute left-96 -top-44 items-end pl-16  mt-2 ${
            isVisible ? "animate-fadeOutx visible opacity-100" : "invisible"
          }`}>
            <img src="/image_hero5.svg" alt="image hero" className="w-26 -mt-64 lg:ml-96 " />
          </div>
          <div  className={`flex justify-start absolute left-40 -top-20 items-end ${
            isVisible ? "animate-fadeOutx visible opacity-100" : "invisible"
          }`}>
            <img src="/image_hero4.svg" alt="image hero" className="w-20 lg:w-36 xl:w-36 -mt-12 lg:mr-12" />
          </div>
        </div>
      </div>
    </section>
  

  )
}

export default Hero