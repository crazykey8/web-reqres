import React from 'react';
import Buttons from "../styles/Buttons";
import Text from "../styles/text";
import Flex from "../styles/Flex";
import {useLoaderData, useNavigate} from "react-router-dom";
import {responsePage} from "../store/slices/pageReducer";
import {useAppDispatch} from "../store/store";

function Pagination() {
    const page: any = useLoaderData()
    const numPage = page.clients.page
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function handlePage(args: number) {
        navigate(`/page/${args}`)
        dispatch(responsePage(args))
    }

    return (
        <Flex justify={'center'}>
            {numPage === 1 ?
                null :
                <Buttons onClick={() => handlePage(numPage - 1)} margin={'0px 10px 0'}
                         backgroundColor={'transparent'}
                         padding={'9px 16px'} flex={'true'}
                         border={'1px solid var(--color-black)'}>
                    <Text color={'var(--color-black)'}>
                        {numPage - 1}
                    </Text>
                </Buttons>
            }
            <Buttons onClick={() => handlePage(numPage)} margin={'0px 10px 0'}
                     backgroundColor={'var(--color-gray)'}
                     padding={'9px 16px'} flex={'true'}
                     border={'1px solid var(--color-black)'}>
                <Text color={'var(--color-white)'}>
                    {numPage}
                </Text>
            </Buttons>
            {numPage === page.clients.per_page ?
                null :
                <Buttons onClick={() => handlePage(numPage + 1)} margin={'0px 10px 0'}
                         backgroundColor={'transparent'}
                         padding={'9px 16px'}
                         flex={'true'}
                         border={'1px solid var(--color-black)'}>
                    <Text color={'var(--color-black)'}>
                        {numPage + 1}
                    </Text>
                </Buttons>
            }
        </Flex>
    );
}

export default Pagination;