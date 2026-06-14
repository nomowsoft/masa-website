import type { Metadata } from "next";
import SectorsPage from "./SectorsClient";

export const metadata: Metadata = {
  title: "القطاعات",
  description:
    "نقدم حلول Odoo المتكاملة لمختلف القطاعات: الخدمات، الصناعة، التعليم، التجزئة، الجمعيات الخيرية، والعقارات. اكتشف كيف نساعدك في التحول الرقمي.",
  openGraph: {
    title: "القطاعات | ماسا للتقنية والاستشارات",
    description:
      "حلول رقمية متكاملة لمختلف القطاعات بصفتنا شريكًا ذهبيًا لـ Odoo.",
  },
  alternates: {
    canonical: "/sectors",
  },
};

export default SectorsPage;