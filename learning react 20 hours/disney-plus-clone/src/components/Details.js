import React from 'react';
import styled from 'styled-components';

function Details() {
  return (
      <Container>   
        <Background>
            <img src='https://source.unsplash.com/random' />
        </Background>
        <ImageTitle>
             <h1> Disney film</h1>
        </ImageTitle>
        <Controls>
            
        </Controls>
      </Container>
  );
}
export default Details;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);  
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;