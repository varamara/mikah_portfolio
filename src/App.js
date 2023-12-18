import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
