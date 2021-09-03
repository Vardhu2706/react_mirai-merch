// Header Styled Component

// Importing Helpers
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components

// HeaderContainer
export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

// Logo Container
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 200px;
  font-size: 32px;
  font-family: "Pacifico", cursive;
  display: flex;
  margin-left: 10px;
  align-items: center;
`;

// Options Container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Option Link
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
`;
