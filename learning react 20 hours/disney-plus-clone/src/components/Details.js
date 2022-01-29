import React from 'react';
import styled from 'styled-components';

function Details() {
  return (
      <Container>   
        <Background>
            <img src='https://source.unsplash.com/random' />
        </Background>
        <ImageTitle>
             <h3> Disney film</h3>
             <h1> How to get a good pussy</h1>
        </ImageTitle>
        <Controls>
            <PlayButton >
                <img src='/images/play-icon-black.png' />
                <span> Play </span>
            </PlayButton>

            <TrailerButton>
                <img src='/images/play-icon-white.png' />
                <span> Trailer </span>
            </TrailerButton>

            <AddButton>
                <span>+</span>
            </AddButton>

            <GroupWatchButton>
                <img src='images/group-icon.png' />
                
            </GroupWatchButton>
        </Controls>

        <SubTitle>
            2018 7m Family, Fantastic, Kids, Animation
        </SubTitle>

        <Description>
            A child is born in a family of four. The child is a fucking shit
            and the family is a fucking shit.
        </Description>
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
    opacity: 0.5;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`;

const ImageTitle = styled.div`
    margin-top: 70px;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    h1 {
        width: 100%;
        height: 100%;
        object-fit: contain;
        font-size: 3.5vw;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;


`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rbg(249, 249, 249);
    border: none;
    outline: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 0.8px;
    cursor: pointer;
    transition: all 0.5s;
    text-transform: uppercase;
    &:hover {
        background-color: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: white;
    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cusor: pointer;
    transition: all 0.5s;
    span {
        font-size: 30px;
        color: white;

    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }
`;

const GroupWatchButton = styled(AddButton)`
    background-color: rbg(0, 0, 0);
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`;