import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row, Table, Spinner } from 'reactstrap'
import Header from './Header'
import Axios from 'axios'
import { BaseURL } from './Requests'
import moment from 'moment'


const App = () => {

  const [AllEmployees, setAllEmployees] = useState([])
  const [LoadingEmployees, setLoadingEmployees] = useState(false)

  const [AllInvestors, setAllInvestors] = useState([])
  const [LoadingInvestors, setLoadingInvestors] = useState(false)

  const fetchEmployees = () => {
    setLoadingEmployees(true)
    Axios.get(`${BaseURL}employee/get`).then(e => {
      setAllEmployees(e.data)
      setLoadingEmployees(false)
    }).catch(e => {
      setLoadingEmployees(false)
      console.log(e)
    })
  }

  const fetchInvestors = () => {
    setLoadingInvestors(true)
    Axios.get(`${BaseURL}investors/get`).then(e => {
      setAllInvestors(e.data)
      setLoadingInvestors(false)
    }).catch(e => {
      setLoadingInvestors(false)
      console.log(e)
    })
  }


  useEffect(() => {
    fetchEmployees()
    fetchInvestors()
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
                  <Table responsive striped hover>
                    <thead className='text-secondary'>
                      <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>DOB</th>
                        <th>Hours Worked</th>
                        <th>Unpaid</th>
                        <th>Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AllEmployees.map((emp, key) => {
                        return (
                          <tr key={key}>
                            <td>{emp.empID}</td>
                            <td>{emp.name}</td>
                            <td>{emp.phone}</td>
                            <td>{moment(emp.dob).format('LL')}</td>
                            <td>{emp.hours}</td>
                            <td>Rs {emp.unpaid}</td>
                            <td>Rs {emp.paid}</td>
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
                Investors In Your Startup
              </CardHeader>
              <CardBody>
                {
                  LoadingInvestors ?
                    <Spinner color='primary' />
                    :
                    <Table responsive striped hover>
                      <thead className='text-secondary'>
                        <tr>
                          <th>InvID</th>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Date Of Investment</th>
                          <th>Email</th>
                          <th>Amount</th>
                          <th>Validity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllInvestors.map((inv, key) => {
                          return (
                            <tr key={key}>
                              <td>{inv.invID}</td>
                              <td>{inv.name}</td>
                              <td>{inv.phone}</td>
                              <td>{moment(inv.doi).format('LL')}</td>
                              <td>{inv.email}</td>
                              <td>Rs {inv.amt}</td>
                              <td>{moment(inv.validity).format('LL')}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>

                }</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
