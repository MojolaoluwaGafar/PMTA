import './App.css'
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import ApplicationForm from "./pages/ApplicationForm";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from './components/Footer';
import NameGenerator from "./pages/NameGenerator"
import About from './pages/About';
import Talent from './pages/Talent';



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/talent" element={<Talent />} />
        {/* <Route path="/name-generator" element={<NameGenerator />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
