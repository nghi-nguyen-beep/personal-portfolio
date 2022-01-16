import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Art from './pages/art';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App-main">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/art' element={<Art/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path="*" element={ <p>404 Error</p> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
