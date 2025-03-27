import CouplesTherapy from "../../components/ServicesPage/CouplesTherapy";
import WeCanHelp from "../../components/ServicesPage/WeCanHelp";
import ServiceHero from "../../components/ServicesPage/ServiceHero";
import {getCouplesIssues} from "../../components/ServicesPage/couplesIssues";
import ServicesCTA from "../../components/ServicesPage/ServicesCTA";

export default function CouplesTherapyView() {
  return (
    <div className='w-full mt-12'>
      <ServiceHero/>
      <CouplesTherapy />
      <WeCanHelp issues={getCouplesIssues()} />
      <ServicesCTA/>
    </div>
  );
}
