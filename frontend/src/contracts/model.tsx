export interface Model {
    "id": number
    "name": string,
    "description": string,
    "price": number,
    "category": string,
    "link": string,
    "uploadingDate": string,
    "creatorId": number,
    "creatorName": string,
    "renders": Image[],
    "textures": Image[]
}

interface Image {
    id: number,
    url: string
}