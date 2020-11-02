import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { APP_NAME } from '../config';
import { logout, isAuth } from '../actions/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let tempDate = new Date();
  const date = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() ;

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <Link href="/" className="mr-auto">
          <NavLink style={{ cursor: 'pointer' }}>{date}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/login">
                    <NavLink style={{ cursor: 'pointer' }}>Login</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/register">
                    <NavLink style={{ cursor: 'pointer' }}>Register</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{ cursor: 'pointer' }}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/faculty">
                  <NavLink style={{ cursor: 'pointer' }}>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onClick={() => logout(() => Router.replace(`/login`))}>
                  logout
                </NavLink>
              </NavItem>
            )}
            {isAuth()&&  isAuth().role === 1 &&(
              <Link href="/list-reports">
                <NavLink style={{ cursor: 'pointer' }}>Reports</NavLink>
              </Link>
            )}
            {isAuth()&&  isAuth().role === 0 &&(
            <Link href="/list-all-reports">
              <NavLink style={{ cursor: 'pointer' }}>All-Reports</NavLink>
            </Link>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;