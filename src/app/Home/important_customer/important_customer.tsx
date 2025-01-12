"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const l = [
  {"id": 1, "image": '/banar/c3.webp'},
  {"id": 2, "image": '/banar/c2.webp'},
  {"id": 3, "image": '/banar/c3.webp'},
  {"id": 4, "image": '/banar/c4.webp'},
  {"id": 5, "image": '/banar/c5.webp'},
  {"id": 6, "image": '/banar/c6.webp'}
]
const ImportantCustomer = () => {
  return (
    <section className="bg-info">
      <div className="pb-9 mx-4 lg:mx-20">
        <div className="px-4 mx-auto text-center mt-2 md:mt-0">
            <div className="flex flex-wrap justify-center items-center text-success sm:justify-center">
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
                    slidesPerView: 6,
                  },
                }}
              >
                {l?.map((l) => ( 
                  <SwiperSlide key={l.id} className="flex justify-center items-center">
                    <div className="h-20 flex justify-center items-center overflow-hidden">
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
      </div>
    </section>
  )
}

export default ImportantCustomer