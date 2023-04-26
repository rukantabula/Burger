import { Rating } from "@mui/material";
import React from "react";
import { Modal } from "react-bootstrap";
import { Restaurant, RestaurantRating } from '../../model/restaurant';

interface Props {
    renderDetailedOverviewModal: (shoModal: boolean) => void;
    restaurant: Restaurant;
}

export const DetailedOverview: React.FC<Props> = (props) => {
    const handleClose = () => props.renderDetailedOverviewModal(false);
    return (
        <Modal show={true} onHide={handleClose} centered={true}>
            <Modal.Header closeButton>
                <Modal.Title>{props.restaurant.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ justifyContent: 'center' }}>
                    <div key={props.restaurant.id}>price (in DKK): {props.restaurant.price}</div>
                    <img src={props.restaurant.image} alt="logo" />
                    <div>
                        {props.restaurant.ratings.map((rating: RestaurantRating) => (
                            <div>
                                <div>{rating.category}</div>
                                <Rating
                                    readOnly
                                    name="simple-controlled"
                                    value={rating.value}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}