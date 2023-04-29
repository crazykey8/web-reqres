import React from 'react';
import styled from "styled-components";

const LayoutStyled = styled.div`
  margin: 0 auto;
  max-width: ${(props: ILayoutProps) => props.maxWidth || '1280px'};
  padding: ${(props: ILayoutProps) => props.padding || '0'};
`

interface ILayoutProps {
    children: React.ReactNode;
    maxWidth?: string,
    padding?: string,
}

function Layout(props: ILayoutProps) {
    return (
        <LayoutStyled {...props}/>
    );
}

export default Layout;