import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type CardProps = {
    title: string;
    image: string;
    text: string
}

export default function Card(props: CardProps) {
    return <>
        <Box sx={{position:"relative", zIndex:1, '& > :not(style)':{ width: "inherit", height: "416px", borderRadius:"24px", background: "linear-gradient(180deg, #C4B8EB 0%, #7F5AF0 100%)" }}}>
            <Paper elevation={5} >
                <Grid container padding={"44px"} direction={"column"} rowSpacing={"16px"}>
                    <Grid item>
                        <img width={"170px"} height={"170px"} alt={props.image} src={props.image} />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" color="#fffffe">{props.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="#fffffe">{props.text}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
        
    </>
};
