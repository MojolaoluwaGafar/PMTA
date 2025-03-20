import './App.css'
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import ApplicationForm from "./pages/ApplicationForm";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from './components/Footer';
import NameGenerator from "./pages/NameGenerator"



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/name-generator" element={<NameGenerator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
