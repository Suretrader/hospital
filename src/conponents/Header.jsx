import { Link, useLocation } from "react-router-dom";
import { Navbar, Dropdown, Avatar, DropdownHeader, DropdownItem, DropdownDivider, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, } from "flowbite-react";
import OurFriendLogo from '../assets/ourfriend-logo.png'


function Header() {
const location = useLocation()
const IsActive = (path) => location.pathname === (path)




  return (


    <>
     <header className="bg-blue-500 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
     <span>121 King st, melburone, Vic 3000</span> 
     <span>(800)569-7890</span>
      </div>

     </header>


      <Navbar fluid rounded className="shadow-md">
        <NavbarBrand as={Link} href="#">
          <img src={OurFriendLogo} className="mr-3 h-8 sm:h-9" alt="Our friend Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} to= "/" active={IsActive("/")}>
            Home
          </NavbarLink>


          <Dropdown className="drop" inline label='About'>
          <DropdownItem as={Link} to="/about">
          About us
          </DropdownItem>
          <DropdownItem as={Link} to="/founder">
          Founder
          </DropdownItem>
          <DropdownItem as={Link} to="/teams">
          Team
          
          </DropdownItem>

          </Dropdown>
          
          <NavbarLink as={Link} to= "/news" active={IsActive("/news")}>News</NavbarLink>
          <NavbarLink as={Link} to= "/contact" active={IsActive("/contact")}>Contact</NavbarLink>
          <NavbarLink as={Link} to= "/services"active={IsActive("/services")}>Services</NavbarLink>
          <NavbarLink as={Link} to= "/appointment"className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md">Book an Appointment</NavbarLink>
        </NavbarCollapse>
      </Navbar>
  
    </>

  );
}

export default Header
