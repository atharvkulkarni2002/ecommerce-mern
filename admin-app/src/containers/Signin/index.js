import React from "react";
import Layout from "../../components/Layouts";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import {login} from "../../actions";
import {useDispatch} from "react-redux";

function Signin() {
    
    const dispatch= useDispatch();

    const userLogin=(e)=>{
        e.preventDefault();
        const user={
            email:'sex@gmail.com',
            password:'ghapaghap'
        }
        dispatch(login(user));
    }

    return (
        <>
            <Layout>
                <Container>
                <Row style={{marginTop:'2rem'}}>
                    <Col md={{span:6, offset:3}}>
                        <Form onSubmit={userLogin}>
                            <Input 
                                label="Email address"
                                placeholder="Enter eamil"
                                // value=""
                                type="email"
                                onChange={()=>{}}
                            />

                            <Input 
                                label="Password"
                                placeholder="Password"
                                // value=""
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

export default Signin;