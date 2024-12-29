"use client";
import { useEffect, useRef, useState } from "react";

const Products = () => {
  const sectionRef = useRef(null);
  const [isProducts, setIsProducts] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProducts(entry.isIntersecting && !isProducts);
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
      className={`bg-Products bg-center items-center mb-44 lg:mb-0 products ${
        isProducts ? "zoomed" : ""
      }`}
    >
      <div>
        <div className="flex justify-center items-center">
          <div className="overflow-hidden relative mx-96">
            <h1 className="text-primary text-2xl lg:text-6xl text-center lg:text-right leading-tight mx-10">جانب من خدمات الشركة العربية المتخصصة للاستشارات وتقنية المعلومات</h1>
            <button className="rounded-lg mt-12 mx-24 bg-secndary py-3 px-2 lg:px-10 text-white text-xl lg:text-2xl">تحدث مع مستشارينا</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
