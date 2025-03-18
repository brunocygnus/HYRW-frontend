import "./App.css";
import {Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import Landing from "./views/Landing";
import Footer from "./components/Footer";

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
