export interface actionState {
    action: any,
    error: any,
    status?: string,
}

export interface pagePeopleState {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}