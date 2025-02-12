"use client";
"use client";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import Customer from "./Home/customer/customer"
import Hero from './Home/hero/hero';
import Numbers from './Home/numbers/numbers';
import About from './Home/about_us/about';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Numbers />
      <Customer />
    </div>
  );
}
