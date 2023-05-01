import React from 'react';
import styled, {css} from "styled-components";

const FlexStyled = styled.div`
  display: flex;
  justify-content: ${(props: IFlexProps) => props.justify || 'stretch'};
  align-items: ${(props: IFlexProps) => props.align || 'stretch'};
  flex-direction: ${(props: IFlexProps) => props.direction || 'stretch'};
  margin: ${(props: IFlexProps) => props.margin || '0'};
  padding: ${(props: IFlexProps) => props.padding || '0'};
  flex-wrap: ${(props: IFlexProps) => props.wrap || 'nowrap'};

  @media (max-width: 768px) {
    ${(props: IFlexProps) => props.clientContent && css`
      flex-direction: column-reverse;
    `}
  };

  @media (max-width: 576px) {
    ${(props: IFlexProps) => props.clientHeader && css`
      flex-direction: column-reverse;
      text-align: center;
      padding-left: 0;
    `}
  };
`

export interface IFlexProps {
    justify?: string,
    align?: string,
    direction?: string,
    margin?: string,
    wrap?: string,
    padding?: string,
    clientHeader?: string,
    clientContent?: string,
    children: React.ReactNode
}


function Flex(props: IFlexProps) {
    return (
        <FlexStyled {...props}/>
    );
}

export default Flex;