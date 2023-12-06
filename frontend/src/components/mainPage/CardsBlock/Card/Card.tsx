import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./Card.module.css"

interface CardProps {
    title: string;
    image: string;
    text: string
}

export const Card: React.FC<CardProps> = ({ image, title, text }: CardProps) => {
    return (
        <div className={styles.Card}>
            <Paper elevation={5} >
                <Grid container rowSpacing={2} className={styles.Card__container} >
                    <Grid item>
                        <img className={styles.Card__image} alt={image} src={image} />
                    </Grid>
                    <Grid item>
                        <Typography className={styles.Card__title} variant="subtitle1" >{title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={styles.Card__text} variant="body1" >{text}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
        );
};
