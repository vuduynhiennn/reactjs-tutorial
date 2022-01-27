import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerState, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars);
  // console.log(cars);  
  return (
    <Container>
      <a> 
        <img src='/images/logo.svg' alt='logo'/>
      </a>

      <Menu>
          <a href='#'>Model S</a>

          <a href='#'>Model 3</a>

          <a href='#'>Model X</a>

          <a href='#'>Model Y</a>
      </Menu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#' onClick={()=>setBurgerStatus(true)} >Tesla Account</a>

      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}>X</CustomClose>   
        </CloseWrapper>

        <li> 
          <a href='#'>Existing Inventory</a>
        </li>

        <li> 
          <a href='#'>Used Inventory</a>
        </li>

        <li> 
          <a href='#'>Trade in</a>
        </li>

        <li> 
          <a href='#'>Cybertruck</a>
        </li>

        <li> 
          <a href='#'>Roadaster</a>
        </li>

        <li> 
          <a href='#'>Existing Inventory</a>
        </li>

        <li> 
          <a href='#'>Your dick is so small and so weak</a>
        </li>

        <li> 
          <a href='#'>You are my dick</a>
        </li>

        <li> 
          <a href='#'>Cum into her tight pussy</a>
        </li>

        <li> 
          <a href='#'>Fuck you and fuck your mother too</a>
        </li>

        <li> 
          <a href='#'>Lick boss's dick</a>
        </li>

        <li> 
          <a href='#'>Let's fuck some girl</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; 
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    flex-wrap: nowrap;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media(max-width: 768px) {
    display: none; 
  }

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    flex-wrap: nowrap;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${props => props.show ? "translateX(0)": "translateX(100%)"};

  transition: transform 0.3s ease-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e6e6e6;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  border-radius: 100px;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomMenu = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e6e6e6;
  cursor: pointer;
`  
