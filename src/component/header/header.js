
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { NavLink ,Link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './header.css';
import PrimeLogo from './prime-video-logo.jpg'
import UserAvatar from './user.jpeg'
function Header() {
  return (
    <div style={{ position: 'relative',backgroundColor:"black" }}>
      <nav className='container-fluid stickyNavbar' >
        <div>
          <img id='logo' src={PrimeLogo} alt="logo" />
        </div>
        <ul>
          <NavLink to="/search" ><li><SearchOutlined style={{ fontSize: "1.5rem" }} /></li></NavLink>
          <NavLink to="/home" style={{ textDecoration: "none", color: "white" }}><li>Home</li></NavLink>
          <NavLink to="/movies"  style={{ textDecoration: "none", color: "white" }}><li>movies</li></NavLink>
          <NavLink to="/series" style={{ textDecoration: "none", color: "white" }}> <li>TV</li></NavLink>
          <NavLink to="/wishlist" style={{ textDecoration: "none", color: "white" }}><li>wishlist</li></NavLink>
          <NavLink to="/favorite"  style={{ textDecoration: "none", color: "white" }}><li>favorite</li></NavLink>
          <Dropdown  style={{}}>
            <Dropdown.Toggle id="navbarDarkDropdownMenuLink" variant="dark">
              <img style={{ height: "30px", width: "30px", borderRadius: "50%", marginTop: "10px" }} src={UserAvatar} alt="user-avatar" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#"></Dropdown.Item>
              <Dropdown.Item href="#">Account Details</Dropdown.Item>
              <Dropdown.Item><NavLink to="/" style={{textDecoration:"none",color:"black"}}>logout</NavLink></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
    </div>
   
  );
}
export default Header;
