import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';

export const Nav = styled.nav`
background: linear-gradient(90deg, #E7717D 9%, #C2CAD0 100%);
height: 95px;
  display: flex;
  justify-content: space-between;
  
  padding: 0.1rem calc((10vw - 100px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;


export const NavL = styled.nav`
  color: #fff;
  justify-content: center;
  display: flex;
  border-right: 5px solid #fff;
  border-bottom: 5px solid black;
  align-items: center;
  font-size: 34px;
  background-color: #7E685A;
  margin-top:8px;
  margin-left:-25px;
  text-decoration: none;
  padding: 0 3rem;
  height: 69%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const NavLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  border-right: 5px solid #7E685A;
  border-bottom: 5px solid #7E685A;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  &.active {
    color: White;
    background-color:black;
    height: 60%;
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
  margin-right: -10px;
  
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
