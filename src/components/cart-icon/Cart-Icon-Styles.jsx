// Cart Icon Styles

// Importing Helpers
import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

// Cart Container 
export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// Shopping Container
export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

// Item Count Container
export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 12px;
`;