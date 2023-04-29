import React from 'react';
import styled from "styled-components";

const TextsStyled = styled.p`
  margin: ${(props: ITextsProps) => props.margin || '0'};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props: ITextsProps) => props.small ? '14px' : '16px'};
  line-height: ${(props: ITextsProps) => props.small ? '16px' : '136.19%'};
  color: ${(props: ITextsProps) => props.color || 'var(--color-black)'};
`

interface ITextsProps {
    children: React.ReactNode;
    small?: boolean,
    margin?: string,
    color?: string,
}

function Text(props: ITextsProps) {
    return (
        <TextsStyled {...props}/>
    );
}

export default Text;