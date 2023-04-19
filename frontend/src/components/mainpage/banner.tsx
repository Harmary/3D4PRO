import { Button, Container, FormControl, Grid, IconButton, InputAdornment, OutlinedInput} from '@mui/material';
import Typography from '@mui/material/Typography';
import bgImage from '../../assets/mainpage-backgroung.png';

import Header from '../header';

export default function Banner() {
    return <>
        <div style={{ background: `url(${bgImage}) no-repeat`, backgroundSize: `100% 760px`, width: "100%", height: "760px", zIndex: -20 }}>
            <Container style={{ position: "relative", zIndex: 100 }}>
                <Header theme="black"/>
                <Grid container justifyContent={"center"}>
                    <Grid item lg={10}>
                        <Typography sx={{ mt: "184px" }} variant='h3' color="primary.contrastText" textAlign="center">Преврати идеи в реальность</Typography>
                        <Typography sx={{ mt: "48px", pb: "0px" }} color="primary.contrastText" textAlign="center" variant='body2'>Воплоти свои идеи в жизнь с нашими 3D-моделями</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>

    </>
};
