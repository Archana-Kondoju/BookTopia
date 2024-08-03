import React, { Component } from 'react';
import styled from 'styled-components';

// Define a styled component for the Welcome message
const WelcomeSection = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const WelcomeMessage = styled.h1`
  font-size: 40px;
  color: #333;
  text-align: center;
`;

// Define a styled component for the container
const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 550px;
  margin-top:30px;
`;

const Paragraph = styled.p`
  font-size: 24px;
  color: #333;
  line-height: 2.0;
  /* Add more styles as needed */
`;

class Welcome extends Component {
    // state = {  } 
    render() { 
        return (
    <WelcomeSection>
        <Container >
        <div style={{ textAlign: 'center' }}>
            <WelcomeMessage>Welcome To Booktopia</WelcomeMessage>
            <Paragraph>All catergories of books are available here!<br/> Read and get the knowledge of it as per your interests and requirement</Paragraph>
            {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p> */}
        </div>
        </Container>
    </WelcomeSection>
        );
    }
}
 
export default Welcome;


// className="row py-lg-0"    py-0 text-center container