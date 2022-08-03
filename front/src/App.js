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
import Tenant from './Pages/Users/Tenants/Tenant';
import Issues from './Pages/Users/Tenants/Issues';
import Issueflag from './Pages/Users/Agent/Issueflag';
import Addagent from './Pages/Admin/Addagent';
import Agents from './Pages/Admin/Agents';
import Ownerlist from './Pages/Admin/Ownerlist';
import Tenants from './Pages/Admin/Tenants';



function App() {
  return (
    <BrowserRouter>
      <Navmenu/>
  
      <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/agent" element={ <Mgent/> } />
      <Route exact path="/owner" element={ <Owners/> } />
      <Route exact path="/addprop" element={ <AddProperty/> } />
      <Route exact path="/TenantsInfo" element={ <Atable/>}/>
      <Route exact path="/admin" element={ <Adminhome/>}/>
      <Route exact path="/tenant" element={ <Tenant/>}/>
      <Route exact path="/issueflag" element={ <Issues/>}/>
      <Route exact path="/Flagged" element={ <Issueflag/>}/>
      <Route exact path="/Addagents" element={ <Addagent/>}/>
      <Route exact path="/Agents" element={ <Agents/>}/>
      <Route exact path="/Ownerlist" element={ <Ownerlist/>}/>
      <Route exact path="/Tenantslist" element={ <Tenants/>}/>
      
      </Routes>
    </BrowserRouter>
  
    );
}

export default App;
