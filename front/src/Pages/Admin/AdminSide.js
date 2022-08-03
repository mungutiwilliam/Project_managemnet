import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function AdminSide() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>ADMIN</CSidebarBrand>

<CSidebarNav>


  <CNavItem href="/Table">


Agents

  </CNavItem>

  <CNavItem href="#">

Owners

  </CNavItem>


    <CNavItem href="#">

Properties

    </CNavItem>

    <CNavItem href="#">

 Tenants

    </CNavItem>

</CSidebarNav>


</CSidebar>
    </div>
  )
}

export default AdminSide