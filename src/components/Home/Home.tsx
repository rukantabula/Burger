import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import './Home.css';
import restaurantService from "src/service/restaurant-service";
import { Restaurant } from '../../model/restaurant';

export const Home: React.FC = () => {
    const [rating, setRating] = useState(3)
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        restaurantService.getRestaurants()
            .then(data => setRestaurants(data));
    }, []);

    const handleRating = (rate: number) => {
        setRating(rate)
        // Some logic
    }

    return (
        <div className="container">
            <h2 className="title" style={{ display: 'flex', margin: '20px 0px' }}>Ratings today!</h2>
            <Table responsive="sm" striped bordered hover className="title" color="#fff">
                <thead>
                    <tr>
                        <th>Restaurant</th>
                        <th>Price (in DKK)</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.length !== 0 && restaurants.map(restaurant =>
                        <tr key={restaurant.id} >
                            <td>{/*<img className="img" src={restaurant.image} alt="logo" />*/}
                                <div style={{ display: 'flex', margin: '15px 10px' }}>{restaurant.name}</div></td>
                            <td>{restaurant.price}</td>
                            <td>
                                <Rating
                                    readOnly
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={() => handleRating}
                                />
                            </td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}