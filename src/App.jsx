import "./App.css";
import {Route, Routes} from "react-router-dom";

import NavBar from "./Components/NavBar";
import Landing from "./views/Landing";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='w-full flex flex-col items-center h-autp justify-center'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
