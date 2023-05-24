import { Controller } from "react-hook-form";
import { WhiteTextField } from "../../whiteFormControll";
import { TextField } from "@mui/material";

type InputProps = {
    control: any,
    errors: any,
    name: string,
    label: string
}

export default function WhiteTextAria(props: InputProps) {
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
                        multiline
                        rows={9}
                        label={props.label}
                        error={!!props.errors}
                        helperText={props.errors?.message}
                    />
                </WhiteTextField>
            )}
        />
    )
};
