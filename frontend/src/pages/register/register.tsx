import { Box, Button, Grid, Typography } from '@mui/material'
import theme from '../../theme'
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthServise from '../../services/auth-service';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import WhiteTextInput from '../../components/common/formInputs/whiteTextInput';
import WhitePasswordInput from '../../components/common/formInputs/whitePasswordInput';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape(
    {
        login: yup.string().required("Введите логин"),
        name: yup.string().required("Введите имя"),
        password: yup.string().required("Введите пароль"),
        email: yup.string().required("Введите почту").email("Введите верную почту"),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password'), undefined], 'Повторите пароль')
    }
)

type FormValues = {
    login: string,
    name: string,
    password: string,
    passwordConfirmation: string,
    email: string
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: FormValues) => {
        let authServise = new AuthServise();
        if (searchParams.get('token') === null) {
            await authServise.registration(
                data.name,
                data.login,
                data.email,
                data.password,
                false,
            )
        } else {
            await authServise.registration(
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

        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container alignItems={"center"} direction={"column"} style={{ width: 500 }} rowGap={4}>
                <Typography color={theme.palette.primary.contrastText} variant="h4">
                    Регистрация
                </Typography>
                <Grid direction={"column"} rowSpacing={2} container>
                    <Grid item>
                        <WhiteTextInput control={control} errors={errors.name} name={'name'} label={'Имя'} />
                    </Grid>
                    <Grid item>
                        <WhiteTextInput control={control} errors={errors.email} name={'email'} label={'Email'} />
                    </Grid>
                    <Grid item>
                        <WhiteTextInput control={control} errors={errors.login} name={'login'} label={'Логин'} />
                    </Grid>
                    <Grid item>
                        <WhitePasswordInput control={control} errors={errors.password} label={'Пароль'} name={'password'} />
                    </Grid>
                    <Grid item>
                        <WhitePasswordInput control={control} errors={errors.passwordConfirmation} label={'Повтор пароля'} name={'passwordConfirmation'} />
                    </Grid>
                </Grid>
                <Grid direction={"column"} rowGap={2} alignItems={"center"} container>
                    <Button size='large' type='submit' fullWidth variant="contained">Зарегистрироваться</Button>
                </Grid>
            </Grid>
        </form>
    </>
}