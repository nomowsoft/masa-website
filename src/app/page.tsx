"use client";
"use client";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import Hero from "./Home/hero/hero";
import CustomerExperiences from "./Home/customer_experiences/customer_experiences"
import Services from "./Home/services/services"
import Products from "./Home/products/products"
import Customer from "./Home/customer/customer"


export default function Home() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div className="bg-primary">
      <Hero />
      <CustomerExperiences />
      <Services />
      <Products />
      <Customer />
    </div>
  );
}
