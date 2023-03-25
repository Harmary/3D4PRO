import { Button, Container, FormControl, Grid, IconButton, InputAdornment, OutlinedInput} from '@mui/material';
import Typography from '@mui/material/Typography';
import bgImage from '../assets/mainpage-backgroung.png';
import Logo from '../assets/Logo.png';
import SearchIcon from '@mui/icons-material/Search';

export default function Banner() {
    return <>
        <div style={{ background: `url(${bgImage}) no-repeat`, backgroundSize: `100% 760px`, width: "100%", height: "760px", zIndex: -20 }}>
            <Container style={{ position: "relative", zIndex: 100 }}>
                <Grid sx={{ pt: "44px", alignItems:"center" }} justifyContent="space-between" container>
                    <Grid item lg={9}>
                        <Grid container alignItems={"center"} gap={"40px"}>
                            <Grid item lg={1}>
                                <img alt="logo" width={38} height={38} src={Logo}></img>
                            </Grid>
                            <Typography variant='body1'>категории</Typography>
                            <Typography variant='body1'>контакты</Typography>
                            <Grid item lg={6}>
                                <FormControl size='small' fullWidth variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        placeholder='Поиск'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="end"
                                                    color='primary'
                                                >
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button size='medium' variant='contained'>Войти</Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                    <Grid item lg={6}>
                        <Typography sx={{ mt: "184px" }} variant='h2'>Lorem ipsum dolor sit amet</Typography>
                        <Typography sx={{ mt: "48px", pb: "0px" }} variant='body1'>Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>

    </>
};
