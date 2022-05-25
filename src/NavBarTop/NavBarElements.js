import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';

// npm i styled-components

export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    // position: absolute;
    // box-sizing: inherit;
    border-radius: 500px;
    margin-top: 30px;
    margin-left: 125px;
    width: 700px;
    // text-align: center;

`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: Black;
  font-size: 2rem;
  text-decoration: none;
  //Spinning Logo- infinite
  .rotate {
    animation: rotation 8s infinite linear;
  }
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

`;

export const NavLink = styled(Link)`
color: solid black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: Blue;
  box-shadow:  inset 1px 1px px 1px  #639;
  border: solid white;
  border-radius: 2rem;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    
    box-shadow:        inset 0 0 0  5px  #639;
    transform: translatey(10px);

    // -webkit-box-shadow: inset 0 0 0 10px  #639;
    // -moz-box-shadow:    outset 0 0 0 10px  #639;

    //    transition: all .3s ease-out;
    //     transition-property: all;
    //     transition-duration: 0.3s;
    //     transition-timing-function: ease-out;
    //     transition-delay: 0s;
  }
`;