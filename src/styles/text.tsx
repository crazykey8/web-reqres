import React from 'react';
import styled, {css} from "styled-components";

const TextsStyled = styled.p`
  margin: ${(props: ITextsProps) => props.margin || '0'};
  max-width: ${(props: ITextsProps) => props.maxWidth || 'auto'};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props: ITextsProps) => props.small ? '14px' : '16px'};
  line-height: ${(props: ITextsProps) => props.small ? '16px' : '136.19%'};
  color: ${(props: ITextsProps) => props.color || 'var(--color-black)'};

  ${(props: ITextsProps) => props.custom && css`
    font-size: ${(props: ITextsProps) => props.fontSize || '16px'};
    line-height: ${(props: ITextsProps) => props.lineHeight || '136.19%'};
  `};
  
  @media (max-width: 768px) {
    ${(props: ITextsProps) => props.headerText && css`
      font-size: 20px;
      line-height: 23px;
    `}
  }
`

interface ITextsProps {
    children: React.ReactNode;
    small?: boolean,
    margin?: string,
    maxWidth?: string,
    color?: string,
    custom?: string,
    fontSize?: string,
    lineHeight?: string,
    headerText?: string,
}

function Text(props: ITextsProps) {
    return (
        <TextsStyled {...props}/>
    );
}

export default Text;