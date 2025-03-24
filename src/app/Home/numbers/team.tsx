"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

const manage_team = [
  { id: 1, name: "ايهاب الشوربجي", function: "Functional Consultant", image: "/partner/1.png" },
  { id: 2, name: "الطيب كريستو", function: "Technical Manager", image: "/partner/6.png" },
  { id: 3, name: "امل الحسن", function: "Senior Functional Consultant", image: "/partner/10.png" },
  { id: 4, name: "طارق ابو السعود", function: "Senior Functional Consultant", image: "/partner/2.png" },
  { id: 5, name: "حسنين علي", function: "Senior Functional Consultant", image: "/partner/5.png" },
  { id: 6, name: "يوسف مصطفى", function: "Sales Account Manager", image: "/partner/4.png" },
  { id: 7, name: "جيهان بن علي", function: "Team Leader", image: "/partner/10.png" },
  { id: 8, name: "كريم رواق", function: "Team Leader", image: "/partner/7.png" },
  { id: 9, name: "مروه علي", function: "Team Leader", image: "/partner/10.png" },
  { id: 10, name: "هاني حسن", function: "Project Manager", image: "/partner/3.png" },
  { id: 11, name: "فاطمة عبدالكريم", function: "Business Solutions Consultant", image: "/partner/10.png" },
  { id: 12, name: "متعب الزهراني", function: "Project Coordinator", image: "/partner/8.png" },
];

const Team = () => {
  return (
    <section className="py-6 xl:py-32 px-5 lg:px-20 md:bg-about bg-no-repeat bg-right bg-contain bg-gray-200">
      <div className="max-w-screen-md mx-auto grid grid-cols-1">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-center mb-12 text-success">
          خبرات لتحقيق النجاح
          </h1>
          <p className="text-gray-600 mt-3 text-justify lg:text-center text-lg lg:text-2xl">
            يضم فريقنا مجموعة من الخبراء المتخصصين في تنفيذ حلول Odoo المبتكرة. فريقنا يقدم لك استشارات وحلولاً مخصصة تساهم في تحسين أدائك التجاري، مما يتيح لك تحقيق أقصى استفادة من الأنظمة الرقمية. نحن نركز على تقديم قيمة حقيقية، وتعزيز الكفاءة التشغيلية، ودعم استراتيجيات النمو المستدام لشركتك.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-2 lg:mt-20" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {manage_team.map((team) => (
            <SwiperSlide key={team.id} className="bg-white p-5 rounded-3xl shadow-lg border border-success">
              <div>
                <div className="flex justify-center">
                  <Image src={team.image} className="rounded-full border border-success" alt={team.name} width={150} height={150} />
                </div>
                <div className="text-center mt-3 mb-3">
                  <h1 className="text-success">{team.name}</h1>
                  <p className="mt-1">{team.function}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-navigation flex mt-3 md:justify-end justify-center">
          <div className="custom-swiper-button-prev mx-2 px-4 py-2 rounded-lg text-success cursor-pointer">❮</div>
          <div className="custom-swiper-button-next mx-2 px-4 py-2 rounded-lg text-success cursor-pointer">❯</div>
        </div>
      </div>
    </section>
  );
};

export default Team;