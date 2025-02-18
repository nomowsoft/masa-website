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
    { "id": 1, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 2, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 3, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 4, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 5, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 6, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 7, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
    { "id": 8, name: "محمد علي", description: "شركة ماسا تكنولوجي هي وحدة الأعمال الرقمية للشركة العربية المتخصصة للاستشارات وتقنية المعلومات.", function: "مهندس برمجيات", image: "/partner/partner.webp" },
]

const Team = () => {
    return (
        <section className="py-6 xl:py-32 px-5 lg:px-20 bg-primary md:bg-about2 bg-no-repeat bg-left bg-contain">
            <div className="max-w-screen-md mx-auto grid grid-cols-1">
                <div>
                    <h1 className={`${module.approach_address} text-5xl lg:text-8xl lg:text-center h-16 lg:h-32`}>فريقنا</h1>
                    <p className="text-gray-600 mt-3 text-justify lg:text-center text-lg lg:text-2xl">
                        نحن فخورون بفريق عمل محترف يضم خبراء في مختلف المجالات التقنية. نؤمن بأن نجاحنا يعتمد على مهارات وإبداع فريقنا، لذا نحرص على دعمهم بأفضل الأدوات والموارد لضمان تقديم حلول استثنائية.</p>
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
    )
}

export default Team