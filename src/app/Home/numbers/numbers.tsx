"use client";
import Image from "next/image";
import module from "./number.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const manage_team = [
    {"id": 1, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 2, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 3, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 4, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 5, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 6, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 7, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
    {"id": 8, name:"محمد علي", description:"شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function:"مهندس برمجيات", image: "/partner/partner.webp"},
]

const Numbers = () => {
  return (
    <div>
      <section className="py-10 md:py-20 lg:py-44 px-20 bg-primary md:bg-about2 bg-no-repeat bg-left bg-contain">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <h1 className={`${module.approach_address} text-5xl lg:text-8xl h-32`}>منهجيتنا</h1>
              <p className="text-success mt-3 text-justify text-2xl">
              في ماسا للتقنية، نعتمد على منهجية تجمع بين الابتكار والكفاءة لضمان تقديم حلول تقنية متطورة تلبي احتياجات العملاء. نركز على تحسين العمليات، تعزيز الأداء، وتوفير تجربة سلسة من خلال أحدث التقنيات الرقمية.
              </p>
            </div>
            <div className="flex justify-center mt-10 md:mt-0 md:justify-end items-center">
              <Image src="/about/numbersm.webp" alt="..." width={500} height={20} className={`rounded-3xl`} />
            </div>
          </div>
      </section>
      <section className="py-10 lg:py-44 px-20 md:bg-about bg-no-repeat bg-right bg-contain">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1">
            {/* <div className="flex justify-center md:justify-start items-center">
              <Image src="/about/repot8.jpg" alt="..." width={500} height={20} className={`${module.image_approach} rounded-3xl`} />
            </div> */}
            <div>
              <h1 className={`${module.approach_address2} text-center text-8xl h-32`}>إدارتنا</h1>
              <p className="text-gray-600 mt-3 text-center text-2xl max-w-screen-md mx-auto">
              يتميز فريق الإدارة لدينا بخبرة واسعة في مجالات التقنية وريادة الأعمال، مما يمكننا من تقديم حلول مبتكرة تلبي متطلبات السوق المتغيرة. نسعى دائمًا إلى تطوير بيئة عمل متكاملة تعزز من نجاح شركائنا وعملائنا.              </p>
              <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5" data-aos="fade-up">
                {manage_team.slice(0,3)?.map((team) => (
                    <div key={team.id} className="bg-white shadow-xl mt-6 rounded-2xl py-2 mx-5 md:mx-0">
                      <div className="flex justify-center items-center">
                        <Image src={team.image} alt="..." width={100} height={20} className="border border-success  rounded-full" />
                      </div>
                      <div className="text-center mt-3 mb-3">
                        <h1 className="text-success text-xl">
                          {team.name}
                        </h1>
                        <h1 className="mt-1">
                          {team.function}
                        </h1>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
      </section>
      <section className="md:py-6 lg:py-44 px-20 bg-primary md:bg-about2 bg-no-repeat bg-left bg-contain">
          <div className="max-w-screen-md mx-auto grid grid-cols-1">
            <div>
              <h1 className={`${module.approach_address} text-8xl text-center h-32`}>فريقنا</h1>
              <p className="text-success mt-3 text-center text-2xl">
              نحن فخورون بفريق عمل محترف يضم خبراء في مختلف المجالات التقنية. نؤمن بأن نجاحنا يعتمد على مهارات وإبداع فريقنا، لذا نحرص على دعمهم بأفضل الأدوات والموارد لضمان تقديم حلول استثنائية.</p>
            </div>
            {/* <div className="flex justify-center mt-16 md:mt-0 md:justify-end items-center">
              <Image src="/about/repot10.jpg" alt="..." width={500} height={20} className={`${module.image_approach} rounded-3xl`} />
            </div> */}
          </div>
          <div className="max-w-screen-xl mx-auto flex flex-wrap gap-2 items-center mt-2 lg:mt-20" data-aos="fade-up">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
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
                    slidesPerView: 4,
                  },
                  "@1.50": {
                    slidesPerView: 4,
                  },
                }}
            >
                {manage_team?.map((team) => (
                    <SwiperSlide key={team.id} className="bg-white p-5 rounded-3xl shadow-lg border border-green-500">
                        <div>
                          <div className="flex justify-center">
                              <Image src={team.image} className="rounded-full border border-success" alt="" width={100} height={20} />
                          </div>
                          <div className="text-center mt-3 mb-3">
                              <h1 className="text-success text-xl">
                                  {team.name}
                              </h1>
                              <p className="mt-1">
                                  {team.function}
                              </p>
                          </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-navigation flex mt-3 justify-start">
              <div className={`custom-swiper-button-next mx-2 px-4 py-2 rounded-lg text-success`}>❮</div>
              <div className={`custom-swiper-button-prev mx-2 px-4 py-2 rounded-lg text-success`}>❯</div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Numbers;
