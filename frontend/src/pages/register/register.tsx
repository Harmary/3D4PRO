import { Box, Button, Container, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import '../login/login.css'
import theme from '../../theme'
import { WhiteTextField } from '../../components/whiteFormControll'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthServise from '../../services/auth-service';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form';
import { type } from 'os';

const schema = yup.object().shape(
    {
        login: yup.string().required("Введите логин"),
        name: yup.string().required("Введите имя"),
        password: yup.string().required("Введите пароль"),
        email: yup.string().required("Введите почту").email("Введите верную почту"),
    }
)

type FormValues = {
    login: string,
    name: string,
    password: string,
    email: string
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const [showPassword, setShowPassword] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    const onSubmit = (data: FormValues) => {
        let authServise = new AuthServise();
        if (searchParams.get('token') === null) {
            authServise.registration(
                data.name,
                data.login,
                data.email,
                data.password,
                false,
            )
        } else {
            authServise.registration(
                data.name,
                data.login,
                data.email,
                data.password,
                true,
                searchParams.get('token') as string
            )
        }
        navigate(`/account/${localStorage.getItem('userGuid')}`)
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
                                    Регистрация
                                </Typography>
                                <Grid direction={"column"} rowSpacing={2} container>
                                    <Grid item>
                                        <Controller
                                            name="name"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <WhiteTextField fullWidth>
                                                    <TextField  
                                                        {...field} 
                                                        fullWidth 
                                                        label="Имя" 
                                                        error={!!errors.name}
                                                        helperText={errors.name?.message} />
                                                </WhiteTextField>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <WhiteTextField fullWidth>
                                                    <TextField
                                                        {...field}
                                                        fullWidth
                                                        label="Email"
                                                        error={!!errors.email}
                                                        helperText={errors.email?.message} />
                                                </WhiteTextField>
                                            )}
                                        />
                                    </Grid>
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
                                                        helperText={errors.login?.message} />
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