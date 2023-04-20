import { Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

type MenuNavLinkProps = {
    path: string,
    theme: string,
    name: string,
}

export default function MenuNavLink(props: MenuNavLinkProps) {
    return <>
        <NavLink style={{ textDecoration: "none" }} to={props.path}>
            <Typography color={props.theme === "white" ? "16161A" : "#fffffe"} textAlign="center" variant='body1'>{props.name}</Typography>
        </NavLink>
    </>
}