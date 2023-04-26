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
                overAllRaring: 3,
                ratings: [{
                    category: "taste",
                    value: 3
                },
                {
                    category: "texture",
                    value: 4
                },
                {
                    category: "visual presentation",
                    value: 2
                }]
            },
            {
                id: 2,
                name: "restaurant 2",
                image: "https://burgerimperiet.dk/files/74/media/1910-top-10-bedste-burger-i-arhus-se-de-bedste-burgersteder-her.jpg",
                city: "aarhus",
                price: 100,
                overAllRaring: 4,
                ratings: [{
                    category: "taste",
                    value: 3
                },
                {
                    category: "texture",
                    value: 5
                },
                {
                    category: "visual presentation",
                    value: 4
                }]
            },
            {
                id: 3,
                name: "restaurant 3",
                image: "https://images.deliveryhero.io/image/fd-dk/LH/q4sw-listing.jpg",
                city: "aarhus",
                price: 90,
                overAllRaring: 5,
                ratings: [{
                    category: "taste",
                    value: 35
                },
                {
                    category: "texture",
                    value: 5
                },
                {
                    category: "visual presentation",
                    value: 5
                }]
            },
            {
                id: 4,
                name: "restaurant 4",
                image: "https://smagaarhus.dk/wp-content/uploads/2016/05/The-Burger-Shack-1-e1462735181980.jpg",
                city: "aarhus",
                price: 150,
                overAllRaring: 2,
                ratings: [{
                    category: "taste",
                    value: 1
                },
                {
                    category: "texture",
                    value: 2
                },
                {
                    category: "visual presentation",
                    value: 3
                }]
            }

        ]
    }
}

export default new RestaurantData();