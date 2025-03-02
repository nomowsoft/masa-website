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
          <div className="place-self-center lg:col-span-6">
            <h1 data-aos="fade-down" className={`${module.text_address} h-32 max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-success`}>ماسا للتقنية </h1>
            <p data-aos="fade-down" className="max-w-2xl mb-6 text-gray-600 lg:mb-8 md:tex lg:text-xl text-justify ml-5">
            في عالم يتحرك بسرعة نحو الرقمنة، تأتي ماسا للتقنية لتكون شريكك الموثوق في رحلتك نحو التحول الرقمي. نحن نؤمن بأن التكنولوجيا ليست مجرد أدوات، بل هي وسيلة لخلق فرص جديدة، وتحقيق كفاءة أعلى، وبناء مستقبل أكثر ذكاءً واستدامة. من خلال حلولنا الرقمية المتطورة، نساعد الشركات على تحسين عملياتها، وتعزيز تواجدها الرقمي، وتحقيق أقصى استفادة من إمكانيات التقنية الحديثة.            </p>
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
            <div className="hidden lg:col-span-6 lg:flex justify-center lg:justify-start items-center" data-aos="fade-up">
              <Image src="/banar/download (1) (5).png" alt="mockup" width={1200} height={600} />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero