import React from 'react';
import styled, {css} from "styled-components";

const ButtonStyled = styled.button`
  margin: ${(props: IButtonProps) => props.margin || '0'};
  width: ${(props: IButtonProps) => props.width || 'auto'};
  padding: ${(props: IButtonProps) => props.padding || '0'};
  border: ${(props: IButtonProps) => props.border || 'none'};
  background-color: ${(props: IButtonProps) => props.backgroundColor || 'transparent'};
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 136.19%;
  color: ${(props: IButtonProps) => props.color || 'var(--color-black)'};

  ${(props: IButtonProps) => props.transparent && css`
    background: none;
    outline: none;
    border: none;
  `};
  @media (max-width: 576px) {
    ${(props: IButtonProps) => props.media && css`
      display: none;
    `}
  }
`

interface IButtonProps {
    children: React.ReactNode,
    padding?: string,
    backgroundColor?: string,
    border?: string,
    color?: string,
    width?: string,
    margin?: string,
    transparent?: string,
    onClick?: (e: any) => void,
    media?: string,
}

function Buttons(props: IButtonProps) {
    return (
        <ButtonStyled {...props}/>
    );
}

export default Buttons;