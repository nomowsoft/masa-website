"use client";

import Hero from "./Home/hero/hero";
import ImportantClients from "./Home/important_clients/important_clients"
import CustomerExperiences from "./Home/customer_experiences/customer_experiences"
import WhoAreWe from "./Home/who_are_we/who_are_we"
import Services from "./Home/services/services"
import Products from "./Home/products/products"

export default function Home() {

  return (
    <div>
      <Hero />
      <ImportantClients />
      <CustomerExperiences />
      <WhoAreWe />
      <Services />
      <Products />
    </div>
  );
}
