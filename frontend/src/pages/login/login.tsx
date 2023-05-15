import { Box, Button, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import './login.css'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import AuthServise from '../../services/auth-service';
import WhiteTextInput from '../../components/common/formInputs/whiteTextInput';
import WhitePasswordInput from '../../components/common/formInputs/whitePasswordInput';
import jwtDecode from "jwt-decode";
import { useEffect, useState } from 'react';


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

    const onSubmit = async (data: FormValues) => {
        let authServise = new AuthServise();
        await authServise.login(data.login, data.password)
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
                                        <WhiteTextInput control={control} errors={errors.login} label={"Логин"} name="login" />
                                    </Grid>
                                    <Grid item>
                                        <WhitePasswordInput control={control} errors={errors.password} label={'Пароль'} name={'password'} />
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