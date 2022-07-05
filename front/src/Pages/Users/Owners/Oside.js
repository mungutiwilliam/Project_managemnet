import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Oside() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>Sidebar Brand</CSidebarBrand>

<CSidebarNav>

  <CNavTitle>Nav Title</CNavTitle>

  <CNavItem href="/Table">


Tenants

  </CNavItem>

  <CNavItem href="#">



    With badge

    <CBadge color="primary ms-auto">NEW</CBadge>

  </CNavItem>

  <CNavGroup toggler="Nav dropdown">

    <CNavItem href="#">

 Nav dropdown item

    </CNavItem>

    <CNavItem href="#">

 Nav dropdown item

    </CNavItem>

  </CNavGroup>

</CSidebarNav>

<CSidebarToggler />

</CSidebar>
    </div>
  )
}

export default Oside