import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "الباقات",
  description:
    "اكتشف باقات ماسا للتقنية المتنوعة: باقة الإنطلاقة، باقة النمو، وباقة النخبة. حلول Odoo مصممة لتناسب احتياجات أعمالك ومرحلة نموك.",
  openGraph: {
    title: "الباقات | ماسا للتقنية والاستشارات",
    description: "باقات متنوعة تناسب جميع أحجام الأعمال.",
  },
  alternates: {
    canonical: "/packages",
  },
};

export default function Packages() {
  return <PackagesClient />;
}
