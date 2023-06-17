import { Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./card.css"

type CardProps = {
    title: string;
    image: string;
    text: string
}


export default function Card(props: CardProps) {
    return <>
        <div className="card">
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
        </div>
        
    </>
};
