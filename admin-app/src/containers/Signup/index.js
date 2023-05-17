import React from "react";
import Layout from "../../components/Layouts";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

function Signup (){
    return(
        <>
        <Layout>
                <Container>
                    <Row style={{marginTop:'2rem'}}>
                        <Col md={{span:6, offset:3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                <Input 
                                    label="First Name"
                                    placeholder="First Name"
                                    value=""
                                    type="text"
                                    onChange={()=>{}}
                                />
                                </Col>
                                <Col md={6}>
                                <Input 
                                    label="Last Name"
                                    placeholder="Last Name"
                                    value=""
                                    type="text"
                                    onChange={()=>{}}
                                />
                                </Col>
                            </Row>
                            <Input 
                                    label="Email address"
                                    placeholder="Enter email"
                                    value=""
                                    type="email"
                                    onChange={()=>{}}
                            />

                            <Input 
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                onChange={()=>{}}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </Col>
                    </Row>
                
                </Container>
            </Layout>
        </>
    )
}

export default Signup;