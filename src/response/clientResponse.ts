import {defer} from "react-router-dom";

async function getClients(id: string) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)

    return res.json()
}

export const clientLoader = async ({params}: { params: any }) => {
    const id = params.id;

    return defer({clients: await getClients(id), id})
}