import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Tside() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>TENANT</CSidebarBrand>

<CSidebarNav>

    <CNavItem href="/issueflag">

 Flag Issue

    </CNavItem>

    <CNavItem href="#">

 Payments

    </CNavItem>

</CSidebarNav>

</CSidebar>
    </div>
  )
}

export default Tside