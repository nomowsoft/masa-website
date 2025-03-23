"use client";
import { service } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import ContactUsService from "./contact_us_service";
import { motion, AnimatePresence } from "framer-motion";
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  body?: string;
}

const ServicesContactUs = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const togglePopup = (item: ServiceItem) => {
    setSelectedService(item);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <section>
      <div className="bg-gray-100 pt-44 pb-12 bg-about3 bg-contain bg-no-repeat">
        <div data-aos="fade-down" className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-5xl text-success mb-8">الخدمات</h1>
          <h1 className="text-4xl mt-2 text-success">حلول مبتكرة لمستقبل أفضل</h1>
          <p className="mt-8 text-xl md:text-2xl text-justify lg:text-center text-gray-600 mx-10">
             نقدم لك أحدث الحلول التقنية اللي ترفع مستوى أعمالك وتسهّل عليك كل شيء! سواء كنت تحتاج تطوير أنظمة، تحسين عمليات، أو حتى دعم فني، إحنا هنا نخدمك بأعلى معايير الجودة والاحترافية.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 mx-10">
          {service?.map((item: ServiceItem) => (
            <div
              className="text-success p-4 text-right w-full md:w-1/5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rounded-xl"
              key={item.id}
              onClick={() => togglePopup(item)}
            >
              <div className="flex justify-center">
                <div className="bg-white rounded-md flex justify-center items-center p-2 mt-2">
                  <Image src={item.image} alt="" height={100} width={100} />
                </div>
              </div>
              <div className="mt-4 font-extrabold text-xl text-center">
                <h1>{item.title}</h1>
                <div className="flex justify-center">
                  <Image
                    src="/service/line.png"
                    alt=""
                    height={10}
                    width={100}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isPopupOpen && selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={closePopup}
              >
                &times;
              </button>
              <div className="text-center">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <h2 className="text-3xl font-bold text-success mt-4">
                  <span>{selectedService.title}</span>
                </h2>
                <h2 className="text-2xl font-bold text-success mt-4">
                  <span>{selectedService.description}</span>
                </h2>
                <p className="mt-4 text-gray-600 text-xl">
                  {selectedService.body || "تفاصيل الخدمة غير متوفرة."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactUsService />
    </section>
  );
};

export default ServicesContactUs;