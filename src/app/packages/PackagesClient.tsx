"use client";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import Package from './package';


export default function PackagesClient() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div className="bg-primary">
        <Package />
    </div>
  );
}
