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
