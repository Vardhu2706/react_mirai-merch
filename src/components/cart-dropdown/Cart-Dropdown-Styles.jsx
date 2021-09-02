// Cart Dropdown Styles

// Importing Helpers
import styled from "styled-components";
import CustomButton from "../custom-button/Custom-Button-Component";

// Styled Components

// Cart Dropdown Container
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

// Cart Dropdown Button
export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

// Empty Message Container
export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

// Cart Items Con
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
