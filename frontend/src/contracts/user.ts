import { Model } from "./model"

export interface User {
    "guid": string,
    "name": string,
    "login": string,
    "email": string,
    "password": string,
    "link": string | null
    "account": number
    "models": Model[]
}