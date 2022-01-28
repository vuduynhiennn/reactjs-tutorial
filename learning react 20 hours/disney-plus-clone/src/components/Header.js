import React from 'react';
import styled from 'styled-components';

function Header() {
  return ( 
    <Nav> 
        <Logo src="/images/logo.svg" />
        <NavMenu>
            <a>
                <img src='images/home-icon.svg' />
                <span> home </span>
            </a>

            <a>
                <img src='images/search-icon.svg' />
                <span> search </span>
            </a>

            <a>
                <img src='images/watchlist-icon.svg' />
                <span> watch </span>
            </a>

            <a>
                <img src='images/original-icon.svg' />
                <span> original </span>
            </a>

            <a>
                <img src='images/movie-icon.svg' />
                <span> movies </span>
            </a>

            <a>
                <img src='images/series-icon.svg' />
                <span> series </span>
            </a>
        </NavMenu>

        <UserImg src='https://source.unsplash.com/random'/>

    </Nav>
  );
}

export default Header;

const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
    color: white;
    display: flex;
    justitfy-content: center;
    align-items: center;
    padding: 0 36px;
`;

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-transform: uppercase;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: '';
                height: 2px;    
                background-color: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 0.3s ease;
                transform: scaleX(0)
            }  
            &:hover { 
                &:after { 
                    transform: scaleX(1);
                    opacity: 1;
                }
            }
        }
    }
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;