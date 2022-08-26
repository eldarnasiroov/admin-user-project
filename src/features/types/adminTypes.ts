export interface IAdminData {
    username: string;
    password: string;
    permission: boolean;
}
export interface IAdminLoginPayload {
    username: string;
    password: string;
}
export interface IChangedValues {
    id: number;
    name: string;
    price: number;
}