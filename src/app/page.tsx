import Image from "next/image";
import SubHero from "@/components/SubHero";
import Hero from "@/components/Hero/Hero";
import Cards from "@/components/Cards";
import Niveis from "@/components/Niveis";
import Treinamentos from "@/components/Treinamentos";
import Footer from "@/components/Footer/Footer";
import CardsBottom from '@/components/Cards-bottom';
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero />
      <SubHero />
      <Cards />
      <CardsBottom />
      <Treinamentos />
      <Niveis />
      <Footer />
    </main >
  );
}
