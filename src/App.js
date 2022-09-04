import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import BudgetForm from "./components/forms/BudgetForm";
import HrRequirementForm from "./components/forms/HrRequirementForm";
import TravellingForm from "./components/forms/TravellingForm";
import Footer from "./components/UI/Footer";
import Space from "./components/Header/Space";
import Home from "./Home";

function App() {

  
  return (
    <>
      <Navbar />
      <div className="container">
      <Space />
      <Routes>
        <Route path="/form1" element={<HrRequirementForm /> } />
        <Route path="/form2" element={<BudgetForm />} />
        <Route path="/form3" element={<TravellingForm />} />
      </Routes>
      </div>
      {/* <Home/> */}
      <Footer />
    </>
  );
}

export default App;
