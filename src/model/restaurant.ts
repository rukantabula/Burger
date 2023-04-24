export interface Restaurant {
    id?: number,
    name: string,
    image: string,
    city: string,
    price: number,
    rating: {
        category: string,
        value: number
    }[]
}