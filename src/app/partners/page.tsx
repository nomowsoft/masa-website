import type { Metadata } from "next";
import PartnersClient from "./PartnersClient";

export const metadata: Metadata = {
  title: "شركاء النجاح",
  description:
    "شركاء ماسا العالميون: Microsoft، Odoo، Oracle Cloud. نفتخر بشراكتنا مع رواد التقنية العالميين لتقديم أحدث الحلول التقنية.",
  openGraph: {
    title: "شركاء النجاح | ماسا للتقنية والاستشارات",
    description:
      "شراكات استراتيجية مع Microsoft و Odoo و Oracle لتقديم أفضل الحلول.",
  },
  alternates: {
    canonical: "/partners",
  },
};

export default function Partners() {
  return <PartnersClient />;
}