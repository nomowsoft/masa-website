import type { Metadata } from "next";
import SuccessStoryClient from "./SuccessStoryClient";

export const metadata: Metadata = {
  title: "قصص النجاح",
  description:
    "اكتشف قصص نجاح عملاء ماسا للتقنية. شاهد كيف ساعدنا شركة المناهل القابضة وعملاء آخرين في التحول الرقمي باستخدام حلول Odoo.",
  openGraph: {
    title: "قصص النجاح | ماسا للتقنية والاستشارات",
    description:
      "تحولات رقمية ناجحة مع ماسا - شاهد تجارب عملائنا.",
  },
  alternates: {
    canonical: "/success_story",
  },
};

export default function SuccessStory() {
  return <SuccessStoryClient />;
}