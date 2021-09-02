// Collection Styles

// Importing Helpers
import styled from "styled-components";

// Collection Page Container
export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
