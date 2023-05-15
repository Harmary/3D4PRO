import { Controller } from "react-hook-form";
import { WhiteTextField } from "../../whiteFormControll";
import { TextField } from "@mui/material";

type InputProps = {
    control: any,
    errors: any,
    name: string,
    label: string
}

export default function WhiteTextInput(props: InputProps) {
    return (
        <Controller
            name={props.name}
            control={props.control}
            defaultValue=""
            render={({ field }) => (
                <WhiteTextField fullWidth>
                    <TextField
                        {...field}
                        fullWidth
                        label={props.label}
                        error={!!props.errors}
                        helperText={props.errors?.message}
                    />
                </WhiteTextField>
            )}
        />
    )
};
