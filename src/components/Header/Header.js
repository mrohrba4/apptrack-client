import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// AUTHENTICATED
const authenticatedOptions = (
  <Fragment>
    {/* "Entries Link"*/}
    <Nav.Link href="#entries">Entries</Nav.Link>
    {/* "Create Entry Link"*/}
    <Nav.Link href="#create-entry">Create Entry</Nav.Link>
    {/* "CP Link"*/}
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    {/* "Sign-Out Link"*/}
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

 // UNAUTHENTICATED
const unauthenticatedOptions = (
  <Fragment>
    {/* "Sign-Up Link"*/}
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    {/* "Sign-In Link"*/}
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// ALWAYS
const alwaysOptions = (
  <Fragment>
    {/* "Home Link"*/}
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md" className="navbar1">
    <Navbar.Brand href="#">
      AppTrack
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
