"use client";
"use client";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import Hero from "./Home/hero/hero";
import ImportantCustomer from "./Home/important_customer/important_customer"
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
      <ImportantCustomer />
      <Services />
      <Products />
      <Customer />
    </div>
  );
}
