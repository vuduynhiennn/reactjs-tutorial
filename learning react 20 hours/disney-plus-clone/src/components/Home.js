import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import VIewers from './VIewers';
import Movies from './Movies';
// import db from '../firebase';

function Home() {

    useEffect(() => {
        // db.collection('movies').onSnapshot(snapshot => {
        //     console.log(snapshot.docs.map(doc => doc.data()));
        // });
    }, []);


  return (
      <Container> 
          <ImgSlider />
          <VIewers />
          <Movies />  
      </Container>
  );
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before {
        content: '';
        background-image: url('/images/home-background.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

