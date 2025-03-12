"use client";
import module from "./success_story.module.css";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';

const Story = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="pt-44 pb-12 bg-gray-200">
        <div className="max-w-screen-md md:mx-auto mx-10 text-success pb-8 text-center">
          <div data-aos="fade-down">
            <p className="mt-8 text-2xl text-justify text-gray-600">
              نحن في ماسا نفخر بتحقيق العديد من قصص النجاح التي تعكس التزامنا بتقديم استشارات وحلول تقنية مبتكرة تلبي احتياجات عملائنا. إليك بعض من أبرز الإنجازات التي ساعدت عملائنا على تحقيق تحولات هامة في مجالاتهم:
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 lg:bg-about3 bg-cover bg-no-repeat">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white p-8 shadow-xl rounded-xl transition-transform duration-300 hover:scale-105 mb-12" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <iframe className={module.vedio} width="100%" height="315" src="https://www.youtube.com/embed/YZ07nuEWl_8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
              </div>
              <div className="text-gray-700 w-full lg:w-1/2">
                <h1 className="text-success text-4xl mb-4">شركة المناهل القابضة</h1>
                <p className="text-gray-700 text-xl text-justify">
                  شركة المناهل ديكو، المتخصصة في الأثاث والديكور الفاخر، استفادت من نظام Odoo لتحسين عملياتها الإدارية والتشغيلية. من خلال تطبيق هذا النظام المتكامل، تمكنت الشركة من دمج وتنسيق مختلف أقسامها، مما أدى إلى تحسين الكفاءة وزيادة الإنتاجية.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-xl transition-transform duration-300 hover:scale-105 mb-12" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="text-gray-700 w-full lg:w-1/2">
                <h1 className="text-success text-4xl mb-4">شركة المناهل القابضة</h1>
                <p className="text-gray-700 text-xl text-justify">
                  شركة المناهل ديكو، المتخصصة في الأثاث والديكور الفاخر، استفادت من نظام Odoo لتحسين عملياتها الإدارية والتشغيلية. من خلال تطبيق هذا النظام المتكامل، تمكنت الشركة من دمج وتنسيق مختلف أقسامها، مما أدى إلى تحسين الكفاءة وزيادة الإنتاجية.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <iframe className={module.vedio} width="100%" height="315" src="https://www.youtube.com/embed/YZ07nuEWl_8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
              </div>
            </div>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-xl transition-transform duration-300 hover:scale-105 mb-12" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <iframe className={module.vedio} width="100%" height="315" src="https://www.youtube.com/embed/YZ07nuEWl_8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
              </div>
              <div className="text-gray-700 w-full lg:w-1/2">
                <h1 className="text-success text-4xl mb-4">شركة المناهل القابضة</h1>
                <p className="text-gray-700 text-xl text-justify">
                  شركة المناهل ديكو، المتخصصة في الأثاث والديكور الفاخر، استفادت من نظام Odoo لتحسين عملياتها الإدارية والتشغيلية. من خلال تطبيق هذا النظام المتكامل، تمكنت الشركة من دمج وتنسيق مختلف أقسامها، مما أدى إلى تحسين الكفاءة وزيادة الإنتاجية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;