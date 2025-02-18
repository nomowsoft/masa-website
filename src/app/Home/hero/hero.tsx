"use client";
import Image from "next/image";
import module from "./hero.module.css"
import { HiArrowNarrowLeft } from "react-icons/hi";

const Hero = () => {

  return (
    <div>
      <section className={`${module.bg_shape_5} hidden lg:block`} />
      <section className={`${module.bg_shape_6} hidden lg:block`} />
      <section>
        <div className="grid px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 max-w-screen-xl h-screen">
          <div className="place-self-center lg:col-span-7">
            <h1 data-aos="fade-down" className={`${module.text_address} h-32 max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-success`}>ماسا للتقنية </h1>
            <p data-aos="fade-down" className="max-w-2xl mb-6 text-gray-600 lg:mb-8 md:tex lg:text-2xl text-justify">
            في عالم الأعمال المتطور، تحتاج مؤسستك إلى حلول تقنية مبتكرة لتبقى في الصدارة. نحن نقدم لك أحدث التقنيات التي تسهم في تحسين إدارة العمليات وتبسيط المهام اليومية، مما يساعدك على زيادة الإنتاجية وتحقيق أهدافك بكفاءة أعلى. انطلق معنا اليوم وابدأ في تحويل مؤسستك إلى نموذج رقمي متطور يواكب متطلبات المستقبل. لا تتردد، تواصل معنا الآن وكن جزءًا من نجاحنا
            </p>
            <div className="flex items-center mt-10">
              <a href="#" className={`${module.show_mored} inline-flex items-center justify-center px-5 py-3 md:text-2xl text-center border border-success rounded-lg`}>
                ابداء معنا الان
              </a>
              <a href="#about" className="mx-5 inline-flex items-center justify-center px-5 py-3 md:text-2xl text-center text-success hover:animate-bounce">
                <span>رؤية المزيد</span>
                <HiArrowNarrowLeft className="mt-3 mx-2"/>
              </a>
            </div>
          </div>
          <div className={`${module.composition_6_decoration_1} hidden md:block`}>
            <Image src="/banar/decoration-1.svg" alt="mockup" width={650} height={20} data-aos="fade-up" />
          </div>
          <div className={`${module.composition_6_decoration_2} hidden md:block`}>
            <Image src="/banar/decoration-1.svg" alt="mockup" width={650} height={20} data-aos="fade-up" />
          </div>
          <div className="lg:col-span-5 hidden lg:flex justify-center lg:justify-end items-center">
            <Image src="/banar/download (3).svg" alt="mockup" width={650} height={20} data-aos="fade-up" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero