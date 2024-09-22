import localFont from "next/font/local";
import "./globals.css";
import "./style.css"
import Footer from "@/components/Footer";

const font = localFont({
  src: "./fonts/InstrumentSans.ttf",
  weight: "400",
});

export const metadata = {
  title: "Priyanshu Chahar - Portfolio",
  description: "Explore the portfolio of Priyanshu Chahar, a skilled programmer and web developer with expertise in building modern web applications using JavaScript, React, Next.js, and Node.js.",
  keywords: "Priyanshu Chahar, priyannxhuu, portfolio, programmer, web developer, full-stack developer, software engineer",
  openGraph: {
    title: "Priyanshu Chahar - Portfolio",
    description: "Explore the portfolio of Priyanshu Chahar, a skilled programmer and web developer.",
    url: "https://priyanshuchahar.vercel.app",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/165533860?v=4", 
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Chahar - Portfolio",
    description: "Explore the portfolio of Priyanshu Chahar, a skilled programmer and web developer.",
    images: ["https://avatars.githubusercontent.com/u/165533860?v=4"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}