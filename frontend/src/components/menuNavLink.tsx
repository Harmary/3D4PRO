import { MenuItem, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { css } from '@emotion/css'
import theme from "../theme";

type MenuNavLinkProps = {
    path: string,
    theme: string,
    name: string,
}

const style = css({
    textDecoration: "none",
    '& :hover': {
        color: theme.palette.primary.main,
        textShadow: '0px 5px 67px #5F44B1'
    },
    '& :visited':{
        color: '#000'
    },
    '& :active':{
        color: '#000'
    },
    '& :focus':{
        color: '#000'
    }
});

export default function MenuNavLink(props: MenuNavLinkProps) {
    return <>
        <NavLink className={style} to={props.path}>
            <Typography color={props.theme === "white" ? "16161A" : "#fffffe"} textAlign="center" variant='body1'>{props.name}</Typography>
        </NavLink>

    </>
}