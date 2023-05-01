import React, {useEffect} from 'react';
import Card from "./Card";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../store/store";
import {responsePage} from "../store/slices/pageReducer";
import {pagePeopleState} from "../interface/actionState";

const CardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  margin-bottom: 56px;
`

function CardList() {
    const pages: Array<pagePeopleState> = useAppSelector(state => state.page.action)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(responsePage())
    }, [])

    return (
        <CardListStyled>
            {pages.map((i) =>
                <Card key={i.id} avatar={i.avatar} firstName={i.first_name} lastName={i.last_name}/>
            )}
        </CardListStyled>
    );
}

export default CardList;