import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, MenuItem, Glyphicon, Badge, Row, Col } from 'react-bootstrap'
import { logoutUser } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import style from './style.css'

class AuthedHeader extends Component {
  render () {
    const { handleSignout, name, email } = this.props

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
              React App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey='1' title='my account' id='menu-dropdown'>
              <MenuItem className={style.dropdown}>
                <Row>
                  <Col sm={4}>image</Col>
                  <Col sm={8}>
                    <strong>{name}</strong>
                    <p>{email}</p>
                  </Col>
                </Row>
              </MenuItem>
              <MenuItem eventKey='1.1'>Settings<Glyphicon glyph='cog' className='pull-right' /></MenuItem>
              <MenuItem eventKey='1.2'>Statistics<Glyphicon glyph='stats' className='pull-right' /></MenuItem>
              <MenuItem eventKey='1.3'>Message<Badge pullRight>42</Badge></MenuItem>
              <MenuItem eventKey='1.4'>Favourites<Glyphicon glyph='heart' className='pull-right' /></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey='1.5' onClick={handleSignout}>Sign Out<Glyphicon glyph='log-out' className='pull-right' /></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSignout: () => {
    dispatch(logoutUser())
  }
})

export default connect(null, mapDispatchToProps)(AuthedHeader)
