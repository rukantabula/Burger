import { Rating, Button } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CustomTextField } from "../Shared/CustomTextField";
import './CreateEntry.css';

interface Props {
    renderCreateEntryModal: (shoModal: boolean) => void;
}

export const CreateEntry: React.FC<Props> = (props) => {

    const [rating, setRating] = useState<number>()
    const handleClose = () => props.renderCreateEntryModal(false);
    const handleRating = (rate: number) => {
        setRating(rate)
        // Some logic
    }

    const createEntry = () => { };
    return (

        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create new entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomTextField fieldName="Retaurant Name" />
                <CustomTextField fieldName="City" />
                <CustomTextField fieldName="Price" startAdornment="DKK" />
                <div style={{ margin: '10px' }}>
                    Rate
                    <div>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={() => handleRating(1)} />
                    </div>
                </div>

                <Button fullWidth sx={{ m: 1 }} variant="contained" component="label">
                    Upload Photo
                    <input hidden accept="image/*" multiple type="file" />
                </Button>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" color="success" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}