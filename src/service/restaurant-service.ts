
import axios, {AxiosInstance} from 'axios';
import { Restaurant } from '../model/restaurant';
import RestaurantData from '../data/restaurants-data';

class RestaurantService {
    API_URL: string = "";

    axiosService: AxiosInstance = axios.create();

    async getRestaurants(): Promise<Restaurant[]> {
        const url = `${this.API_URL}/restaurants`;
        //const res = await this.axiosService.get(url);

        return Promise.resolve(RestaurantData.getAll());
    }
}

const restaurantService: RestaurantService = new RestaurantService();
export default restaurantService;
