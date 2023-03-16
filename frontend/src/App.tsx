import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Journeys from './components/Journeys';
import NavBar from './components/Navbar';
import Stations from './components/Stations';

function App() {
  return (
    <div style={{ height: "100%" }} className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/home" element={<FrontPage/>}/>
          <Route path="/journeys" element={<Journeys/>}/>
          <Route path="/stations" element={<Stations/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
