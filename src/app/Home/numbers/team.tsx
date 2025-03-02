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
    { "id": 1, name: "ايهاب الشوربجي", function: "استشاري وظيفي", image: "/partner/1.png" },
    { "id": 2, name: "الطيب كريستو", function: "استشاري وظيفي اول", image: "/partner/6.png" },
    { "id": 3, name: "امل الحسن", function: "استشاري وظيفي اول", image: "/partner/10.png" },
    { "id": 4, name: "طارق ابو السعود", function: "استشاري وظيفي اول", image: "/partner/2.png" },
    { "id": 5, name: "حسنين علي", function: "استشاري وظيفي اول", image: "/partner/5.png" },
    { "id": 6, name: "يوسف مصطفى", function: "مدير حسابات العملاء", image: "/partner/4.png" },
    { "id": 7, name: "جيهان بن علي", function: "مطور نظم اول", image: "/partner/10.png" },
    { "id": 8, name: "كريم رواق", function: "مطور نظم اول", image: "/partner/7.png" },
    { "id": 9, name: "مروه علي", function: "مطور نظم اول", image: "/partner/10.png" },
    { "id": 10, name: "هاني حسن", function: "مدير مشاريع", image: "/partner/3.png" },
    { "id": 11, name: "فاطمة عبدالكريم", function: "استشاري حلول اعمال", image: "/partner/10.png" },
    { "id": 12, name: "متعب الزهراني", function: "منسق مشاريع", image: "/partner/8.png" },
]

const Team = () => {
    return (
        <section className="py-6 xl:py-32 px-5 lg:px-20 bg-gray-200 md:bg-about2 bg-no-repeat bg-left bg-contain">
            <div className="max-w-screen-md mx-auto grid grid-cols-1">
                <div>
                    <h1 className={`${module.approach_address} text-5xl lg:text-8xl lg:text-center h-16 lg:h-32`}>فريقنا</h1>
                    <p className="text-gray-600 mt-3 text-justify lg:text-center text-lg lg:text-xl">
                        القوة الحقيقية لـماسا تكمن في فريقها. نحن مجموعة من العقول المبدعة، التي تجمع بين الشغف بالتكنولوجيا، والخبرة العملية العميقة، والرغبة المستمرة في تقديم الأفضل. نعمل بروح الفريق الواحد، حيث يتعاون المطورون، والمحللون، والاستشاريون، والمبدعون التقنيون على بناء حلول تعكس التزامنا بالابتكار والجودة. نحن لا ننظر إلى التحديات كعقبات، بل كمحفزات تدفعنا لإيجاد حلول أكثر ذكاءً، وأكثر كفاءةً، وأكثر تأثيرًا.
                    </p>
                </div>
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
                        <SwiperSlide key={team.id} className="bg-white p-5 rounded-3xl shadow-lg border border-success">
                            <div>
                                <div className="flex justify-center">
                                    <Image src={team.image} className="rounded-full border border-success" alt="" width={150} height={20} />
                                </div>
                                <div className="text-center mt-3 mb-3">
                                    <h1 className="text-success ">
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
    )
}

export default Team