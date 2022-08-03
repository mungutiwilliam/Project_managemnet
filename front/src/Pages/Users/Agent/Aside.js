import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Aside() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>Agent</CSidebarBrand>

<CSidebarNav>

  <CNavItem href="/TenantsInfo">


Tenants

  </CNavItem>

  <CNavItem href="#">


Add Tenants

  </CNavItem>


    <CNavItem href="#">

Properties

    </CNavItem>

 <CNavItem href="/Flagged">

Flagged Issues

</CNavItem>


</CSidebarNav>


</CSidebar>
    </div>
  )
}

export default Aside