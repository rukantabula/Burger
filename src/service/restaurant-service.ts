
import axios, {AxiosInstance} from 'axios';
import { Restaurant } from '../model/restaurant';
import RestaurantData from '../data/restaurants-data';

class RestaurantService {

    axiosService: AxiosInstance = axios.create();

    async getRestaurants(): Promise<Restaurant[]> {
        return Promise.resolve(RestaurantData.getAll());
    }
}

const restaurantService: RestaurantService = new RestaurantService();
export default restaurantService;
