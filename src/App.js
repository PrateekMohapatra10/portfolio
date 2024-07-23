import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { NewContacts } from './components/NewContacts';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>   
      <Banner/>
      <Skills/> 
      <Project/>   
      <NewContacts/>   
      <Footer/>
    </div>
  );
}

export default App;
