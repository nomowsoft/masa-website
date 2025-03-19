"use client";
import Image from "next/image";
import module from "./hero.module.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <section className={`${module.bg_shape_5} hidden lg:block`} />
      <section className={`${module.bg_shape_6} hidden lg:block`} />
      <section>
        <div className="grid px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 max-w-screen-2xl h-screen">
          <div className="place-self-center lg:col-span-6">
            <h1
              data-aos="fade-down"
              className={`${module.text_address} h-20 lg:h-16 max-w-2xl mb-4 text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none text-success`}
            >
              ماسا - تحول رقمي مبتكر لأعمالك
            </h1>
            <p
              data-aos="fade-down"
              className="max-w-2xl mb-6 text-gray-600 lg:mb-8 text-base md:text-lg lg:text-2xl text-justify ml-5"
            >
              في <span className="text-success font-bold">ماسا</span>، نحن نؤمن بأهمية الابتكار والتحول الرقمي لتحقيق النجاح المستدام. كـ{" "}
              <span className="text-purple-900 font-bold">Odoo Gold Partner</span>، نقدم حلولاً رقمية متكاملة وقابلة للتخصيص باستخدام منصة{" "}
              <span className="text-purple-900 font-bold">Odoo</span> الرائدة. نساعد الشركات في تبسيط العمليات، وتحسين الكفاءة التشغيلية، وتعزيز تجارب العملاء، مما يساهم في تعزيز نمو الأعمال وزيادة الإنتاجية.
            </p>
            <div className="flex flex-col md:flex-row items-center mt-10">
              <a
                href="#"
                className={`${module.show_mored} inline-flex items-center justify-center px-5 py-3 md:text-2xl text-center border border-success rounded-lg mb-4 md:mb-0`}
              >
                ابداء معنا الان
              </a>
              <a
                href="#about"
                className="mx-0 md:mx-5 inline-flex items-center justify-center px-5 py-3 md:text-2xl text-center text-success hover:animate-bounce"
              >
                <span>رؤية المزيد</span>
                <HiArrowNarrowLeft className="mt-1 md:mt-3 mx-2" />
              </a>
            </div>
          </div>
          <div
            className="hidden lg:col-span-6 lg:flex justify-center lg:justify-start items-center"
            data-aos="fade-up"
          >
            <Image
              src="/banar/download (1) (5).png"
              alt="mockup"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;