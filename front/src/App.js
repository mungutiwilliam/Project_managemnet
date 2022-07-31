import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navmenu from './Pages/Navbar/Navmenu';
import Home from './Pages/Home/Home';
import Mgent from './Pages/Users/Agent/Mgent';
import Owners from './Pages/Users/Owners/Owners';
import AddProperty from './Pages/Users/Owners/Oproperty';
import Atable from './Pages/Users/Agent/Atable';
import Adminhome from './Pages/Admin/Adminhome';



function App() {
  return (
    <BrowserRouter>
      <Navmenu/>
  
      <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/agent" element={ <Mgent/> } />
      <Route exact path="/owner" element={ <Owners/> } />
      <Route exact path="/addprop" element={ <AddProperty/> } />
      <Route exact path="/Table" element={ <Atable/>}/>
      <Route exact path="/Admin" element={ <Adminhome/>}/>
      </Routes>
    </BrowserRouter>
  
    );
}

export default App;
