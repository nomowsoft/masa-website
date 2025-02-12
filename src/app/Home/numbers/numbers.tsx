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
      <section className="py-32 bg-success">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center">
            <div className="w-2/3">
              <Image src="/about/new_appr.svg" alt="..." width={400} height={20} />
            </div>
            <div className="w-2/2 mx-20">
              <h1 className={`${module.approach_address} text-center text-6xl h-20`}>منهجيتنا</h1>
              <p className="text-white mt-3 text-justify text-xl">
              في ماسا للتقنية، نعتمد على منهجية تجمع بين الابتكار والكفاءة لضمان تقديم حلول تقنية متطورة تلبي احتياجات العملاء. نركز على تحسين العمليات، تعزيز الأداء، وتوفير تجربة سلسة من خلال أحدث التقنيات الرقمية.
              </p>
            </div>
          </div>
      </section>
      <section className="py-32 bg-about bg-no-repeat bg-right bg-contain">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center">
            <div className="w-2/2 mx-20">
              <h1 className={`${module.approach_address2} text-center text-6xl h-20`}>إدارتنا</h1>
              <p className="text-gray-600 mt-3 text-justify text-xl">
              يتميز فريق الإدارة لدينا بخبرة واسعة في مجالات التقنية وريادة الأعمال، مما يمكننا من تقديم حلول مبتكرة تلبي متطلبات السوق المتغيرة. نسعى دائمًا إلى تطوير بيئة عمل متكاملة تعزز من نجاح شركائنا وعملائنا.              </p>
            <div className="max-w-screen-xl mx-auto flex flex-wrap gap-2 items-center justify-center" data-aos="fade-up">
              {manage_team.slice(0,3)?.map((team) => (
                  <div key={team.id} className="bg-white shadow-xl w-1/3 mt-6 rounded-2xl py-2">
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
            <div className="w-2/3">
              <Image src="/about/manage.svg" alt="..." width={400} height={20} />
            </div>
          </div>
      </section>
      <section className="py-32 bg-success">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center">
            <div className="w-2/3">
              <Image src="/about/team4.svg" alt="..." width={600} height={20} />
            </div>
            <div className="w-2/2 mx-20">
              <h1 className={`${module.approach_address} text-center text-6xl h-20`}>فريقنا</h1>
              <p className="text-white mt-3 text-justify text-xl">
              نحن فخورون بفريق عمل محترف يضم خبراء في مختلف المجالات التقنية. نؤمن بأن نجاحنا يعتمد على مهارات وإبداع فريقنا، لذا نحرص على دعمهم بأفضل الأدوات والموارد لضمان تقديم حلول استثنائية.</p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto flex flex-wrap gap-2 items-center mt-20" data-aos="fade-up">
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
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-navigation flex mt-3 justify-start">
              <div className={`custom-swiper-button-next mx-2 px-4 py-2 rounded-lg text-white`}>❮</div>
              <div className={`custom-swiper-button-prev mx-2 px-4 py-2 rounded-lg text-white`}>❯</div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Numbers;


{/* <div className="max-w-screen-xl mx-auto flex flex-wrap gap-2 items-center mt-20" data-aos="fade-up">
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
                        <p className="text-justify text-gray-600">
                            {team.description}
                        </p>
                        <div className="mt-5 flex items-center">
                            <div>
                                <Image src={team.image} className="rounded-full" alt="" width={50} height={20} />
                            </div>
                            <div className="mx-5">
                                <p className="text-success">
                                    {team.name}
                                </p>
                                <p>
                                    {team.function}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-navigation flex mt-3 justify-start">
              <div className={`custom-swiper-button-next mx-2 px-4 py-2 rounded-lg text-white`}>❮</div>
              <div className={`custom-swiper-button-prev mx-2 px-4 py-2 rounded-lg text-white`}>❯</div>
            </div>
          </div> */}
