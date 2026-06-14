import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع ماسا للتقنية والاستشارات. أرسل لنا استفسارك، طلب عرض سعر، ملاحظة، شكوى، أو مقترح. نحن هنا لمساعدتك في رحلة التحول الرقمي.",
  openGraph: {
    title: "تواصل معنا | ماسا للتقنية والاستشارات",
    description:
      "تواصل معنا اليوم واحصل على استشارة مجانية.",
  },
  alternates: {
    canonical: "/contact_us",
  },
};

export default function Contact() {
  return <ContactClient />;
}
