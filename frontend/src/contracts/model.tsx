export interface Model {
    "name": string,
    "description": string,
    "price": number,
    "renders": Image[],
    "textures": Image[]
}

interface Image {
    id: number,
    url: string
}