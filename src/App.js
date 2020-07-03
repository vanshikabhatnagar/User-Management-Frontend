import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar dark color='primary' expand='md' className='bg-primary justify-content-between'>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand className='ml-4' tag={Link} to='/home'>
          <h3 className='d-none d-md-block text-white'>Startup Management</h3>
          <h5 className='d-md-none text-white'>Startup Management</h5>
        </NavbarBrand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col xl={6} className='p-4'>
            <Card className='shadow'>
              <CardHeader className='bg-primary text-white d-flex justify-content-center'>
                Employees
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>

          </Col>
          <Col xl={6} className='p-4'>
            <Card className='shadow'>
              <CardHeader className='bg-primary text-white d-flex justify-content-center'>
                Investors
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
