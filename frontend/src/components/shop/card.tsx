import { Grid, IconButton, Typography } from "@mui/material"
import { Model } from "../../contracts/model"
import downloandIcn from "../../assets/images/icons/download.png"
import { useState } from "react"

type CardProps = {
    model: Model,
}

export default function Card(props: CardProps) {
    const [modal, setModal] = useState(false);



    return <div style={{
        width: "360px",
        height: "416px",
        background: `url('${props.model.renders[0].url}') no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "24px"
    }} onClick={() => setModal(true)} >
        <div style={{
            width: "inherit",
            height: "inherit", backgroundImage: `linear-gradient(180deg, rgba(120, 120, 137, 0) 40.42%, #16161A 85.73%) `, borderRadius: "inherit"
        }}>
            <Grid pt={39} pl={3} pr={3} justifyContent="space-between" container>
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item><Typography color="primary.contrastText" variant='subtitle1'>{props.model.name}</Typography></Grid>
                        <Grid item><Typography color="primary.contrastText" variant='caption'>{props.model.price}$</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton>
                        <img src={downloandIcn} alt="download" width={25} height={25}></img>
                    </IconButton>
                </Grid>
            </Grid>

        </div>

    </div>
}