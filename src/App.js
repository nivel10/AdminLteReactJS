//import logo from './logo.svg';
//import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="wrapper">

      {/* Preloader */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
      </div>

      <Header />
      <Menu />
      <Dashboard />
      <Footer />
      <Sidebar/>
    </div>
  );
}

export default App;
