import React from 'react';
import Card from "./Card";
import styled from "styled-components";
import {pagePeopleState} from "../interface/actionState";
import {useLoaderData} from "react-router-dom";

const CardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  min-height: calc(100vh - 400px);
  grid-gap: 20px;
  justify-items: center;
  margin-bottom: 56px;
`

function CardList() {
    const page: any = useLoaderData()
    const pages: Array<pagePeopleState> = page.clients.data

    return (
        <CardListStyled>
            {pages.map((i) =>
                <Card key={i.id} avatar={i.avatar} firstName={i.first_name} lastName={i.last_name} id={i.id}/>
            )}
        </CardListStyled>
    );
}

export default CardList;