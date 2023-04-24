import { Restaurant } from "../model/restaurant"

 class RestaurantData {
    getAll = (): Restaurant[] => {
        return [
            {
                id: 1,
                name: "restaurant 1",
                image: "https://www.mcdonalds.com/content/dam/sites/dk/nfl/app-promo/212188_Order_McD_950x720.jpg",
                city: "aarhus",
                price: 130,
                rating: [{
                    category: "taste",
                    value: 7
                },
                {
                    category: "texture",
                    value: 8
                },
                {
                    category: "visual presentation",
                    value: 9
                }]
            },
            {
                id: 2,
                name: "restaurant 2",
                image: "https://burgerimperiet.dk/files/74/media/1910-top-10-bedste-burger-i-arhus-se-de-bedste-burgersteder-her.jpg",
                city: "aarhus",
                price: 100,
                rating: [{
                    category: "taste",
                    value: 6
                },
                {
                    category: "texture",
                    value: 7
                },
                {
                    category: "visual presentation",
                    value: 8
                }]
            },
            {
                id: 3,
                name: "restaurant 3",
                image: "https://images.deliveryhero.io/image/fd-dk/LH/q4sw-listing.jpg",
                city: "aarhus",
                price: 90,
                rating: [{
                    category: "taste",
                    value: 5
                },
                {
                    category: "texture",
                    value: 4
                },
                {
                    category: "visual presentation",
                    value: 6
                }]
            },
            {
                id: 4,
                name: "restaurant 4",
                image: "https://smagaarhus.dk/wp-content/uploads/2016/05/The-Burger-Shack-1-e1462735181980.jpg",
                city: "aarhus",
                price: 150,
                rating: [{
                    category: "taste",
                    value: 9
                },
                {
                    category: "texture",
                    value: 8
                },
                {
                    category: "visual presentation",
                    value: 9
                }]
            }

        ]
    }
}

export default new RestaurantData();