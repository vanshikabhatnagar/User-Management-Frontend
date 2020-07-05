import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row, Table, Spinner } from 'reactstrap'
import Header from './Header'
import Axios from 'axios'
import { BaseURL } from './Requests'


const App = () => {
  // console.log(process.env)
  const [AllEmployees, setAllEmployees] = useState([])
  const [LoadingEmployees, setLoadingEmployees] = useState(false)

  useEffect(() => {
    // Fetch Employees
    setLoadingEmployees(true)
    Axios.get(`${BaseURL}employee/get`).then(e => {
      setAllEmployees(e.data)
      setLoadingEmployees(false)
    }).catch(e => {
      setLoadingEmployees(false)
      console.log(e)
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
              <CardBody>{
                LoadingEmployees ?
                  <Spinner color='primary' />
                  :
                  <Table striped hover>
                    <thead className='text-secondary'>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AllEmployees.map((emp, key) => {
                        return (
                          <tr key={key}>
                            <td>{emp.empID}</td>
                            <td>{emp.name}</td>
                            <td>{emp.phone}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
              }
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
