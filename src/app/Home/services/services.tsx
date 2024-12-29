"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const l = [
  {"id": 1, "description": 'تحليل وإعداد وثائق المتطلبات (BRD)', "image": '/services/analitic.png'},
  {"id": 2, "description": 'تحليل البيانات وذكاء الأعمال (BI)', "image": '/services/BI.png'},
  {"id": 3, "description": 'قياس النضج الرقمي', "image": '/services/GAs.png'},
  {"id": 4, "description": 'تطبيقات الجوال Google Flutter', "image": '/services/APP.png'},
  {"id": 5, "description": 'تطوير أنظمة إدارة موارد المؤسسة (Odoo ERP)', "image": '/services/ERP.png'},
  {"id": 6, "description": 'تطوير المنصات المنصات والبوابات الالكترونية', "image": '/services/website.png'},
  {"id": 7, "description": 'خدمات تكنولوجيات الـ AI', "image": '/services/AI.png'},
  {"id": 8, "description": 'الربط والتكامل APIs', "image": '/services/APIs.png'}
]

const Services = () => {
  const sectionRef = useRef(null);
  const [isServices, setIsServices] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsServices(entry.isIntersecting && !isServices);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-Services bg-center items-center mb-44 lg:mb-0"
    >
      <div className="relative top-44 lg:top-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="image-container overflow-hidden relative mt-16">
            <h1 className="text-primary text-2xl lg:text-6xl text-center lg:text-right leading-tight mx-10">جانب من خدمات الشركة العربية المتخصصة للاستشارات وتقنية المعلومات</h1>
            <button className="rounded-lg mt-12 mx-24 bg-secndary py-3 px-2 lg:px-10 text-white text-xl lg:text-2xl">تحدث مع مستشارينا</button>
          </div>
          <div className="image-container overflow-hidden relative mt-16">
            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mx-10">
              {l?.map((l) => (
                <div key={l.id}>
                  <div className="flex justify-center items-center">
                    <Image
                      src={l.image}
                      width={100}
                      height={500}
                      alt="Picture"
                    />
                  </div>
                  <p className="mt-2 mb-10 mx-5 text-center text-primary">
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        
          <div className={`col-span-2 lg:flex items-end justify-end overflow-hidden relative hidden ${
            isServices ? "animate-fadeOut visible opacity-100" : ""
          }`}>
            <Image
              src="/services/bulding.png"
              width={1500}
              height={500}
              alt="Picture"
            />
          </div>
          
          <div className={`flex lg:justify-start justify-center relative lg:left-12 items-center ${
            isServices ? "lg:animate-fadeOutx visible opacity-100" : ""
          }`}>
            <Image
              src="/services/group.png"
              width={600}
              height={500}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
