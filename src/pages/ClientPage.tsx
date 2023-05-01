import React, {useEffect, useState} from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Flex from "../components/Flex";
import Buttons from "../components/Buttons";
import LogoutIcon from "../images/LogoutIcon";
import BackIcon from "../images/BackIcon";
import Header1 from "../styles/header1";
import Text from "../styles/text";
import EmailIcon from "../images/EmailIcon";

function ClientPage() {
    const client: any = useLoaderData()
    const data = client.clients.data
    const support = client.clients.support
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 576px)").matches)
    const navigate = useNavigate()

    const fullName = data.first_name + '' + data.last_name

    function handleLogout() {
        localStorage.removeItem('token')
        navigate(0)
        navigate('/register')
    }

    function goBack() {
        navigate(-1)
    }

    useEffect(() => {
        window
            .matchMedia("(max-width: 576px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <>
            <Header padding={!matches ? '32px 0 39px 0' : '25px 0 64px 0'}>
                <Layout padding={'0 20px'}>
                    <Flex justify={'space-between'} align={'center'}>
                        {!matches ?
                            <Buttons onClick={goBack} padding={'8px 16px'} color={'var(--color-white)'}
                                     border={'1px solid var(--color-white)'}>
                                Назад
                            </Buttons>
                            :
                            <Buttons onClick={goBack} transparent={'true'}>
                                <BackIcon/>
                            </Buttons>
                        }
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
                    </Flex>
                    <Flex clientHeader={'true'} align={'center'} padding={'0 0 0 110px'}>
                        <img style={{
                            marginRight: `${!matches ? '32px' : '0'}`,
                            width: '187px',
                            height: '187px',
                            borderRadius: '100px'
                        }} src={data.avatar} alt="avatar"/>
                        <div>
                            <Header1 media={'true'} color={'var(--color-white)'} margin={'0px 0px 16px 0'}>
                                {fullName}
                            </Header1>
                            <Text headerText={'true'} custom={'true'} color={'var(--color-white)'}
                                  margin={!matches ? '0' : '16px'} lineHeight={'38px'} fontSize={'32px'}>
                                Партнёр
                            </Text>
                        </div>
                    </Flex>
                </Layout>
            </Header>
            <Layout padding={!matches ? '49px 15px 0' : '33px 15px 0'}>
                <Flex clientContent={'true'}>
                    <Text maxWidth={!matches ? '630px' : 'auto'} margin={!matches ? '0px 130px 0 0' : '0'}>
                        {support.text}
                    </Text>
                    <Flex direction={'column'}>
                        <Flex align={'center'} margin={'0 0 30px 0'}>
                            <EmailIcon/>
                            <a style={{
                                marginLeft: '10px'
                            }} href={`mailto:` + data.email}>
                                {data.email}
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Layout>
        </>
    );
}

export default ClientPage;