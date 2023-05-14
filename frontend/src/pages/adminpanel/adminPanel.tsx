import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import AdminTable from "../../components/adminPanel/table";
import { FormEvent, useState } from "react";
import { WhiteTextField } from "../../components/whiteFormControll";
import AuthServise from "../../services/auth-service";


export default function AdminPanel() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInviteModeler = (event: FormEvent<HTMLFormElement>) => {
        let authService = new AuthServise();
        console.log(event.currentTarget.email.value);
        // authService.sendRegistrationLink(event.currentTarget.email.value)
    }

    return <>
        <Grid mt={10} container justifyContent={"space-between"} alignItems={"center"}>
            <Grid item>
                <Grid container gap={5}>
                    <Grid item><Typography variant="body1">Количество пользователей: {"0"}</Typography></Grid>
                    <Grid item><Typography variant="body1">Количество моделей: {"0"}</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item><Button onClick={handleOpen} variant="contained">Пригласить моделлера</Button></Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ p: 2 }}>
                    <form onSubmit={handleInviteModeler}>
                        <WhiteTextField>
                            <TextField
                                fullWidth
                                name="email"
                                label="Email"
                            />
                        </WhiteTextField>
                        <Button type="submit">Отправить</Button>
                    </form>
                </Box>
            </Modal>
        </Grid>
        <Grid container mt={10}>
            <AdminTable />
        </Grid>
    </>
}