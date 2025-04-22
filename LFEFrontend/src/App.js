import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Homemain from "./Components/Homemain/Homemain";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Pages/About/Aboutus";
import Equipmentpage from "./Pages/Equipmentpage/Equipmentpage";
import Contactus from "../src/Components/Homesection1/Contactus";
 import Payment from "./Pages/Contactus/Payment";
// import { useNavigate } from "react-router-dom";


 
function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Equipmentspage" element={<Equipmentpage />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Payment" element={<Payment />} />
        {/* <Route path="/subEquipment" element={<SubEquipment />} />

        <Route path="/subEquipment/:categoryId" element={<SubEquipment />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
