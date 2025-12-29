import './App.css';
import Navbar from './components/Navbar'; 
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar about="About Us" />
      <Alert alert="This is alert dude" />
      
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform Heading="Enter your Text below" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
