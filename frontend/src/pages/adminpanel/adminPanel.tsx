import { Alert, Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import AdminTable from "../../components/adminPanel/table";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import AuthServise from "../../services/auth-service";
import AdminService from "../../services/admin-service";
import { User } from "../../contracts/user";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default function AdminPanel() {
    const [alertOpen, setAlertOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [rows, setRows] = useState<User[]>([])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInviteModeler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let authService = new AuthServise();
        authService.sendRegistrationLink(email)
            .then((res) => setAlertOpen(true))
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }

    useEffect(() => {
        let adminService = new AdminService();
        adminService.getAllUsers().then((res) =>
            setRows(res.data)
        );

    }, [setRows])

    return <>
        <Grid mt={10} container justifyContent={"space-between"} alignItems={"center"}>
            <Grid item>
                <Grid container gap={5}>
                    <Grid item><Typography variant="body1">Количество пользователей: {rows.length}</Typography></Grid>
                    <Grid item><Typography variant="body1">Количество моделей: {"3"}</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item><Button onClick={handleOpen} variant="contained">Пригласить моделлера</Button></Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    boxShadow: "24px",
                    padding: 30,
                }}>
                    <form onSubmit={handleInviteModeler}>
                        <Grid container direction={"column"} rowGap={2} alignItems={"center"}>
                            <Typography variant="body1">Введите email для отправки приглашения</Typography>
                            <Grid container gap={2} justifyContent={"center"}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                                <Button variant="contained" type="submit">Отправить</Button>
                            </Grid>
                            {alertOpen && <Alert sx={{width: "80%"}} severity="success">Письмо отправлено</Alert>}
                        </Grid>
                    </form>
                </div>
            </Modal>
        </Grid>
        <Grid container mt={10}>
            <AdminTable rows={rows} />
        </Grid>
    </>
}