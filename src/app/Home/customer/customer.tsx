"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const l = [
  {"id": 1, "image": '/customer/Groupe1.png'},
  {"id": 2, "image": '/customer/Groupe2.png'},
  {"id": 3, "image": '/customer/Groupe3.png'},
  {"id": 4, "image": '/customer/Groupe4.png'},
  {"id": 5, "image": '/customer/Groupe5.png'},
  {"id": 6, "image": '/customer/Groupe6.png'},
  {"id": 7, "image": '/customer/Groupe7.png'},
  {"id": 8, "image": '/customer/Groupe8.png'},
  {"id": 9, "image": '/customer/Groupe9.png'},
  {"id": 10, "image": '/customer/Groupe10.png'},
  {"id": 11, "image": '/customer/Groupe11.png'},
  {"id": 12, "image": '/customer/Groupe12.png'},
  {"id": 13, "image": '/customer/Groupe13.png'},
  {"id": 14, "image": '/customer/Groupe14.png'},
]


const Customer = () => {
  return (
    <section className="md:bg-customer md:bg-cover md:bg-bottom">
      <div className="py-20 mx-4 lg:mx-20">
        <div className="text-center text-success pb-16">
          <h1 className="text-2xl md:text-4xl" data-aos="zoom-in">عملاء نفتخر بهم</h1>
        </div>
        <div className="flex justify-center items-center lg:pb-10">
          <Swiper
            data-aos="fade-up"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 2,
              },
              "@1.00": {
                slidesPerView: 3,
              },
              "@1.50": {
                slidesPerView: 7,
              },
            }}
          >
            {l?.map((l) => ( 
              <SwiperSlide key={l.id} className="flex justify-center items-center">
                <div className="h-[200px] flex justify-center items-center overflow-hidden">
                  <Image
                    src={l.image}
                    width={200}
                    height={80}
                    alt="Picture"
                  />
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Customer