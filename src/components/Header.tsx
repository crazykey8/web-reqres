import React from 'react';
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: ${(props: IHeaderProps) => props.padding || '0'};
  background-color: var(--color-violet);
`

interface IHeaderProps {
    children: React.ReactNode,
    padding?: string
}

function Header(props: IHeaderProps) {

    const {children} = props

    return (
        <HeaderStyled {...props}>
            {children}
        </HeaderStyled>
    );
}

export default Header;