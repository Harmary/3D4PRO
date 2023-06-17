export interface Model {
    "guid": number
    "name": string,
    "description": string,
    "price": number,
    "polygons": number,
    "category": string,
    "link": string,
    "loading_date": string,
    "modelerName": string,
    "modelerGuid": string,
    "render": string
    "variants": string[]
}

interface Image {
    id: number,
    url: string
}