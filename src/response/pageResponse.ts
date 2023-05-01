import {defer} from "react-router-dom";

async function getPage(id: string) {
    const res = await fetch(`https://reqres.in/api/users?page=${id}`)

    return res.json()
}

export const pageLoader = async ({params}: { params: any }) => {
    const id = params.id;

    return defer({clients: await getPage(id), id})
}