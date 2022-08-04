import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VillaIcon from '@mui/icons-material/Villa';
import PeopleIcon from '@mui/icons-material/People';
function AdminSide() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>ADMIN</CSidebarBrand>

<CSidebarNav>


  <CNavItem href="/Agents">


Agents
<SupportAgentIcon />

  </CNavItem>
  <CNavItem href="/Addagents">


Add Agents 


  </CNavItem>


  <CNavItem href="/Ownerlist">

Owners

  </CNavItem>


    <CNavItem href="#">

Properties
<VillaIcon/>

    </CNavItem>

    <CNavItem href="/Tenantslist">

 Tenants
 <PeopleIcon/>

    </CNavItem>

</CSidebarNav>


</CSidebar>
    </div>
  )
}

export default AdminSide