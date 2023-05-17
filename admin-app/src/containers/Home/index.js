import React from "react";
import Layout from "../../components/Layouts";
import { Container } from "react-bootstrap";

function Home (){
    return(
        <>
        <Layout>
            <Container>
                <h1 style={{margin:'5rem'}}className="p-5 bg-secondary p-2 text-black text-center rounded bg-opacity-25">Home</h1>
            </Container>
        </Layout>
        </>
    )
}

export default Home;