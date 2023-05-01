import React from 'react';
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: var(--color-violet);
`

interface IHeaderProps {
    children: React.ReactNode
}

function Header(props: IHeaderProps) {

    const {children} = props

    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    );
}

export default Header;