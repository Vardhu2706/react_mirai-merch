// Collection Preview

// Importing Helpers
import styled from 'styled-components';

// Collection Preview Container
export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

// Title Container
export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

// Preview Container
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;