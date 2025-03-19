"use client";
import Image from "next/image";
import { useState } from "react";
import { Sector } from "@/utils/types";
import { motion, AnimatePresence } from "framer-motion";

interface SectorItemProps {
  sector: Sector;
}

export const SectorItem = ({ sector }: SectorItemProps) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen((prev) => !prev);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {/* Sector Item */}
      <div className="md:w-1/2 lg:w-1/4 p-4">
        <div
          className="text-success p-4 text-right w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rounded-xl cursor-pointer"
          onClick={togglePopup}
        >
          <div className="flex justify-center">
            <div className="bg-white rounded-md flex justify-center items-center p-2 mt-2">
              <Image src={sector.image} alt="" height={100} width={100} />
            </div>
          </div>
          <div className="mt-4 font-extrabold text-xl text-center">
            <h1>{sector.title}</h1>
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
      </div>

      {/* Popup with Animation */}
      <AnimatePresence>
        {isPopupOpen && (
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
                  src={sector.image}
                  alt={sector.title}
                  height={100}
                  width={100}
                  className="mx-auto"
                />
                <h2 className="text-3xl font-bold text-success mt-4">
                  {sector.title}
                </h2>
                <div className="mt-4 text-gray-600 text-right">
                  <h3 className="text-2xl font-bold mb-2">{sector.quation}</h3>
                  <p className="mb-4 text-xl">{sector.body.split('\n')[0]}</p>
                  <h4 className="text-2xl font-bold mb-2">قدراتنا في هذا المجال:</h4>
                  <ul className="list-disc list-inside text-xl">
                    {sector.body.split('\n').slice(1).map((line, index) => (
                      <li key={index}>{line.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};