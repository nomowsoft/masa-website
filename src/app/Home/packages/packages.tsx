"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";


const Packages = () => {

  return (
    <section className="items-center relative">
        <div className="mx-10 text-center">
          <div className="">
              <div className="">
                <Image
                  src="/packagees/Rectangle.svg"
                  width={2000}
                  height={500}
                  layout="responsive"
                  priority
                  alt="Picture"
                />
              </div>
          </div>
        </div>
        <div className="md:mx-44 lg:mx-44 xl:mx-96 top-52 -mt-80 mb-60 md:mb-0 md:-top-32 md:-mt-60 lg:-top-44 lg:-mt-60 xl:-top-96 xl:-mt-80 relative">
          <div>
            <h1 className="lg:text-xl xl:text-3xl text-primary md:mt-24 lg:my-16 text-center">
              نقدم ثلاث طرق لتنفيذ Odoo مصممة لتناسب حجم واحتياجات شركتك.
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 mt-4">
            <div className="flex justify-center items-center">
              <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shado">
                  <div className="bg-primary rounded-t-3xl py-10 pr-12 text-white">
                    <p className="text-sm">
                    مناسب للشركات الصغيرة
                    </p>
                    <p className="text-3xl mt-3">
                    باقة الانطلاق
                    </p>
                    <p className="text-sm mt-3 text-yellow-500 ml-20">
                      <span>اشتراك</span>
                      <span className="text-2xl mx-1">5</span>
                      <span>سنوات وأحصل على </span>
                    </p>
                    <p className="text-sm mt-3 text-yellow-500 ml-20">
                      <span>التنفيذ والتدريب مجانا</span>
                    </p>
                  </div>
                  <div className="py-4 pr-12">
                    <div className="mt-2">
                      <p className="text-primary text-xl">
                        تحليل الأعمال
                      </p>
                      <p className="text-primary text-sm mt-1">
                        غير متوفر
                      </p>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            نهج التنفيذ:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          الميزات العادية لأودو
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            إدارة المشروع:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          نصائح فقط
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            دورة تدريبية
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            تنفيذ:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          تطبيق واحد في كل مرة
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            تخصيص:
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          غير متوفر او بسيط
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            اندماج:
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          غير متوفر 
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div>
                        <p className="text-primary text-xl">
                          استضافة:
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            اودوو عبر الأنترنت
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            باقة السحابة
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div>
                        <p className="text-primary text-xl">
                          باقة الدعم:
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            العادي SLA
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            أحترافي SLA
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 mb-6 mx-7">
                    <button className="rounded-2xl mt-12 bg-primary py-3 text-white text-xl">
                      <div className="flex justify-between">
                        <div className="mr-6">
                          <p className="text-white text-sm">
                            مزيد من المعلومات
                          </p>
                        </div>
                        <div className="mr-20 ml-6">
                          <FaArrowLeft />
                        </div>
                      </div>
                    </button>
                  </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shado">
                  <div className="bg-primary rounded-t-3xl pt-10 pb-24 pr-12 text-white">
                    <p className="text-sm">
                    مناسب للشركات الصغيرة والمتوسطة
                    </p>
                    <p className="text-3xl mt-3">
                    باقة الأعمال
                    </p>
                    <hr className="w-16 mt-2 border border-green-500" />
                  </div>
                  <div className="py-4 pr-12">
                    <div className="mt-2">
                      <p className="text-primary text-xl">
                        تحليل الأعمال
                      </p>
                      <p className="text-primary text-sm mt-1">
                        غير متوفر
                      </p>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            نهج التنفيذ:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          الميزات العادية لأودو
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            إدارة المشروع:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          نصائح فقط
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            دورة تدريبية
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            تنفيذ:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          تطبيق واحد في كل مرة
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            تخصيص:
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          غير متوفر او بسيط
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            اندماج:
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          غير متوفر 
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div>
                        <p className="text-primary text-xl">
                          استضافة:
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            اودوو عبر الأنترنت
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            باقة السحابة
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div>
                        <p className="text-primary text-xl">
                          باقة الدعم:
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            العادي SLA
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            أحترافي SLA
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 mb-6 mx-7">
                    <button className="rounded-2xl mt-12 bg-primary py-3 text-white text-xl">
                      <div className="flex justify-between">
                        <div className="mr-6">
                          <p className="text-white text-sm">
                            مزيد من المعلومات
                          </p>
                        </div>
                        <div className="mr-20 ml-6">
                          <FaArrowLeft />
                        </div>
                      </div>
                    </button>
                  </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shado">
                  <div className="bg-primary rounded-t-3xl pt-10 pb-24 pr-12 text-white">
                    <p className="text-sm">
                    مناسب للشركات المتوسطة والكبيرة
                    </p>
                    <p className="text-3xl mt-3">
                    الباقة الاحترافية
                    </p>
                    <hr className="w-16 mt-2 border border-red-500" />
                  </div>
                  <div className="py-4 pr-12">
                    <div className="mt-2">
                      <p className="text-primary text-xl">
                        تحليل الأعمال
                      </p>
                      <p className="text-primary text-sm mt-1">
                        غير متوفر
                      </p>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            نهج التنفيذ:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          الميزات العادية لأودو
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            إدارة المشروع:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          نصائح فقط
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            دورة تدريبية
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            تنفيذ:
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          تطبيق واحد في كل مرة
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            تخصيص:
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          غير متوفر او بسيط
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-xl">
                            اندماج:
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-primary text-sm mt-1">
                          غير متوفر 
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div>
                        <p className="text-primary text-xl">
                          استضافة:
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            اودوو عبر الأنترنت
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            باقة السحابة
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-6">
                      <div>
                        <p className="text-primary text-xl">
                          باقة الدعم:
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            العادي SLA
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-primary text-sm mt-1">
                            أحترافي SLA
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/packagees/check.png"
                            width={15}
                            height={500}
                            alt="Picture"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 mb-6 mx-7">
                    <button className="rounded-2xl mt-12 bg-primary py-3 text-white text-xl">
                      <div className="flex justify-between">
                        <div className="mr-6">
                          <p className="text-white text-sm">
                            مزيد من المعلومات
                          </p>
                        </div>
                        <div className="mr-20 ml-6">
                          <FaArrowLeft />
                        </div>
                      </div>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Packages;
