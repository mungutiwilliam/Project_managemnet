import React from 'react'
import { CSidebar,CSidebarBrand,CSidebarNav,CNavItem,CNavTitle,CBadge,CNavGroup,CSidebarToggler } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Tside() {
  return (
    <div>
      <CSidebar>

<CSidebarBrand>Sidebar</CSidebarBrand>

<CSidebarNav>

  <CNavTitle>Nav Title</CNavTitle>


  <CNavItem href="/property">



View Property

    <CBadge color="primary ms-auto">Properties</CBadge>

  </CNavItem>


    <CNavItem href="#">

 Flag Issue

    </CNavItem>

    <CNavItem href="#">

 Payments

    </CNavItem>

</CSidebarNav>

<CSidebarToggler />

</CSidebar>
    </div>
  )
}

export default Tside