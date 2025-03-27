import "./App.css";
import {Route, Routes} from "react-router-dom";

import Landing from "./views/Landing";
import MainNavBar from "./components/Common/MainNavBar";
import MainFooter from "./components/Common/MainFooter";
import About from "./views/About";
import Services from "./views/OurServices/Services";
import Therapists from "./views/Therapists";
import TherapistPage from "./views/TherapistPage";
import CouplesTherapyView from "./views/OurServices/CouplesTherapyView";
import SexTherapyView from "./views/OurServices/SexTherapyView";
import JoinTherapists from "./views/JoinTherapist";

function App() {
  return (
    <div className='w-full flex flex-col items-center h-autp justify-center'>
      <MainNavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/individual' element={<Services />} />
        <Route path='/services/couples' element={<CouplesTherapyView />} />
        <Route path='/services/sex-therapy' element={<SexTherapyView />} />
        <Route path='/therapists' element={<Therapists />} />
        <Route path='/join-us-as-a-clinician' element={<JoinTherapists />} />
        <Route path='/therapists/:name' element={<TherapistPage />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
