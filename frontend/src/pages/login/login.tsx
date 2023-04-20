import { Box, Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import './login.css'
import theme from '../../theme'
import { WhiteTextField } from '../../components/whiteFormControll'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return <>
        <Box className='login__background'>
            <div className='abstract1' />
            <div className='abstract2' />
            <div className="login__form">
                <Grid alignItems={"center"} justifyContent={"center"} container>
                    <Grid lg={12} item>
                        <Grid container alignItems={"center"} direction={"column"} rowGap={4}>
                            <Typography color={theme.palette.primary.contrastText} variant="h4">
                                Добро пожаловать!
                            </Typography>
                            <Grid direction={"column"} rowSpacing={2} container>
                                <Grid item>
                                    <WhiteTextField fullWidth>
                                        <TextField fullWidth label="Логин" />
                                    </WhiteTextField>
                                </Grid>
                                <Grid item>
                                    <WhiteTextField fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff htmlColor={theme.palette.primary.main} /> : <Visibility htmlColor={theme.palette.primary.main} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Пароль"
                                        />
                                    </WhiteTextField>
                                </Grid>
                                <Grid item alignSelf={"end"}>
                                    <Link>Забыли пароль?</Link>
                                </Grid>
                            </Grid>
                            <Grid direction={"column"} rowGap={2} alignItems={"center"} container>
                                <Button size='large' fullWidth variant="contained">Войти</Button>
                                <Grid item>
                                    <Typography mr={1} color={'#72757E'} variant='caption'>Нет аккаунта?</Typography>
                                    <Link href='/register'>Зарегистрируйтесь</Link>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </div>
        </Box >
    </>
}