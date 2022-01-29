import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <CTA>
            <CTAlogoOne src='images/cta-logo-one.svg' />
            <SignUp>
                Get all there
            </SignUp>
            <Description>
                How to fuck a better pussy, please tell me how to fuck a better pussy, I really want to cum into her tight pussy, and fuck her every fucking time hehehe
            </Description>
            <CTALogoTwo src='images/cta-logo-two.png' />
        </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    position: relative;
    height: calc(100vh - 70px);
    &:before {
        content: '';
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        position: absolute;
        opacity: 0.7;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

const CTA = styled.div`
    margin-top: 90px;
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
`;

const CTAlogoOne = styled.img`
    height: 100%;
    object-fit: contain;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;

    }
`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    text-transform: uppercase;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.5s;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 17px;
    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 17px;
`;  

const CTALogoTwo = styled(CTAlogoOne)`
    width: 90%;
`;