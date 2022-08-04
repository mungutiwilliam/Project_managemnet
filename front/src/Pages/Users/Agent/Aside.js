import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VillaIcon from '@mui/icons-material/Villa';
import PeopleIcon from '@mui/icons-material/People';
import FlagIcon from '@mui/icons-material/Flag';
function Aside() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>Agent<SupportAgentIcon /></CSidebarBrand>

<CSidebarNav>

  <CNavItem href="/TenantsInfo">


Tenants
<PeopleIcon/>
  </CNavItem>

  <CNavItem href="/Addtenant">


Add Tenants

  </CNavItem>


    <CNavItem href="/Propertylist">

Properties
<VillaIcon/>

    </CNavItem>

 <CNavItem href="/Flagged">

Flagged Issue<FlagIcon/>

</CNavItem>


</CSidebarNav>


</CSidebar>
    </div>
  )
}

export default Aside