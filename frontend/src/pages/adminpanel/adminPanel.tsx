import { Box, Button, Grid, Typography } from "@mui/material";
import AdminTable from "../../components/adminPanel/table";


export default function AdminPanel() {
    return <>
        <Grid mt={10} container justifyContent={"space-between"} alignItems={"center"}>
            <Grid item>
                <Grid container gap={5}>
                    <Grid item><Typography variant="body1">Количество пользователей: {"0"}</Typography></Grid>
                    <Grid item><Typography variant="body1">Количество моделей: {"0"}</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item><Button variant="contained">Пригласить моделлера</Button></Grid>
        </Grid>
        <Grid container mt={10}>
            <AdminTable />
        </Grid>
    </>
}