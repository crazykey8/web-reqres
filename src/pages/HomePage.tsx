import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";
import Buttons from "../components/Buttons";
import LogoutIcon from "../images/LogoutIcon";
import Header1 from "../styles/header1";
import Header2 from "../styles/header2";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import Text from "../styles/text";
import ArrowDownIcon from "../images/ArrowDownIcon";

function HomePage() {

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

    return (
        <>
            <Header padding={'32px 0 64px 0'}>
                <Layout padding={'0 15px'}>
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
                                <LogoutIcon/>
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
                            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи,
                            и
                            умеющие находить выход из любых, даже самых сложных ситуаций.
                        </Header2>
                    </div>
                </Layout>
            </Header>
            <Layout padding={'48px 15px 69px 15px'}>
                <CardList/>
                <Buttons margin={'auto'} backgroundColor={'transparent'} padding={'9px 16px'} flex={'true'}
                         border={'1px solid var(--color-black)'}>
                    <Text color={'var(--color-black)'} margin={'0 10px 0 0'}>
                        Показать ещё
                    </Text>
                    <ArrowDownIcon/>
                </Buttons>
            </Layout>
        </>
    );
}

export default HomePage;