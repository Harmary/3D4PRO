import { Box, Grid } from "@mui/material";
import './formsLayout.css'
type LayoutProps = {
    children?: JSX.Element | JSX.Element[];
};

export function FormLayout(props: LayoutProps) {
    return (
        <Box className='form__background'>
            <div className='abstract1' />
            <div className='abstract2' />
            <div className="form">
                <Grid alignItems={"center"} justifyContent={"center"} container>
                    <Grid lg={12} item>
                        {props.children}
                    </Grid>
                </Grid>
            </div>
        </Box>
    )

}