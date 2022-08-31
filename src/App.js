import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Footer from "./components/UI/Footer";
import Space from "./components/Header/Space";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Space />
      <Routes>
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
