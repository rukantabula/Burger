import React from "react";
import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { Button, Modal } from "react-bootstrap";
import { getRatingLabel } from "src/controller/CreateEntryController";
import { Restaurant, RestaurantRating } from '../../model/restaurant';
import './DetailedOverview.css';

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
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={props.restaurant.image}
                        title="green iguana" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <div>Price (in DKK): {props.restaurant.price}</div>
                            {props.restaurant.ratings.map((rating: RestaurantRating) => (
                                <div key={props.restaurant.id}>
                                    <div>{getRatingLabel(rating.category)}</div>
                                    <Rating
                                        readOnly
                                        name="simple-controlled"
                                        value={rating.value} />
                                </div>))}
                            <div>
                                <div>Overall rating</div>
                                <Rating
                                    readOnly
                                    name="simple-controlled"
                                    value={props.restaurant.overAllRaring} />
                            </div>
                            <div>Opening Hours</div>
                            <div >08:00 - 22:00</div>
                            <Button className="save-button" key="key" onClick={() => { }}>Show on map</Button>
                        </Typography>
                    </CardContent>
                </Card>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}