import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Form4 from "./components/forms/Form4";
import Form5 from "./components/forms/Form5";
import Form6 from "./components/forms/Form6";
import Footer from "./components/UI/Footer";
import Space from "./components/Header/Space";

function App() {
  return (
    <>
      <Navbar />
      <Space />
      <Routes>
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/form5" element={<Form5 />} />
        <Route path="/form6" element={<Form6 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
