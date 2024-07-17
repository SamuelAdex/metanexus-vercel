import Customized from "@/components/layout/Customized";
import Features from "@/components/layout/Features";
import Footer from "@/components/layout/Footer";
import Gaming from "@/components/layout/Gaming";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Participate from "@/components/layout/Participate";
import Partners from "@/components/layout/Partners";
import Preview from "@/components/layout/Preview";
import Showcase from "@/components/layout/Showcase";
import Social from "@/components/layout/Social";
import Token from "@/components/layout/Token";
import Trade from "@/components/layout/Trade";
import Whitelist from "@/components/layout/Whitelist";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Showcase />
      <Preview />    
      <Participate />
      <Customized />
      <Trade />
      <Social />
      <Gaming />
      <Token />
      <Partners />
      <Features />
      <Whitelist />
      <Footer />
    </main>
  );
}
