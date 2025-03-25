import CouplesTherapy from "../../components/ServicesPage/CouplesTherapy";
import WeCanHelp from "../../components/ServicesPage/WeCanHelp";
import {getCouplesIssues} from "../../components/ServicesPage/couplesIssues";

export default function CouplesTherapyView() {
  return (
    <div className='w-full mt-16'>
      <CouplesTherapy />
      <WeCanHelp issues={getCouplesIssues()} />
    </div>
  );
}
