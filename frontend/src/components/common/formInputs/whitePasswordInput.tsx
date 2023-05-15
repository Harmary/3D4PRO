import { Controller } from "react-hook-form";
import { WhiteTextField } from "../../whiteFormControll";
import { FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import theme from "../../../theme";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type InputProps = {
    control: any,
    errors: any,
    label: string,
    name: string
}

export default function WhitePasswordInput(props: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Controller
            name={props.name}
            control={props.control}
            defaultValue=""
            render={({ field }) => (
                <WhiteTextField fullWidth error={!!props.errors} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
                    <OutlinedInput
                        {...field}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff htmlColor={theme.palette.primary.main} /> : <Visibility htmlColor={theme.palette.primary.main} />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={props.label}
                    />
                    {props.errors?.message && <FormHelperText>{props.errors?.message}</FormHelperText>}
                </WhiteTextField>)

            }
        />
    )
}