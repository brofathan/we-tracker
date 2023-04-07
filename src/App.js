import './App.css';
import { Container } from './components/Container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Monday } from './pages/Monday';
import { Tuesday } from './pages/Tuesday';
import { Wednesday } from './pages/Wednesday';
import { Thursday } from './pages/Thursday';
import { Friday } from './pages/Friday';
import { Saturday } from './pages/Saturday';
import { Sunday } from './pages/Sunday';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <div className="App p-[20px]">
      <Container />
      <Router>
        <Routes>
          <Route path="/monday" element={<Monday />}/>
          <Route path="/tuesday" element={<Tuesday />}/>
          <Route path="/wednesday" element={<Wednesday />}/>
          <Route path="/thursday" element={<Thursday />}/>
          <Route path="/friday" element={<Friday />}/>
          <Route path="/saturday" element={<Saturday />}/>
          <Route path="/sunday" element={<Sunday />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
