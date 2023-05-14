import { Box, Button, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import './login.css'
import theme from '../../theme'
import { WhiteTextField } from '../../components/whiteFormControll'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import AuthServise from '../../services/auth-service';

type FormValues = {
    login: string,
    password: string
}

const schema = yup.object().shape(
    {
        login: yup.string().required("Введите логин"),
        password: yup.string().required("Введите пароль"),
    }
)

export default function LoginPage() {
    let navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) })
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = (data: FormValues) => { 
        let authServise = new AuthServise();
        authServise.login(data.login,data.password);
        switch (localStorage.getItem('userRole')) {
            case 'admin':
                return navigate("/adminpanel");
            case 'user':
                return navigate(`/account/${localStorage.getItem('userGuid')}`);
            case 'modeler':
                return navigate(`/account/${localStorage.getItem('userGuid')}`);
            default:
                break;
        }
     }


    return <>
        <Box className='login__background'>
            <div className='abstract1' />
            <div className='abstract2' />
            <div className="login__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid alignItems={"center"} justifyContent={"center"} container>
                        <Grid lg={12} item>
                            <Grid container alignItems={"center"} direction={"column"} rowGap={4}>
                                <Typography color={theme.palette.primary.contrastText} variant="h4">
                                    Добро пожаловать!
                                </Typography>
                                <Grid direction={"column"} rowSpacing={2} container>
                                    <Grid item>
                                        <Controller
                                            name="login"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <WhiteTextField fullWidth>
                                                    <TextField 
                                                        {...field} 
                                                        fullWidth 
                                                        label="Логин"
                                                        error={!!errors.login}
                                                        helperText={errors.login?.message}
                                                    />
                                                </WhiteTextField>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Controller
                                            name="password"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <WhiteTextField fullWidth error={!!errors.password} variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                                                    <OutlinedInput
                                                        {...field} 
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
                                                    {errors.password?.message && <FormHelperText>{errors.password?.message}</FormHelperText>}
                                                </WhiteTextField>)

                                            }
                                        />
                                    </Grid>
                                    <Grid item alignSelf={"end"}>
                                        <Link>Забыли пароль?</Link>
                                    </Grid>
                                </Grid>
                                <Grid direction={"column"} rowGap={2} alignItems={"center"} container>
                                    <Button size='large' fullWidth type='submit' variant="contained">Войти</Button>
                                    <Grid item>
                                        <Typography mr={1} color={'#72757E'} variant='caption'>Нет аккаунта?</Typography>
                                        <Link href='/register'>Зарегистрируйтесь</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Box >
    </>
}