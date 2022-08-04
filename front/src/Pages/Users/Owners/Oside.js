import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Oside() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>OWNER</CSidebarBrand>

<CSidebarNav>

  <CNavItem href="/Table">


Tenants

  </CNavItem>

  <CNavItem href="/addprop">



Add Property

    <CBadge color="primary ms-auto">Properties</CBadge>

  </CNavItem>


    <CNavItem href="#">

 Properties

    </CNavItem>

    <CNavItem href="#">

 Payments

    </CNavItem>

</CSidebarNav>


</CSidebar>
    </div>
  )
}

export default Oside