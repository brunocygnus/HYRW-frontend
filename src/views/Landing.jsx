import ClientsReview from "../Components/Landing/ClientsReview";
import Hero from "../Components/Landing/Hero";
import ServicesSection from "../Components/Landing/ServicesSection";
import WhatsNew from "../Components/Landing/WhatsNew";

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
