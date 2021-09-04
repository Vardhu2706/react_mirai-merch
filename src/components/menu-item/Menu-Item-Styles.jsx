// Menu Item

// Importing Helpers
import styled from "styled-components";
import { motion } from "framer-motion";

// Menu Item Container
export const MenuItemContainer = styled(motion.div)`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

// Background Image Container
export const BackgroundImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  border: none;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

// Content Container
export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

// Content Title
export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

// Content Subtitle
export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
