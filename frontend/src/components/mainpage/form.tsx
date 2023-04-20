import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Form() {
    return <>
        <Container>
            <Box sx={{ height: "auto", p: 8, mt: 24, mb:24, backgroundColor: "#16161A", borderRadius: 3 }}>
                <Grid container direction={"column"} rowSpacing={24}>
                    <Grid lg={6} item>
                        <Grid container direction={"column"}>
                            <Grid container direction={"column"} rowSpacing={4}>
                                <Grid item>
                                    <Typography variant="h3" color="primary.contrastText">Хотите свою модель?</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" color="primary.contrastText">Оставьте заявку и мы свяжемся с вами</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <form >
                            <Grid container columnSpacing={2}>
                                <Grid item lg={4}>
                                    <TextField
                                        placeholder="email"
                                        type="email"
                                        margin="dense"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item lg={2}>
                                    <Button variant='contained'>Отправить</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid >
                </Grid>

            </Box>
        </Container>

    </>
};
