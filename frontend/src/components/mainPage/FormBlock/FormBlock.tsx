import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { WhiteTextField } from "components/whiteFormControll";
import styles from './Form.module.css';

export const FormBlock: React.FC = () => {
    return (
        <Container>
            <div className={styles.FormBlock__content}>
                <Grid container direction={"column"} rowSpacing={24}>
                    <Grid item>
                        <Grid container direction={"column"} rowSpacing={4}>
                            <Grid item>
                                <Typography variant="h3" color="primary.contrastText">Хотите свою модель?</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" color="primary.contrastText">Оставьте заявку и мы свяжемся с вами</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <form >
                            <Grid container alignItems={"center"} columnSpacing={2}>
                                <Grid item lg={4}>
                                    <WhiteTextField fullWidth>
                                        <TextField
                                            placeholder="email"
                                            label="Email"
                                            type="email"
                                            margin="dense"
                                            fullWidth
                                        />
                                    </WhiteTextField>
                                </Grid>
                                <Grid item lg={2}>
                                    <Button variant='contained'>Отправить</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid >
                </Grid>
            </div>
        </Container>
    );

};
