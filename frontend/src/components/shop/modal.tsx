import { CheckBox } from "@mui/icons-material";
import { Box, Button, Checkbox, Grid, Modal, Radio, Typography } from "@mui/material"
import axios from "axios";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Model } from "../../contracts/model"
import Scene from "../3dScene";
import './modal.css'
import Rectangle from "./variantRect";

type ModalWindowProps = {
    model: Model,
    open: boolean,
    setOpen: (value: boolean) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f3f3f3',
    boxShadow: "24px",
    borderRadius: 24,
    padding: 40,
    width: "900px"
};


export default function ModalWindow(props: ModalWindowProps) {
    const navigate = useNavigate();
    const [variant, setVariant] = useState(props.model.link)
    const [selectedRectangle, setSelectedRectangle] = useState(2)

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleChangeVariant = ( newVariant: string, num: number) => { 
        setVariant(newVariant)
        setSelectedRectangle(num)
     }

    const handleDownloadModel = async() => {
        axios.post("https://api.3d4pro.team418.ru/Shop/BuyModel", {
                "modelUuid": props.model.guid,
                "modelerUuid": props.model.modelerGuid,
                "modelPrice": props.model.price
        }).then ( res => {
            alert("SUCCESS!")
        })
        window.location.href = variant;
    }
    
    return <>
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div style={{...style}}>
                <Grid container spacing={3}>
                    <Grid md={8} item>
                        <Scene link={variant}/>
                    </Grid>
                    <Grid md={4} item>
                        <Grid container>
                            <Grid md={11} item>
                                <Typography variant="h4" id="parent-modal-title">{props.model.name}</Typography>
                                <Typography mt={3} variant="body1" color="#72757E" id="parent-modal-description">
                                    {props.model.description}
                                </Typography>
                                <Typography mt={3} variant="body1" color="#72757E">
                                    Категория: {props.model.category}
                                </Typography>
                                <Typography mt={8} variant="h6" id="parent-modal-description">
                                    Варианты
                                </Typography>
                                <Grid container mt={2} columnSpacing={2}>
                                    {props.model.variants !== null ? props.model.variants.map((item, key) => (
                                        <Grid key={key} item>
                                            <Rectangle isSelected={selectedRectangle === key} onClick={() => { handleChangeVariant(item, key) }} />
                                        </Grid>

                                    )): false}
                                    <Grid item>
                                        <Rectangle isSelected={selectedRectangle === 2} onClick={ () => {handleChangeVariant( props.model.link, 2)}} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid mt={20} md={12} item>
                                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                                    <Grid item><Typography variant="h4" id="parent-modal-title">{props.model.price} ₽</Typography></Grid>
                                    <Grid item><Button variant="contained" onClick={() => {handleDownloadModel()}}>Купить</Button></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    </>
}