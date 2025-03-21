import CommonIssues from "../components/ServicesPage/CommonIssues";
import CouplesTherapy from "../components/ServicesPage/CouplesTherapy";
import IndividualTherapy from "../components/ServicesPage/IndividualTherapy";
import ServiceHero from "../components/ServicesPage/ServiceHero";
import ServicesCTA from "../components/ServicesPage/ServicesCTA";
import SexTherapy from "../components/ServicesPage/SexTherapy";
import WeCanHelp from "../components/ServicesPage/WeCanHelp";
import {getCouplesIssues} from "../components/ServicesPage/couplesIssues";
import {getSexTherapyIssues} from "../components/ServicesPage/sexIssues";

export default function Services() {
  return (
    <div className='w-full flex flex-col'>
      <ServiceHero />
      <IndividualTherapy />
      <CommonIssues />
      <CouplesTherapy />
      <WeCanHelp issues={getCouplesIssues()} />
      <SexTherapy />
      <WeCanHelp issues={getSexTherapyIssues()} />
      <ServicesCTA />
    </div>
  );
}
