import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "الخدمات",
  description:
    "خدمات ماسا للتقنية: تنفيذ مشاريع، دعم فني، استشارات تقنية، تكامل أنظمة، إدارة خدمات، وتدريب متخصص. حلول Odoo متكاملة لأعمالك.",
  openGraph: {
    title: "الخدمات | ماسا للتقنية والاستشارات",
    description:
      "تنفيذ مشاريع، دعم فني، استشارات، وتكامل أنظمة بأعلى معايير الاحترافية.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return <ServicesClient />;
}