import CommonIssues from "../../components/ServicesPage/CommonIssues";
import IndividualTherapy from "../../components/ServicesPage/IndividualTherapy";
import ServiceHero from "../../components/ServicesPage/ServiceHero";
import ServicesCTA from "../../components/ServicesPage/ServicesCTA";

export default function Services() {
  return (
    <div className='w-full flex flex-col'>
      <ServiceHero />
      <IndividualTherapy />
      <CommonIssues />
      <ServicesCTA />
    </div>
  );
}
