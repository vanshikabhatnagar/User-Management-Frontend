import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';
import { BaseURL } from './Requests';



const SignIn = () => {
    const history = useHistory()
    const loginToServer = (type = 'manualLogin') => {

        if (type === 'manualLogin' && (Username === '' || Password === '')) {
            setErrorMessage('Username or Password cannot be empty!')
        }
        else {
            setLoading(true)
            Axios.post(`${BaseURL}login`, {
                userID: Username,
                password: Password
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    localStorage.setItem('access-token', response.data.access_token)
                    history.push('/home')
                }
                else
                    setErrorMessage(response.data.message)
                setLoading(false)
            }).catch(e => {
                setLoading(false)
                setErrorMessage(e?.response?.data?.message)
                console.log(e.response)
            })
        }
    }
    const [Password, setPassword] = useState('');
    const [Username, setUsername] = useState('');
    const [Loading, setLoading] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        if (localStorage.getItem('access-token'))
            loginToServer('autoLogin')
    }, [])
    return (
        <Container className='vh-100 bg-gradient-primary' fluid>
            <Row>
                <Col className='mx-auto center-vertical-horizontal' xl={4} lg={5} md={6} sm={8} xs={10}>
                    <Card className='shadow text-center border-0'>
                        <CardTitle className=' mt-4'><h5>User Management</h5></CardTitle>
                        <CardBody className='px-lg-5 py-lg-5'>
                            <Form>
                                <InputGroup className='mb-3'>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText className='text-success'>U</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='number' placeholder='Username' value={Username} onChange={(e) => setUsername(e.target.value)} />
                                </InputGroup>
                                <InputGroup className='mb-3'>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText className='text-warning'>P</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='password' placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                                </InputGroup>
                                {Loading ?
                                    <Spinner color='primary' />
                                    :
                                    <Button onClick={()=>loginToServer('manualLogin')} className='mt-3' color='secondary' type='button'>Sign In</Button>
                                }
                                {ErrorMessage && <h5 className='mt-4 text-danger text-center'>{ErrorMessage}</h5>}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default SignIn;
