import { CNavbar,CContainer,CNavbarBrand,CNavbarToggler,CCollapse,CNavItem,CNavbarNav,CNavLink,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider,CForm,CFormInput,CButton} from '@coreui/react'

import React , {useState} from 'react'
import './nav.css'

function Navbar() {
  const [visible, setVisible] = useState(false)

  return (
  
    <div className="navbar">
      <div className="navbarcontainer">
      <ul className='nav-menu'>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
  
        <CContainer fluid>
  
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
  
          <CNavbarToggler onClick={() => setVisible(!visible)} />
  
          <CCollapse className="navbar-collapse" visible={visible}>
         
            <CNavbarNav>
            <li className="nav-links">
              <CNavItem>
            
                <CNavLink href="#" active>
  
                  Home
  
                </CNavLink>
           
              </CNavItem>
              </li>
  
              <li className="nav-links">
              <CNavItem>
  
                <CNavLink href="/">Link</CNavLink>
  
              </CNavItem>
  </li>
  <li className="nav-links">
              <CDropdown variant="nav-item" popper={false}>
  
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
  
                <CDropdownMenu>
  
                  <CDropdownItem href="#">Action</CDropdownItem>
  
                  <CDropdownItem href="#">Another action</CDropdownItem>
  
                  <CDropdownDivider />
  
                  <CDropdownItem href="#">Something else here</CDropdownItem>
  
                </CDropdownMenu>
  
              </CDropdown>
              </li>
              <li className="nav-links">
              <CNavItem>
  
                <CNavLink href="#" disabled>
  
                  Disabled
  
                </CNavLink>
  
              </CNavItem>
              </li>

            </CNavbarNav>
         
            <CForm className="d-flex">
  
              <CFormInput type="search" className="me-2" placeholder="Search" />
  
              <CButton type="submit" color="success" variant="outline">
  
                Search
  
              </CButton>
  
            </CForm>
  
          </CCollapse>

  
        </CContainer>
  
      </CNavbar>
      </ul>
      </div>
    </div>
  
  )
}

export default Navbar