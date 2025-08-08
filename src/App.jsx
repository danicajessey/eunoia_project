import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </Router>
  );
}

export default App;
