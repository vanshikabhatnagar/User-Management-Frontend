import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap'


const SignIn = () => {
    const [Password, setPassword] = useState('');
    const [Username, setUsername] = useState('');

    return (
        <Container className='vh-100 bg-gradient-primary' fluid>
            <Row>
                <Col className='mx-auto center-vertical-horizontal' xl={4} lg={5} md={6} sm={8} xs={10}>
                    <Card className='shadow text-center border-0'>
                        <CardTitle className=' mt-4'><h5>DT A/B Testing</h5></CardTitle>
                        <CardBody className='px-lg-5 py-lg-5'>
                            <Form>
                                <InputGroup className='mb-3'>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText className='text-success'>U</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' placeholder='Username' value={Username} onChange={(e) => setUsername(e.target.value)} />
                                </InputGroup>
                                <InputGroup className='mb-3'>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText className='text-warning'>P</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='password' placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                                </InputGroup>
                                <Link to='/home'>
                                    <Button className='mt-3' color='secondary' type='button'>Sign In</Button>
                                </Link>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default SignIn;
