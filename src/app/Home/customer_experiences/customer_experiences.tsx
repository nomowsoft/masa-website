"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const l = [
  {"id": 1, "name": 'محمد ابراهيم', "image": '/partner/partner.webp'},
  {"id": 2, "name": 'محمد ابراهيم', "image": '/partner/partner.webp'},
  {"id": 3, "name": 'محمد ابراهيم', "image": '/partner/partner.webp'},
  {"id": 4, "name": 'محمد ابراهيم', "image": '/partner/partner.webp'},
  {"id": 5, "name": 'محمد ابراهيم', "image": '/partner/partner.webp'},
  {"id": 6, "name": 'محمد ابراهيم', "image": '/partner/partner.webp'}
]
const CustomerExperiences = () => {
  return (
    <section className="bg-info md:bg-partner md:bg-no-repeat md:bg-cover md:bg-bottom">
      <div className="pb-9 mx-4 lg:mx-20">
        <div className="text-center text-success">
          <h1 className="text-2xl md:text-4xl" data-aos="zoom-in">عملاؤنا يتحدثون عنا</h1>
        </div>
        <div className="">
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
                slidesPerView: 3,
              },
            }}
          >
            {l?.map((l) => ( 
                  <SwiperSlide key={l.id} className="w-full bg-primary text-success border border-success rounded-3xl shadow  px-10 py-10 swiper-partner mt-12">
                    <Image
                          className="rounded-full absolute -top-6"
                          src="/partner/comment.png"
                          width={50}
                          height={80}
                          alt="Picture"
                    />
                    <p className="justify-center text-justify">
                    يشرح محمد قائلاً: « لقد غيرت منصة Odoo المستندة إلى السحابة قواعد اللعبة بالنسبة لنا ». « لقد سمح لنا بتخزين البيانات الهامة بشكل آمن في السحابة، مما أدى إلى تعزيز كفاءتنا التشغيلية والتطبيق العملي. في السابق، كان استرداد المعلومات أو إدارة المهام مثل المبيعات والتسعير وإدارة البائعين وجهات الاتصال يتطلب بحثًا مكثفًا. »
                    </p>
                    <div>
                      <hr className="text-5xl border-1 border-success mt-6"/>
                    </div>
                    <div className="flex flex-row flex-wrap mt-4 items-center gap-4">
                      <div>
                        <Image
                          className="rounded-full"
                          src={l.image}
                          width={80}
                          height={80}
                          alt="Picture"
                        />
                      </div>
                      <div>
                        <span className="text-success text-xl">
                          {l.name}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CustomerExperiences