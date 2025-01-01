"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WhoAreWe = () => {
  const sectionRef = useRef(null);
  const [isCover, setIsCover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCover(entry.isIntersecting && !isCover);
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
      className="bg-cover bg-center items-center"
    >
      <div className="relative top-44 lg:top-0">
        <div className="pt-40">
          <div className="flex flex-col lg:flex-row">
            <div className="image-container overflow-hidden lg:w-1/2 relative">
              <Image
                src="/who_we.png"
                width={1000}
                height={500}
                alt="Picture"
                className={`transition-transform duration-1000 ease-in-out ${
                  isCover ? "salim" : "ahmed"
                }`}
              />
              <div className="top-2 left-20 lg:left-40 lg:top-12 absolute">
                <div className="felx items-center justify-center">
                  <div className="mx-10 flex items-center">
                    <div>
                      <Image
                          src="/odoo.png"
                          width={250}
                          height={500}
                          alt="Picture"
                          className="lg:top-2 relative lg:mx-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`lg:relative lg:-top-96 px-1 lg:px-2 xl:px-10 py-1 md:py-12 lg:py-8 xl:py-24 backdrop-blur-md lg:mb-0 bg-primary/30 ${
                  isCover ? "animate-fadeOut" : "ahmed"
                }`}>
                <div className="felx items-center justify-center">
                  <div className="mx-10 flex items-center">
                    <div>
                      <Image
                          src="/Ellipse.png"
                          width={20}
                          height={500}
                          alt="Picture"
                          className="top-2 relative mx-5"
                      />
                    </div>
                    <div>
                      <Image
                          src="/masatext.png"
                          width={100}
                          height={500}
                          alt="Picture"
                      />
                      <Image
                          className="-top-3 relative"
                          src="/Ligne.png"
                          width={100}
                          height={500}
                          alt="Picture"
                      />
                    </div>
                  </div>
                  <div className="mx-5">
                    <p className="text-primary">
                    يشرح محمد قائلاً: « لقد غيرت منصة Odoo المستندة إلى السحابة قواعد اللعبة بالنسبة لنا ». « لقد سمح لنا بتخزين البيانات الهامة بشكل آمن في السحابة، مما أدى إلى تعزيز كفاءتنا التشغيلية والتطبيق العملي. في السابق، كان استرداد المعلومات أو إدارة المهام مثل المبيعات والتسعير وإدارة البائعين وجهات الاتصال يتطلب بحثًا مكثفًا. »
                    </p>
                    <div>
                      <hr className="text-primary text-5xl border-1 border-primary mt-12"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary col-span-2 py-12 relative">
              <div className="mx-10 flex items-center text-center justify-content-center px-10 md:px-20 lg:px-40">
                <div>
                  <Image
                      src="/Ellipsewho.svg"
                      width={20}
                      height={500}
                      alt="Picture"
                      className="top-2 relative mx-5"
                  />
                </div>
                <div>
                  <p className="text-3xl text-white border-b-2">الرؤية</p>
                </div>
              </div>
              <div className="px-20 lg:px-60 my-8">
                <p className="text-white text-xl">أن نكون الخيار الاول لعملائنا في رحلة التحول الرقمي</p>
              </div>
              <div className="mx-10 flex items-center text-center justify-content-center px-10 md:px-20 lg:px-40">
                <div>
                  <Image
                      src="/Ellipsewho.svg"
                      width={20}
                      height={500}
                      alt="Picture"
                      className="top-2 relative mx-5"
                  />
                </div>
                <div>
                  <p className="text-3xl text-white border-b-2">الرسالة</p>
                </div>
              </div>
              <div className="px-20 lg:px-60 my-8">
                <p className="text-white text-xl">تمكين المؤسسات من مواكبة متطلبات العصر الرقمي من خلال تطوير وتنفيذ ورقمنة أعمالها ونقل المعرفة المطلوبة لإستدامة التحول الرقمي</p>
              </div>
              <div className="mx-10 flex items-center text-center justify-content-center px-10 md:px-20 lg:px-40">
                <div>
                  <Image
                      src="/Ellipsewho.svg"
                      width={20}
                      height={500}
                      alt="Picture"
                      className="top-2 relative mx-5"
                  />
                </div>
                <div>
                  <p className="text-3xl text-white border-b-2">ما نؤمن به</p>
                </div>
              </div>
              <div className="mx-10 mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center py-10">
                <div>
                  <div className="flex justify-center">
                    <Image
                      src="/stratigy.png"
                      width={150}
                      height={500}
                      alt="Picture"
                    />
                  </div>
                  <h3 className="text-white text-3xl mt-4">الإستراتيجية</h3>
                  <p className="mt-4 text-xl text-white mx-10">
                    الإستراتيجية موضع بناء الميزات التنافسية  
                  </p>
                </div>
                <div>
                  <div>
                    <div className="flex justify-center">
                      <Image
                        src="/idea.png"
                        width={126}
                        height={500}
                        alt="Picture"
                      />
                    </div>
                    <h3 className="text-white text-3xl mt-4">ثقافة الإبتكار</h3>
                    <p className="mt-4 text-xl text-white mx-10">
                    التقنية هي وسيلة توصيل القيمة التنافسية 
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex justify-center">
                      <Image
                        src="/tech.png"
                        width={150}
                        height={500}
                        alt="Picture"
                      />
                    </div>
                    <h3 className="text-white text-3xl mt-4">التقنية والإتصالات</h3>
                    <p className="mt-4 text-xl text-white mx-10">
                    التقنية هي وسيلة توصيل القيمة التنافسية 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/Groupe.png"
            width={100}
            height={500}
            alt="Picture"
            className="top-44 right-96 absolute mx-72 hidden lg:block"
          />
          <Image
            src="/Groupe2.png"
            width={100}
            height={500}
            alt="Picture"
            className="top-96 mt-60 right-48 absolute mx-52 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
