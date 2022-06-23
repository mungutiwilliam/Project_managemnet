import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navmenu from './Pages/Navbar/Navmenu';


function App() {
  return (
    <BrowserRouter>
      <Navmenu/>
  
      <Routes>

      </Routes>
    </BrowserRouter>
  
    );
}

export default App;
