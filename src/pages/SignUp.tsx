import React from 'react';
import styled from "styled-components";
import Header2 from "../styles/header2";
import Layout from "../components/Layout";
import Form from "../components/Form";

const SignUpStyled = styled.div`
  padding: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`

function SignUp() {

    return (
        <Layout padding={'259px 0 0 0'} maxWidth={'500px'}>
            <SignUpStyled>
                <Header2 margin={'0 0 16px 0'}>
                    Регистрация
                </Header2>
                <Form/>
            </SignUpStyled>
        </Layout>
    );
}

export default SignUp;