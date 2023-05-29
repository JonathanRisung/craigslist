import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/index';
import Footer from "./pages/footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
