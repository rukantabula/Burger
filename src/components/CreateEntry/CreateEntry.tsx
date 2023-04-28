import React, { useState } from "react";
import { Rating, Button } from "@mui/material";
import { Modal } from "react-bootstrap";
import { ratingLabels } from "src/controller/CreateEntryController";
import { CustomTextField } from "../Shared/CustomTextField";

interface Props {
    renderCreateEntryModal: (shoModal: boolean) => void;
}

export const CreateEntry: React.FC<Props> = (props) => {

    const [rating, setRating] = useState<number>();

    const handleClose = () => props.renderCreateEntryModal(false);

    const handleRating = () => {};

    return (

        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create new entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomTextField fieldName="Retaurant Name" />
                <CustomTextField fieldName="City" />
                <CustomTextField fieldName="Price" startAdornment="DKK" />
                {Array.from(ratingLabels.values()).map((label: string) =>
                    <div key={label} style={{ margin: '10px' }}>
                        Rate {label}
                        <div>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={() => handleRating()} />
                        </div>
                    </div>
                )}

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