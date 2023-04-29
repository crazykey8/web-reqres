import React from 'react';
import styled from "styled-components";

const H2Styled = styled.h2`
  margin: ${(props: IHeaderProps) => props.margin || '0'};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: ${(props: IHeaderProps) => props.color || 'var(--color-black)'};
`

export interface IHeaderProps {
    children: React.ReactNode;
    margin?: string,
    color?: string
}

function Header2(props: IHeaderProps) {
    return (
        <H2Styled {...props}/>
    );
}

export default Header2;