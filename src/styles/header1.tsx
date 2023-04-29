import React from 'react';
import styled from "styled-components";
import {IHeaderProps} from "./header2";

const H1Styled = styled.h1`
  margin: ${(props: IHeaderProps) => props.margin || '0'};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: ${(props: IHeaderProps) => props.color || 'var(--color-black)'};
`

function Header1(props: IHeaderProps) {
    return (
        <H1Styled {...props}/>
    );
}

export default Header1;