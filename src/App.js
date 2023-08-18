
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Bootstrap from 'react-bootstrap';
import Navigation from './Components/Navigation';
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// import Team from './Components/Team';
import Project from './Components/Project';
import Blogs from './Components/Blogs';
import Services from './Components/Services';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App row mx-0">
      <BrowserRouter>
        <div className='col-2 px-0 nav mx-0'>
          <Navigation />
        </div>
        <div className='col-10 mx-0 px-0'>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Components/About" element={<About />} />
            <Route path="/Components/Services" element={<Services />} />
            <Route path="/Components/Project" element={<Project />} />
            {/* <Route path="/Components/Team" element={<Team />} /> */}
            <Route path="/Components/Blogs" element={<Blogs />} />
            <Route path="/Components/Contact" element={<Contact />} />
            {/* <Route path="/Components/Footer" element={<Footer />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
