import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Layout from "./Layout";
import Buttons from "./Buttons";
import Header1 from "../styles/header1";
import Header2 from "../styles/header2";
import {useNavigate} from "react-router-dom";
import BackIcon from "../images/BackIcon";

const HeaderStyled = styled.header`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: var(--color-violet);
`

function Header() {

    const [matches, setMatches] = useState(window.matchMedia("(max-width: 576px)").matches)

    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('token')
        navigate(0)
        navigate('/register')
    }

    useEffect(() => {
        window
            .matchMedia("(max-width: 576px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    // Сделать хедер универсальным для одной карточки для карточки и для карточки партнера

    return (
        <HeaderStyled>
            <Layout padding={'0 20px'}>
                <div style={{
                    textAlign: 'right'
                }}>
                    {!matches ?
                        <Buttons onClick={handleLogout} padding={'8px 16px'} color={'var(--color-white)'}
                                 border={'1px solid var(--color-white)'}>
                            Выход
                        </Buttons>
                        :
                        <Buttons onClick={handleLogout} transparent={'true'}>
                            <BackIcon/>
                        </Buttons>
                    }
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Header1 media={'true'} margin={'0px 0 16px 0'} color={'var(--color-white)'}>
                        Наша команда
                    </Header1>
                    <Header2 media={'true'} color={'var(--color-gray-light)'} margin={'auto'} maxWidth={'846px'}>
                        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и
                        умеющие находить выход из любых, даже самых сложных ситуаций.
                    </Header2>
                </div>
            </Layout>
        </HeaderStyled>
    );
}

export default Header;