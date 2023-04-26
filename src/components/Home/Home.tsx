import { Button, IconButton, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './Home.css';
import { Restaurant } from '../../model/restaurant';
import { getRestaurants } from "src/controller/HomeController";
import { CreateEntry } from "../CreateEntry/CreateEntry";
import { DetailedOverview } from "../DetailedOverview/DetailedOverview";

export const Home: React.FC = () => {
    const [showCreateEntryModal, setShowCreateEntryModal] = useState(false);
    const [showDetailedOverviewModal, setShowDetailedOverviewModal] = useState(false);

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [restaurant, setRestaurant] = useState<Restaurant>();

    useEffect(() => {
        getRestaurants()
            .then(data => setRestaurants(data));
    }, [restaurants]);


    const renderCreateEntryModal = (show: boolean) => setShowCreateEntryModal(show);

    const renderDetailedOverviewModal = (show: boolean) => setShowDetailedOverviewModal(show);

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
                        <tr key={restaurant.id} onClick={() => {
                            setRestaurant(restaurant);
                            setShowDetailedOverviewModal(true);
                        }}>
                            <td>
                                <div style={{ display: 'flex', margin: '15px 10px' }}>{restaurant.name}</div></td>
                            <td>{restaurant.price}</td>
                            <td>
                                <Rating
                                    readOnly
                                    name="simple-controlled"
                                    value={restaurant.overAllRaring}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {showDetailedOverviewModal && restaurant &&
                <DetailedOverview
                    restaurant={restaurant}
                    renderDetailedOverviewModal={renderDetailedOverviewModal} />
            }
            {showCreateEntryModal && 
            <CreateEntry renderCreateEntryModal={renderCreateEntryModal} />
            }

            <Button key="key" variant="contained" onClick={() => { renderCreateEntryModal(true); }}>Create new entry</Button>
        </div>
    )
}