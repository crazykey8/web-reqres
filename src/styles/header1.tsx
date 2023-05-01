import React from 'react';
import styled, {css} from "styled-components";
import {IHeaderProps} from "../interface/componentProps";

const H1Styled = styled.h1`
  margin: ${(props: IHeaderProps) => props.margin || '0'};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props: IHeaderProps) => props.fontSize || '64px'};
  line-height: ${(props: IHeaderProps) => props.lineHeight || '75px'};
  color: ${(props: IHeaderProps) => props.color || 'var(--color-black)'};
  max-width: ${(props: IHeaderProps) => props.maxWidth || 'auto'};

  @media (max-width: 576px) {
    ${(props: IHeaderProps) => props.media && css`
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 16px;
    `}
  }
`

function Header1(props: IHeaderProps) {
    return (
        <H1Styled {...props}/>
    );
}

export default Header1;