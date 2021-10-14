

import styled from 'styled-components';

export const Footing = styled.div`
background: linear-gradient(90deg, #E7717D 9%, #C2CAD0 100%);
  height: 95px;
  display: flex;
  align-item: center;
  position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
  justify-content: center;
  padding: 0.1rem calc((10vw - 100px) / 2);
  
  color:#fff;
  
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    display: block;
    display: center;
    justify-content: center;
    height: 94px;
  }
  @media screen and (max-width: 530px) {
    display: block;
    display: center;
    justify-content: center;
    height: 94px;
    padding-left:60px;
    padding-bottom:5px;
  }
  @media screen and (max-width: 375px) {
    display: block;
    justify-content: center;
    height: 150px;
    
  }
`;
