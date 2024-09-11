import React from "react";
import { FlexContainer } from "../Container";
import styled from "styled-components";
import heroImage from "../../images/hero.png";

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
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: darkblue;
  padding: 15px 30px;
  cursor: pointer;
  border: 1px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  
  &:hover{
    color: darkblue;
    border: 1px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
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

        <ButtonsContainer>
            <Button>About us</Button>
            <Button>Contact us</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <Image src={heroImage} />
      </Right>
    </FlexContainer>
  );
};

export default Hero;
