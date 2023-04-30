import React from 'react';
import styled, {css} from "styled-components";
import {IHeaderProps} from "../styles/header2";

const LayoutStyled = styled.div`
  margin: 0 auto;
  max-width: ${(props: ILayoutProps) => props.maxWidth || '1280px'};
  padding: ${(props: ILayoutProps) => props.padding || '0'};
  @media (max-width: 576px) {
    ${(props: IHeaderProps) => props.media && css`
      padding-top: 64px;
    `}
  }
`

interface ILayoutProps {
    children: React.ReactNode;
    maxWidth?: string,
    padding?: string,
    media?: string
}

function Layout(props: ILayoutProps) {
    return (
        <LayoutStyled {...props}/>
    );
}

export default Layout;