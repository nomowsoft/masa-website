"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import module from "./customer.module.css";

type Customer = { id: number; image: string };

const customers = [
  { id: 1, image: "/customer/c1.svg" },
  { id: 2, image: "/customer/c2.svg" },
  { id: 3, image: "/customer/c3.svg" },
  { id: 4, image: "/customer/c4.svg" },
  { id: 5, image: "/customer/c5.svg" },
  { id: 6, image: "/customer/c6.svg" },
  { id: 7, image: "/customer/c7.svg" },
  { id: 8, image: "/customer/c8.svg" },
  { id: 9, image: "/customer/c9.svg" },
  { id: 10, image: "/customer/c10.svg" },
  { id: 11, image: "/customer/c11.svg" },
  { id: 12, image: "/customer/c12.svg" },
  { id: 13, image: "/customer/c13.svg" },
  { id: 14, image: "/customer/c14.svg" },
  { id: 16, image: "/customer/c16.svg" },
  { id: 17, image: "/customer/c17.svg" },
  { id: 18, image: "/customer/c18.svg" },
  { id: 19, image: "/customer/c19.svg" },
  { id: 20, image: "/customer/c20.svg" },
  { id: 22, image: "/customer/c22.svg" },
  { id: 23, image: "/customer/c23.svg" },
  { id: 24, image: "/customer/c24.png" },
  { id: 25, image: "/customer/c25.svg" },
  { id: 26, image: "/customer/c26.svg" },
  { id: 27, image: "/customer/c27.svg" },
  { id: 28, image: "/customer/c28.svg" },
  { id: 29, image: "/customer/c29.svg" },
  { id: 30, image: "/customer/c30.svg" },
  { id: 31, image: "/customer/c31.svg" },
  { id: 32, image: "/customer/c32.svg" },
  { id: 33, image: "/customer/c33.png" },
  { id: 34, image: "/customer/c34.svg" },
  { id: 35, image: "/customer/c35.svg" },
  { id: 36, image: "/customer/c36.svg" },
  { id: 37, image: "/customer/c37.svg" },
  { id: 38, image: "/customer/c38.svg" },
  { id: 39, image: "/customer/c39.svg" },
  { id: 40, image: "/customer/c42.png" },
  { id: 41, image: "/customer/c41.svg" },
];

const Customer = () => {

  return (
    <section className="bg-about bg-no-repeat bg-right bg-contain px-5 lg:px-20">
      <div className="mx-auto max-w-screen-xl xl:py-20">
        <div className="lg:text-center">
          <h1 className={`${module.address_customer} text-5xl max-w-screen-lg mx-auto h-16 lg:h-20`}>
            عملاؤنا
          </h1>
          <h1 className="pb-8 text-lg text-justify lg:text-center lg:text-2xl max-w-screen-lg mx-auto text-gray-600">
            نحن نعتز بعلاقاتنا طويلة الأمد مع عملائنا الذين يثقون بنا في تقديم أفضل الحلول التقنية. نجاحنا ينبع من رضا عملائنا وسعينا المستمر لتقديم خدمات تفوق توقعاتهم.
          </h1>
        </div>
        <div className="lg:pb-32">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={6}
            navigation={{
              nextEl: ".customer-swiper-button-prev",
              prevEl: ".customer-swiper-button-next",
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 2,
              },
              "@1.00": {
                slidesPerView: 4,
              },
              "@1.50": {
                slidesPerView: 6,
              },
            }}
          >
            {customers.map((customer, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="rounded-xl bg-white shadow-lg my-5 border border-success">
                  <div
                    className="h-[150px] flex justify-center items-center overflow-hidden rounded-lg"
                  >
                    <Image
                      src={customer.image}
                      width={150}
                      height={80}
                      alt="Customer"
                      className="object-contain h-24"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-navigation1 flex mt-3 justify-end">
            <div className={`customer-swiper-button-next mx-2 px-4 py-2 rounded-lg text-success cursor-pointer`}>❮</div>
            <div className={`customer-swiper-button-prev mx-2 px-4 py-2 rounded-lg text-success cursor-pointer`}>❯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;

