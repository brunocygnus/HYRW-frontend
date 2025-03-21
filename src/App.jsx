import "./App.css";
import {Route, Routes} from "react-router-dom";

import Landing from "./views/Landing";
import MainNavBar from "./components/Common/MainNavBar";
import MainFooter from "./components/Common/MainFooter";
import About from "./views/About";
import Services from "./views/Services";

function App() {
  return (
    <div className='w-full flex flex-col items-center h-autp justify-center'>
      <MainNavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
