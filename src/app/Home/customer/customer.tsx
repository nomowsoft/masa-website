// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const customers = [
//   { id: 1, image: "/customer/Picture1.jpg" },
//   { id: 2, image: "/customer/Picture2.png" },
//   { id: 4, image: "/customer/Picture4.png" },
//   { id: 5, image: "/customer/Picture5.png" },
//   { id: 6, image: "/customer/Picture6.png" },
//   { id: 7, image: "/customer/Picture8.png" },
//   { id: 8, image: "/customer/Picture9.png" },
//   { id: 9, image: "/customer/Picture10.png" },
//   { id: 10, image: "/customer/Picture11.png" },
//   { id: 11, image: "/customer/Picture12.png" },
//   { id: 12, image: "/customer/Picture13.png" },
//   { id: 13, image: "/customer/Picture14.jpg" },
//   { id: 14, image: "/customer/Picture15.png" },
//   { id: 15, image: "/customer/Picture16.png" },
//   { id: 16, image: "/customer/Picture17.png" },
//   { id: 17, image: "/customer/Picture18.png" },
//   { id: 18, image: "/customer/Picture19.png" },
//   { id: 19, image: "/customer/Picture20.png" },
//   { id: 20, image: "/customer/Picture21.png" },
//   { id: 21, image: "/customer/Picture22.jpg" },
//   { id: 22, image: "/customer/Picture23.jpg" },
//   { id: 23, image: "/customer/Picture24.png" },
//   { id: 24, image: "/customer/Picture25.png" },
//   { id: 25, image: "/customer/Picture26.png" },
//   { id: 26, image: "/customer/Picture27.jpg" },
//   { id: 27, image: "/customer/Picture28.jpg" },
//   { id: 28, image: "/customer/Picture29.png" },
//   { id: 29, image: "/customer/Picture30.png" },
//   { id: 30, image: "/customer/Picture31.png" },
//   { id: 31, image: "/customer/Picture32.jpg" },
//   { id: 32, image: "/customer/Picture33.png" },
//   { id: 33, image: "/customer/Picture34.png" },
//   { id: 34, image: "/customer/Picture35.png" },
//   { id: 35, image: "/customer/Picture36.jpg" },
//   { id: 36, image: "/customer/Picture37.png" },
//   { id: 37, image: "/customer/Picture38.jpg" },
//   { id: 38, image: "/customer/Picture39.png" },
//   { id: 39, image: "/customer/Picture40.png" },
//   { id: 40, image: "/customer/Picture41.jpg" },
//   { id: 41, image: "/customer/Picture42.png" },
//   { id: 42, image: "/customer/Picture43.png" },
//   { id: 43, image: "/customer/Picture44.png" },
//   { id: 44, image: "/customer/Picture45.jpg" },
//   { id: 45, image: "/customer/Picture46.png" },
// ];

// const chunkArray = <T,>(array: T[], size: number): T[][] => {
//   const chunks: T[][] = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunks.push(array.slice(i, i + size));
//   }
//   return chunks;
// };

// const Customer = () => {
//   const [groupedCustomers, setGroupedCustomers] = useState([]);

//   useEffect(() => {
//     const updateGroups = () => {
//       const screenWidth = window.innerWidth;
//       const chunkSize = screenWidth < 768 ? 4 : 18;
//       setGroupedCustomers(chunkArray(customers, chunkSize));
//     };
//     updateGroups();
//     window.addEventListener("resize", updateGroups);
//     return () => window.removeEventListener("resize", updateGroups);
//   }, []);

//   return (
//     <section className="bg-customer bg-cover bg-bottom">
//       <div className="py-10 mx-4 lg:mx-20">
//         <div className="text-center text-success">
//           <h1 className="text-2xl md:text-4xl pb-4" data-aos="zoom-in">
//             عملاء نفتخر بهم
//           </h1>
//         </div>
//         <div className="flex justify-center items-center lg:pb-32">
//           <Swiper
//             data-aos="fade-up"
//             modules={[Navigation, Pagination, Autoplay]}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             spaceBetween={50}
//             slidesPerView={1}
//           >
//             {groupedCustomers.map((group, index) => (
//               <SwiperSlide key={index} className="flex justify-center items-center">
//                 <div
//                   className={`grid gap-4 ${
//                     screenWidth < 768 ? "grid-cols-2 grid-rows-2" : "grid-cols-6 grid-rows-3"
//                   }`}
//                 >
//                   {group.map((customer) => (
//                     <div
//                       key={customer.id}
//                       className="h-[150px] flex justify-center items-center overflow-hidden rounded-lg"
//                     >
//                       <Image
//                         src={customer.image}
//                         width={150}
//                         height={100}
//                         alt="Customer"
//                         className="object-contain"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Customer;

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
  { id: 1, image: "/customer/Picture1.jpg" },
  { id: 2, image: "/customer/Picture2.png" },
  { id: 4, image: "/customer/Picture4.png" },
  { id: 5, image: "/customer/Picture5.png" },
  { id: 6, image: "/customer/Picture6.png" },
  { id: 7, image: "/customer/Picture8.png" },
  { id: 8, image: "/customer/Picture9.png" },
  { id: 9, image: "/customer/Picture10.png" },
  { id: 10, image: "/customer/Picture11.png" },
  { id: 11, image: "/customer/Picture12.png" },
  { id: 12, image: "/customer/Picture13.png" },
  { id: 13, image: "/customer/Picture14.jpg" },
  { id: 14, image: "/customer/Picture15.png" },
  { id: 15, image: "/customer/Picture16.png" },
  { id: 16, image: "/customer/Picture17.png" },
  { id: 17, image: "/customer/Picture18.png" },
  { id: 18, image: "/customer/Picture19.png" },
  { id: 19, image: "/customer/Picture20.png" },
  { id: 20, image: "/customer/Picture21.png" },
  { id: 21, image: "/customer/Picture22.jpg" },
  { id: 22, image: "/customer/Picture23.jpg" },
  { id: 23, image: "/customer/Picture24.png" },
  { id: 24, image: "/customer/Picture25.png" },
  { id: 25, image: "/customer/Picture26.png" },
  { id: 26, image: "/customer/Picture27.jpg" },
  { id: 27, image: "/customer/Picture28.jpg" },
  { id: 28, image: "/customer/Picture29.png" },
  { id: 29, image: "/customer/Picture30.png" },
  { id: 30, image: "/customer/Picture31.png" },
  { id: 31, image: "/customer/Picture32.jpg" },
  { id: 32, image: "/customer/Picture33.png" },
  { id: 33, image: "/customer/Picture34.png" },
  { id: 34, image: "/customer/Picture35.png" },
  { id: 35, image: "/customer/Picture36.jpg" },
  { id: 36, image: "/customer/Picture37.png" },
  { id: 37, image: "/customer/Picture38.jpg" },
  { id: 38, image: "/customer/Picture39.png" },
  { id: 39, image: "/customer/Picture40.png" },
  { id: 40, image: "/customer/Picture41.jpg" },
  { id: 41, image: "/customer/Picture42.png" },
  { id: 42, image: "/customer/Picture43.png" },
  { id: 43, image: "/customer/Picture44.png" },
  { id: 44, image: "/customer/Picture45.jpg" },
  { id: 45, image: "/customer/Picture46.png" },
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
                        height={100}
                        alt="Customer"
                        className="object-contain"
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

