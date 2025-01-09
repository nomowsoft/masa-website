"use client";
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
    <section className="bg- bg-customer bg-cover bg-bottom">
      <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:py-6 lg:px-12">
          <h1 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-none text-success" data-aos="zoom-in">حلول رقمية مبتكرة</h1>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg">
              <div className="flex flex-wrap justify-center items-center mt-6 text-success sm:justify-center">
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block text-secondary">Flutter</span>
                    <Image src="/banar/flutter-svgrepo-com.svg" width={60} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <span className="text-3xl hidden md:block text-warning">ReactJs</span>
                    <Image src="/banar/react-svgrepo-com.svg" width={80} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mx-2" data-aos="fade-up">
                    <Image src="/banar/Odoo_logo.svg" width={150} height={20} alt="..." />
                  </div>
              </div>
              <div className="flex flex-wrap justify-center items-center md:mt-6 text-success sm:justify-center md:absolute md:right-20 md:top-20">
                  <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo14.png" width={90} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo15.png" width={90} height={20} alt="..." />
                  </div>
              </div>
              <div className="flex flex-wrap justify-center items-center md:mt-6 text-success sm:justify-center md:absolute md:left-20 md:top-20">
                  <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo16.png" width={90} height={20} alt="..." />
                  </div>
                  <div className="flex items-center mt-2 mx-5" data-aos="fade-down">
                    <Image src="/banar/odoo17.png" width={90} height={20} alt="..." />
                  </div>
              </div>
          </div> 
          <div className="px-4 mx-auto text-center md:mb-32">
            <div className="flex flex-wrap justify-center items-center mt-10 text-success sm:justify-center">
              {l?.map((l) => ( 
                  <div key={l.id} className="flex items-center mx-2" data-aos="fade-up">
                    <Image
                    className="h-20"
                      src={l.image}
                      width={150}
                      height={150}
                      alt="Picture"
                    />
                  </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero