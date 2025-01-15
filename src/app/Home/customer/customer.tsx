"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Customer = () => {
  const [groupedCustomers, setGroupedCustomers] = useState<Customer[][]>([]); // Explicit type

  useEffect(() => {
    const updateGroups = () => {
      const screenWidth = window.innerWidth;
      const chunkSize = screenWidth < 768 ? 4 : 18;
      setGroupedCustomers(chunkArray(customers, chunkSize));
    };

    updateGroups();
    window.addEventListener("resize", updateGroups);
    return () => window.removeEventListener("resize", updateGroups);
  }, []);

  return (
    <section className="bg-customer bg-cover bg-bottom">
      <div className="py-10 mx-4 lg:mx-20">
        <div className="text-center text-success">
          <h1 className="text-2xl md:text-4xl pb-4" data-aos="zoom-in">
            عملاؤنا
          </h1>
        </div>
        <div className="flex justify-center items-center lg:pb-32">
          <Swiper
            data-aos="fade-up"
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
          >
            {groupedCustomers.map((group, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div
                  className={`grid gap-4 ${
                    window.innerWidth < 768 ? "grid-cols-2 grid-rows-2" : "grid-cols-6 grid-rows-3"
                  }`}
                >
                  {group.map((customer) => (
                    <div
                      key={customer.id}
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
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Customer;

