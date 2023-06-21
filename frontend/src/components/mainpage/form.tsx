import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { WhiteTextField } from "../whiteFormControll";

export default function Form() {
    return <>
        <Container>
            <div style={{ height: "auto", padding: "8px", marginTop: "24px", marginBottom: "24px", backgroundColor: "#16161A", borderRadius: "3px" }}>
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

    </>
};
