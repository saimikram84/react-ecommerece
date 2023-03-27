import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
