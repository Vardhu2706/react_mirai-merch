// Checkout Item Styles

// Importing Helpers
import styled from "styled-components";

// Checkout Item Container
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

// Image Container
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

// Text Container
export const TextContainer = styled.span`
  width: 23%;
`;

// Quantity Container
export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

// Remove Button Container
export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
