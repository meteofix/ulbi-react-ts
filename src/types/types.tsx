
export interface IAdress {
    street: string
    city: string
    zipcode: string
    suite: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: IAdress
}
export interface ITodo {
    id: number
    title: string
    completed: boolean
}