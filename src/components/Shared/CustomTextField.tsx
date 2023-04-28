import React from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";

interface Props {
    fieldName: string,
    startAdornment?: string
}

export const CustomTextField: React.FC<Props> = (props) => {
    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">{props.fieldName}</InputLabel>
            <Input
                id="standard-adornment-amount"
                startAdornment={
                    <InputAdornment position="start">
                        {props.startAdornment ?? props.startAdornment}
                    </InputAdornment>}
            />
        </FormControl>
    )
}