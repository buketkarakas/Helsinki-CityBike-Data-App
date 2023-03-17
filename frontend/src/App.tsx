import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Journeys from './components/Journeys';
import NavBar from './components/Navbar';
import Stations from './components/Stations';
import Station from './components/Station';

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
          <Route path="/station/:id" element={<Station/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
