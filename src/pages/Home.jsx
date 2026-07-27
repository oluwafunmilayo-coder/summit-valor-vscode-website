import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Industries from "../components/Industries";
import Problem from "../components/Problem";
import Transformation from "../components/Transformation";
import WhySummitValor from "../components/WhySummitValor";
import Services from "../components/Services";
import Process from "../components/Process";
import Blueprint from "../components/Blueprint";
import ClientStory from "../components/ClientStory";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
 <>
  <Navbar />
  <Hero />
  <TrustedBy />
  <Industries />
  <Problem />
  <Transformation />
  <WhySummitValor />
    <Services />
    <Process />
    <Blueprint />   
    <ClientStory />
    <Testimonials />
    <FAQ />
    <Footer />
</>

);
}
