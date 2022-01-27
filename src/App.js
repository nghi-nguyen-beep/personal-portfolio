import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/about';
import Art from './pages/art';
import Home from './pages/home';
import Projects from './pages/projects';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    

    <div className="App-main">
      <Navbar />
      <AnimatePresence exitBeforeEnter>   
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/art' element={<Art/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path="*" element={ <p>404 Error</p> } />
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
