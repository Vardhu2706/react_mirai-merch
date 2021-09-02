// Collection Item

// Importing Helpers
import styled from "styled-components";
import CustomButton from "../custom-button/Custom-Button-Component";

// Collection Container
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

// Add Button
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

// Background Image
export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

// Collection Footer Container
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

// Name Container
export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

// Price Container
export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
