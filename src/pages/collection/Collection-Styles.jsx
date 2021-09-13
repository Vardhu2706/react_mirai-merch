// Collection Styles

// Importing Helpers
import styled from "styled-components";
import { motion } from "framer-motion";

// Collection Page Container
export const CollectionPageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Collection Title
export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

// Collection Items Container
export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;
