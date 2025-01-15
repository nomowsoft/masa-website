"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const l = [
  {"id": 1, "image": '/important_customer/c1.svg'},
  {"id": 2, "image": '/important_customer/c2.svg'},
  {"id": 3, "image": '/important_customer/c3.svg'},
  {"id": 4, "image": '/important_customer/c4.png'},
  {"id": 5, "image": '/important_customer/c5.svg'},
  {"id": 6, "image": '/important_customer/c6.svg'},
  // {"id": 7, "image": '/important_customer/c7.svg'},
  {"id": 8, "image": '/important_customer/c8.png'},
]
const ImportantCustomer = () => {
  return (
    <section className="bg-info">
      <div className="pb-2 mx-4 lg:mx-20">
        <div className="xl:pb-5 mx-auto text-center w-full">
          <h1 className="lg:text-2xl xl:text-4xl text-success">عملاء نفتخر بهم</h1>
        </div>
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
                        className="h-20"
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