import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/Components/Shared/NavbarSection";
import FooterSection from "@/Components/Shared/FooterSection";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-noto-sans-bengali",
});

export const metadata = {
  title: "সহযোগী - আপনার শিক্ষার সহায়ক",
  description:
    "সহযোগী একটি শিক্ষামূলক প্ল্যাটফর্ম যা শিক্ষার্থীদের জন্য বিভিন্ন বিষয়ের নোট, টিউটোরিয়াল এবং শিক্ষামূলক উপকরণ সরবরাহ করে। আমাদের লক্ষ্য হল শিক্ষার্থীদের শেখার প্রক্রিয়াকে সহজ এবং আরও কার্যকর করা।",
};

export default function RootLayout({ children }) {
  return (
    <html
      scroll="smooth"
      lang="en"
      suppressHydrationWarning
      className={`${notoSansBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sky-50 font-bengali">
        <NavbarSection />
        <main className="flex-grow">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
