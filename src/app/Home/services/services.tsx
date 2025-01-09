"use client";
import Image from "next/image";

const l = [
  {
    id: 1,
    description: "تحليل وإعداد وثائق المتطلبات (BRD)",
    image: "/services/analitic.webp",
  },
  {
    id: 2,
    description: "تحليل البيانات وذكاء الأعمال (BI)",
    image: "/services/BI.webp",
  },
  { id: 3, description: "قياس النضج الرقمي", image: "/services/GAs.webp" },
  {
    id: 4,
    description: "تطبيقات الجوال Google Flutter",
    image: "/services/APP.webp",
  },
  {
    id: 5,
    description: "تطوير أنظمة إدارة موارد المؤسسة (Odoo ERP)",
    image: "/services/ERP.webp",
  },
  {
    id: 6,
    description: "تطوير المنصات المنصات والبوابات الالكترونية",
    image: "/services/website.webp",
  },
  { id: 7, description: "خدمات تكنولوجيات الـ AI", image: "/services/AI.webp" },
  { id: 8, description: "الربط والتكامل APIs", image: "/services/APIs.webp" },
];

const Services = () => {

  return (
    <section
      className="md:bg-service md:bg-no-repeat md:bg-bottom"
    >
      <div className="pt-10">
        <div className="text-center text-success pb-24">
          <h1 className="text-2xl md:text-4xl" data-aos="zoom-in">خدماتنا</h1>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mx-20" data-aos="fade-up">
          {l?.map((l) => (
            <div key={l.id}>
              <div className="flex justify-center items-center">
                <Image
                  src={l.image}
                  width={150}
                  height={500}
                  alt="Picture"
                />
              </div>
              <p className="mt-2 mb-10 mx-5 text-center text-xl text-success">
                {l.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
