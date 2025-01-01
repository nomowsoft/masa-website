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
      className={`bg-Products bg-center items-center lg:mb-0 lg-mt- products ${
        isProducts ? "zoomed" : ""
      }`}
    >
      <div>
        <div className="flex justify-center items-center">
          <div className="overflow-hidden relative mx-0 lg:mx-44 xl:mx-96 py-16 md:py-44 lg:py-44 xl:py-96">
            <div className="top-72">
              <button className="rounded-3xl bg-primary/60 border-2 border-dashed py-10 px-10 lg:py-20 text-white text-xl">
                <div className="flex justify-between">
                  <div className="mx-10 lg:mx-60">
                    <h1 className="text-4xl text-white" >منتجاتنا</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
