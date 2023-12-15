import './App.css';
import "./scss/style.scss";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Expo from './pages/Expo';
import ExpoDetail from './components/ExpoDetail';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
     
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exposants" element={<Expo />} />
      <Route path="/exposants/*" element={<Expo />} />
      <Route path="/exposants/:id" element={<ExpoDetail />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
