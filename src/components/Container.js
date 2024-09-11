// src/components/Container.js
import styled from 'styled-components';

export const Container = styled.div`
/* background-color: red;
height: 100vh; */
  background-color: ${(props) => props.backgroundColor || 'white'};
  width : ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100vh'};
  /* padding: ${(props) => props.padding || '0'}; */
`;

export const FlexContainer = styled.div`
    display: ${(props) => props.display || 'flex'};
    height: ${(props) => props.display || '90%'};
`;

export const NavBarFlexContainer = styled.div`
  ${(props) => props.display && `display: ${props.display};`}
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
`;