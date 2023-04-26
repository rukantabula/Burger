
import restaurantService from "src/service/restaurant-service";
import { Restaurant } from '../model/restaurant';

export const getRestaurants = (): Promise<Restaurant[]> => restaurantService.getRestaurants();
