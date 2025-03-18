import ClientsReview from "../components/Landing/ClientsReview";
import Hero from "../components/Landing/Hero";
import ServicesSection from "../components/Landing/ServicesSection";
import WhatsNew from "../components/Landing/WhatsNew";

export default function Landing() {
  return (
    <div className='w-full flex flex-col '>
      <Hero />
      <ServicesSection />
      <ClientsReview />
      <WhatsNew />
    </div>
  );
}
