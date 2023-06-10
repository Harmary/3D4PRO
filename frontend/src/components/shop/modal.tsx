import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { Model } from "../../contracts/model"
import Scene from "../3dScene";
import './modal.css'

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
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    padding: 5,
};


export default function ModalWindow(props: ModalWindowProps) {

    const handleClose = () => {
        props.setOpen(false);
    }
    
    return <>
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{...style}}>
                <Grid container spacing={3}>
                    <Grid md={6} item>
                        <Scene link={props.model.link}/>
                    </Grid>
                    <Grid md={6} item>
                        <Grid container>
                            <Grid md={11} item>
                                <Typography variant="h4" id="parent-modal-title">{props.model.name}</Typography>
                                <Typography mt={3} variant="body1" color="#72757E" id="parent-modal-description">
                                    {props.model.description}
                                </Typography>
                                <Typography mt={8} variant="h6" id="parent-modal-description">
                                    Текстуры
                                </Typography>
                                <Grid container mt={2} columnSpacing={2}>
                                    {/* {props.model.textures.map((texture, key) => (
                                        <Grid key={key} item>
                                            <div title={texture.url} style={{ background: "#2CB67D", width: 36, height: 36 }}></div>
                                        </Grid>

                                    ))} */}
                                </Grid>
                            </Grid>
                            <Grid mt={20} md={12} item>
                                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                                    <Grid item><Typography variant="h4" id="parent-modal-title">{props.model.price}$</Typography></Grid>
                                    <Grid item><Button variant="contained">Купить</Button></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>
}