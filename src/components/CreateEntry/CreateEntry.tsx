import { InputLabel, Input, InputAdornment, Rating, FormControl, Button } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Retaurant Name</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">City</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">DKK</InputAdornment>}
                />
            </FormControl>
            <Button fullWidth sx={{ m: 1 }} variant="contained" component="label">
                Upload Photo
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={() => handleRating(1)}
            />


        </Modal.Body>
        <Modal.Footer>
            <Button variant="contained" color="success" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    )
}