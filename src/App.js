import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/about';
import Art from './pages/art';
import Projects from './pages/projects';
import Fixations from './pages/fixations';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    

    <div className="App-main">
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<About/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/art' element={<Art/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/fixations' element={<Fixations/>} />
          <Route path="*" element={ <p>404 Error</p> } />
        </Routes>
        </AnimatePresence>
      <footer className="site-footer">
        <p>
          Last updated: <time dateTime="2026-11-05">November 5, 2026</time>
        </p>
      </footer>
    </div>
  );
}

export default App;
