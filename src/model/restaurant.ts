export interface Restaurant {
    id?: number,
    name: string,
    image: string,
    city: string,
    price: number,
    overAllRaring: number,
    ratings: RestaurantRating[]
}

export interface RestaurantRating {
    category: string,
    value: number
}