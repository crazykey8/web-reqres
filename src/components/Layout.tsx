import React from 'react';
import styled, {css} from "styled-components";

const LayoutStyled = styled.div`
  margin: 0 auto;
  max-width: ${(props: ILayoutProps) => props.maxWidth || '1320px'};
  padding: ${(props: ILayoutProps) => props.padding || '0'};
  @media (max-width: 576px) {
    ${(props: ILayoutProps) => props.media && css`
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