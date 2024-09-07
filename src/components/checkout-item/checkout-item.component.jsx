import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles';
import { CheckoutItemContainer } from './checkout-item.styles';
import { Price } from './checkout-item.styles';
import { Value } from './checkout-item.styles';
import { Quantity } from './checkout-item.styles';
import { ImageContainer } from './checkout-item.styles';
import { Arrow } from './checkout-item.styles';
import { RemoveButton } from './checkout-item.styles';
import { Name } from './checkout-item.styles';


const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price> {`$${price}`}</Price>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
