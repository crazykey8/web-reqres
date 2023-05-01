import React from 'react';
import styled, {css} from "styled-components";
import {IHeaderProps} from "../interface/componentProps";

const H2Styled = styled.h2`
  margin: ${(props: IHeaderProps) => props.margin || '0'};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props: IHeaderProps) => props.fontSize || '20px'};
  line-height: ${(props: IHeaderProps) => props.lineHeight || '23px'};
  color: ${(props: IHeaderProps) => props.color || 'var(--color-black)'};
  max-width: ${(props: IHeaderProps) => props.maxWidth || 'auto'};
  
  @media (max-width: 576px) {
    ${(props: IHeaderProps) => props.media && css`
      font-size: 16px;
      line-height: 19px;
    `}
  }
`

function Header2(props: IHeaderProps) {
    return (
        <H2Styled {...props}/>
    );
}

export default Header2;