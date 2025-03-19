"use client";
import Image from "next/image";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const partners = [
  { id: 1, src: "/partner/logo-1.png", alt: "Microsoft Logo", name: "Microsoft", description: "شركة رائدة في مجال التكنولوجيا تقدم حلولاً مبتكرة." },
  { id: 2, src: "/partner/Odoo-Logo.png", alt: "Odoo Gold Partner Logo", name: "Odoo", description: "مزود حلول ERP متكاملة لتحسين العمليات التجارية." },
  { id: 3, src: "/partner/Oracle-Cloud-Logo.png", alt: "Oracle Cloud Logo", name: "Oracle", description: "شركة عالمية تقدم حلول سحابية متقدمة." },
];

const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section>
      <div className="pt-44 pb-12 bg-gray-200 ">
        <div className="max-w-screen-md md:mx-auto mx-10 text-success pb-8 text-center">
          <div data-aos="fade-down">
            <h1 className="text-success text-3xl lg:text-6xl mt-4 text-center h-20">شركاء النجاح</h1>
            <p className="mt-8 text-xl text-justify text-gray-600">
              في ماسا، نفتخر بشراكتنا مع رواد التقنية العالميين الذين يساهمون في تقديم أحدث الحلول التقنية لعملائنا. سواء كنت تبحث عن تطوير أنظمة متقدمة، تحسين عملياتك اليومية، أو حتى الحصول على دعم فني متميز، فإن شركاءنا يضمنون لك أعلى معايير الجودة والاحترافية. نحن هنا لنساعدك على تحقيق أهدافك بنجاح.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:bg-about3 bg-cover bg-no-repeat">
        <div className="py-12 max-w-screen-xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={6}
            navigation={{
              nextEl: ".custom-swiper-button-prev",
              prevEl: ".custom-swiper-button-next",
          }}
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
            {partners?.map((item) => (

              <SwiperSlide key={item.id}>
                <div className="text-success py-32 px-4 text-right transition-transform duration-300 hover:scale-105" key={item.id}>
                    <div className=" bg-white">
                      <div className="border border-success shadow-xl bg-white rounded-3xl flex justify-center items-center p-2 mt-2 h-44">
                        <Image src={item.src} alt="" height={100} width={300} />
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-navigation flex justify-center">
              <button className="custom-swiper-button-prev rounded-lg text-success text-5xl">→</button>
              <button className="custom-swiper-button-next rounded-lg text-success text-5xl">←</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners