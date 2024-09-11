import React from "react";
import styled from "styled-components";
// import { Container } from "../Container";

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex: 2;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.h1`
  font-size: 20px;
  text-decoration: underline;
  color: darkblue;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: darkblue;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: aliceblue;
    color: darkblue;
    border: 1px solid darkblue;
  }
`;

const Navbar = () => {
  return (
    <Container>
      {/* <Container backgroundColor="white" height="10%"> */}
      <Left>
        <Logo>IT Support</Logo>
      </Left>
      <Center>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About us</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Center>
      <Right>
        <Button>Call us Now!</Button>
      </Right>
    </Container>
  );
};

export default Navbar;
