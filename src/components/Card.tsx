import React, {useState} from 'react';
import styled from "styled-components";
import Header2 from "../styles/header2";
import Flex from "./Flex";
import Buttons from "./Buttons";
import HeartEmptyIcon from "../images/HeartEmptyIcon";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../store/store";
import HeartFullIcon from "../images/HeartFullIcon";

const CardStyled = styled.li`
  max-width: 305px;
  padding: 20px;
  box-shadow: 0px 0.996045px 3.98418px rgba(51, 51, 51, 0.15);
  border-radius: 10px;
  width: 100%;
  cursor: pointer;

  img {
    margin-top: 16px;
    margin-bottom: 16px;
    border-radius: 100px;
    width: 124px;
    height: 124px;
  }
`

interface ICardProps {
    avatar: string,
    firstName: string,
    lastName: string,
    id: number
}

function Card(props: ICardProps) {
    const {
        avatar,
        firstName,
        lastName,
        id
    } = props

    const [like, setLike] = useState(false)
    const dispatch = useAppDispatch()

    function handleLike() {
        setLike(!like)
    }

    const fullName = firstName + ' ' + lastName

    return (
        <CardStyled>
            <Link to={`/user/${id}`}>
                <Flex align={'center'} direction={'column'}>
                    <img
                        src={avatar}
                        alt="avatar"/>
                    <Header2>
                        {fullName}
                    </Header2>
                </Flex>
            </Link>
            <Flex justify={'flex-end'}>
                <Buttons flex={'true'} onClick={handleLike} backgroundColor={'var(--color-gray-light)'} padding={'8px'}>
                    {like ?
                        <HeartFullIcon/>
                        :
                        <HeartEmptyIcon/>
                    }
                </Buttons>
            </Flex>
        </CardStyled>
    );
}

export default Card;