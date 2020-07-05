import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <Navbar dark color='primary' expand='md' className='bg-primary justify-content-between'>
            <NavbarToggler onClick={toggle} />
            <NavbarBrand className='ml-4' tag={Link} to='/home'>
                <h3 className='d-none d-md-block text-white'>Startup Management</h3>
                <h5 className='d-md-none text-white'>Startup Management</h5>
            </NavbarBrand>
            <Collapse style={{ flexGrow: 0 }} isOpen={isOpen} navbar>
                <Nav className='mr-auto' navbar>
                    {/* <NavItem>
                            <NavLink tag={Link} to='/home/dashboard'>Dashboard</NavLink>
                        </NavItem> */}
                </Nav>
                <UncontrolledDropdown>
                    <DropdownToggle tag="span">
                        <img
                            className='avatar'
                            height='20'
                            alt=''
                            src='https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
                        // src='https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/048_girl_avatar_profile_woman_waiter_butler-512.png'
                        />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>Welcome!</DropdownItem>
                        <DropdownItem divider />
                        <Link to='/auth'>
                            <DropdownItem >Logout</DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Collapse>
        </Navbar>
    )
}

export default Header