"use client";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';

import ServicesContactUs from "@/components/services/services_contact_us"
const Services = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
  }, []);
  return (
    <section>
        <ServicesContactUs />
    </section>
  )
}

export default Services