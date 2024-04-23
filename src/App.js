import logo from './logo.svg';
import './App.css';
import LandingScreen from './screen/LandingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingScreen/>
      <Footer/>
    </div>
  );
}

export default App;
