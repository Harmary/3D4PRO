import { Grid, IconButton, Paper, Typography } from "@mui/material"
import { Model } from "../../contracts/model"
import downloandIcn from "../../assets/images/icons/download.png"
import { useState } from "react"
import ModalWindow from "./modal"
import KebabMenu from "../kebabMenu"

type CardProps = {
    model: Model,
    accountOptions?: string[];
}

export default function Card(props: CardProps) {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };


    return <>
        <Paper elevation={6} sx={{
            width: 360,
            height: 416,
            background: `url('${props.model.renders[0].url}') no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: 3
        }} >
            <div style={{
                width: "inherit",
                height: "inherit", 
                backgroundImage: `linear-gradient(180deg, rgba(120, 120, 137, 0) 40.42%, #16161A 85.73%) `, 
                borderRadius: "inherit",
                cursor: "pointer"
            }}>
                {props.accountOptions !== undefined ? <Grid container p={1} justifyContent={"end"}>
                    <KebabMenu options={props.accountOptions}/>
                </Grid> : ""}
                <Grid pt={props.accountOptions !== undefined ? 33 : 39} pl={3} pr={3} justifyContent="space-between" onClick={handleOpenModal} container>
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
        </Paper>
        <ModalWindow setOpen={setModal} open={modal} model={props.model}/>
    </>
}