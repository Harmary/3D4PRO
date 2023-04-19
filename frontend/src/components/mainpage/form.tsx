import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Form() {
    return <>
        <Container>
            <Box sx={{ height: "auto", p: "64px", m: "176px auto", backgroundColor: "#16161A", borderRadius: "24px" }}>
                <Typography width={"600px"} variant="h3" color="primary.contrastText">Хотите свою модель?</Typography>
                <Typography mt={4} width={"600px"} variant="body2" color="primary.contrastText">Оставьте заявку и мы свяжемся с вами</Typography>
                <form style={{ marginTop: "192px" }}>
                    <Grid container direction={"row"} columnSpacing={2}>
                        <Grid item lg={4}>
                            <TextField
                                placeholder="email"
                                type="email"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item lg={2}>
                            <Button style={{height:"inherit"}} size="large" variant='contained'>Отправить</Button>
                        </Grid>
                    </Grid>
                    
                </form>
            </Box>
        </Container>

    </>
};
