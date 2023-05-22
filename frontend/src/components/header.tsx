import Logo from '../assets/Logo.svg';
import { useState, MouseEvent } from 'react';
import Logo2 from '../assets/logo2.svg';
import { Avatar, Button, FormControl, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput } from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { WhiteTextField } from './whiteFormControll';
import MenuNavLink from './menuNavLink';
import AuthServise from '../services/auth-service';
import PersonIcon from '@mui/icons-material/Person';
import theme from '../theme';

type HeaderProps = {
    theme: string;
}

export default function Header(props: HeaderProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleLogoutClick = () => {
        let authService = new AuthServise();
        authService.logout();
    }

    return <>
        <Grid sx={{ pt: 5, alignItems: "center" }} justifyContent="space-between" container>
            <Grid item lg={9}>
                <Grid container alignItems={"center"} gap={"40px"}>
                    <Grid item lg={1}>
                        <Link to="/">
                            <img alt="logo" width={38} height={38} src={props.theme === "white" ? Logo2 : Logo}></img>
                        </Link>
                    </Grid>
                    <MenuNavLink path="/shop" name='магазин' theme={props.theme} />
                    <Typography color={props.theme === "white" ? "16161A" : "#fffffe"} textAlign="center" variant='body1'>категории</Typography>
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
                {localStorage.getItem('userGuid') ?
                    <>
                        <IconButton
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                }}
                            >
                                <PersonIcon />
                            </Avatar>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: 200,
                                    width: '15ch',
                                },
                            }}
                        >
                            <MenuItem href="/account">
                                <Link to={localStorage.getItem("userRole") === 'admin' ? `/adminpanel` :`/account/${localStorage.getItem("userGuid")}`}>Аккаунт</Link></MenuItem>
                            <MenuItem>
                                <Button component={Link} to="/login" onClick={handleLogoutClick} size='medium' variant='contained'>Выйти</Button>
                            </MenuItem>
                        </Menu>
                    </>
                    : <Button component={Link} to="/login" size='medium' variant='contained'>Войти</Button>}

            </Grid>
        </Grid>
    </>
};
