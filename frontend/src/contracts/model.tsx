export interface Model {
    "guid": number
    "name": string,
    "description": string,
    "price": number,
    "polygons": number,
    "category": string,
    "link": string,
    "loading_date": string,
    "modeler": string,
    "render": string
}

interface Image {
    id: number,
    url: string
}