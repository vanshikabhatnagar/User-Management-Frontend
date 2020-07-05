import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'
import Header from './Header'
import Axios from 'axios'


const App = () => {
  const [AllEmployees, setAllEmployees] = useState([])


  useEffect(() => {
    // Fetch Employees
    Axios.get('http://127.0.0.1:5000/employee/get').then(e => {
      setAllEmployees(e.data)
    })
  }, [])

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xl={12} className='p-4'>
            <Card className='shadow'>
              <CardHeader className='bg-secondary text-white d-flex justify-content-center'>
                Employees
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>EmpID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AllEmployees.map(emp => {
                      return (
                        <tr>
                          <td>{emp.empID}</td>
                          <td>{emp.name}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>

          </Col>
        </Row>
        <Row>
          <Col xl={12} className='p-4'>
            <Card className='shadow'>
              <CardHeader className='bg-secondary text-white d-flex justify-content-center'>
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
