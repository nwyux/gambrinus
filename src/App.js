import './App.css';
import "./scss/style.scss";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Expo from './pages/Expo';
import ExpoDetail from './components/ExpoDetail';
import Notfound from './pages/404';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
     
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/exposants" element={<Expo />} />
      <Route path="/exposants/*" element={<Expo />} />
      <Route path="/exposants/:id" element={<ExpoDetail />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
