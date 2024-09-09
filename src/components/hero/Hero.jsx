import React from "react";
import { FlexContainer } from "../Container";
import styled from "styled-components";

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  text-align: center;
`;
const Description = styled.p`
  width: 70%;
  font-size: 20px;
  color: gray;
`;

const Right = styled.div`
  width: 40%;
`;

const Hero = () => {
  return (
    <FlexContainer>
      <Left>
        <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          incidunt sapiente inventore qui aliquid debitis dignissimos, natus
          beatae saepe itaque labore nostrum deserunt deleniti. Veritatis harum
          enim facilis dicta ullam.
        </Description>
      </Left>
      <Right>Right</Right>
    </FlexContainer>
  );
};

export default Hero;
