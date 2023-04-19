import Logo from '../assets/Logo.svg';
import Logo2 from '../assets/logo2.svg';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputBase, OutlinedInput, alpha, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import { WhiteTextField } from './whiteFormControll';

type HeaderProps = {
    theme: string;
}

export default function Header(props: HeaderProps) {
    return <>
        <Grid sx={{ pt: "44px", alignItems: "center" }} justifyContent="space-between" container>
            <Grid item lg={9}>
                <Grid container alignItems={"center"} gap={"40px"}>
                    <Grid item lg={1}>
                        <Link to="/">
                            <img alt="logo" width={38} height={38} src={props.theme === "white" ? Logo2 : Logo}></img>
                        </Link>
                    </Grid>
                    <NavLink style={{textDecoration:"none"}} to="/shop">
                        <Typography color={props.theme === "white" ? "16161A" : "#fffffe"} textAlign="center" variant='body1'>магазин</Typography>
                    </NavLink>
                    <Typography color={props.theme === "white" ? "16161A" : "#fffffe"} textAlign="center" variant='body1'>контакты</Typography>
                    <Grid item lg={6}>
                        {props.theme === "white" ? <FormControl size='small' fullWidth variant="outlined">
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
                        </FormControl> : <WhiteTextField size='small' fullWidth variant="outlined">
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
                        </WhiteTextField>}
                        
                    </Grid>

                </Grid>
            </Grid>
            <Grid item>
                <Button size='medium' variant='contained'>Войти</Button>
            </Grid>
        </Grid>
    </>
};
