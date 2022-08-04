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
import Auth from './Pages/Login & Signup/Auth';
import AddTenant from './Pages/Users/Agent/AddTenant';
import Property from './Pages/Users/Agent/Property';
import Flag from './Pages/Users/Agent/Flag';




function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Navmenu/>
  
      <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/Login" element={ user? <Home/>: <Auth/> } />
      <Route exact path="/owner" element={user?<Owners/> : <Auth/> } />
      <Route exact path="/addprop" element={ user? <Auth/>:<AddProperty/> } />
      <Route exact path="/TenantsInfo" element={user? <Auth/>:  <Atable/>}/>
      <Route exact path="/admin" element={user? <Tenant/>:<Home/>}/>
      <Route exact path="/tenant" element={ user? <Home/>:<Tenant/>}/>
      <Route exact path="/issueflag" element={user?<Home/>:<Issues/>}/>
      <Route exact path="/Flagged" element={ <Flag/>}/>
      <Route exact path="/Addagents" element={ <Addagent/>}/>
      <Route exact path="/Agents" element={ <Agents/>}/>
      <Route exact path="/Ownerlist" element={ <Ownerlist/>}/>
      <Route exact path="/Tenantslist" element={ <Tenants/>}/>
      <Route exact path="/AddTenant" element={ <AddTenant/>}/>
      <Route exact path="/Propertylist" element={ <Property/>}/>
      
      </Routes>
    </BrowserRouter>
  
    );
}

export default App;
