import { Box, Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import '../login/login.css'
import theme from '../../theme'
import { WhiteTextField } from '../../components/whiteFormControll'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useParams, useSearchParams } from 'react-router-dom';


export default function RegisterPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    const handleSubmit = () => {
        
        console.log(searchParams.get('token'));
    }

    return <>
        <Box className='login__background'>
            <div className='abstract1' />
            <div className='abstract2' />
            <div className="login__form">
                <form onSubmit={handleSubmit}>
                    <Grid alignItems={"center"} justifyContent={"center"} container>
                        <Grid lg={12} item>
                            <Grid container alignItems={"center"} direction={"column"} rowGap={4}>
                                <Typography color={theme.palette.primary.contrastText} variant="h4">
                                    Регистрация
                                </Typography>
                                <Grid direction={"column"} rowSpacing={2} container>
                                    <Grid item>
                                        <WhiteTextField fullWidth>
                                            <TextField fullWidth label="Имя" />
                                        </WhiteTextField>
                                    </Grid>
                                    <Grid item>
                                        <WhiteTextField fullWidth>
                                            <TextField fullWidth label="Email" />
                                        </WhiteTextField>
                                    </Grid>
                                    <Grid item>
                                        <WhiteTextField fullWidth>
                                            <TextField fullWidth label="Никнейм" />
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
                                    <Grid item>
                                        <WhiteTextField fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Повторите пароль</InputLabel>
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
                                                label="Повторите пароль"
                                            />
                                        </WhiteTextField>
                                    </Grid>
                                </Grid>
                                <Grid direction={"column"} rowGap={2} alignItems={"center"} container>
                                    <Button size='large' type='submit' fullWidth variant="contained">Зарегистрироваться</Button>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </form>
               
            </div>
        </Box >
    </>
}