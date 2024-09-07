import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles"

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`

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
  overflow: hidden;

  ${CartItems}::-webkit-scrollbar {
    width: 12px;
  }
  ${CartItems}::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ${CartItems}::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
  }
  ${CartItems}::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${CartItems}{
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}{
    margin-top: auto,
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`


