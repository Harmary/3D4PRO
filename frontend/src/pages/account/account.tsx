import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import dummyGirlAvatar from "../../assets/images/dummygirlavatar.png"
import dummyBoyAvatar from "../../assets/images/dummyboyavatar.png"
import fakeData from "../../hardcoded_data/models.json"
import { Model } from "../../contracts/model";
import Card from "../../components/shop/card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminService from "../../services/admin-service";
import { User } from "../../contracts/user";

const MODELS = JSON.parse(JSON.stringify(fakeData))

export default function AccountPage() {
    let { guid } = useParams();
    let role = localStorage.getItem('userRole')
    const [user, setUser] = useState<User>();

    useEffect(() => {
        let adminService = new AdminService();
        adminService.getUserByGuid(guid as string, role as string).then((res) => {
            setUser(res.data[0])
        })
    },[setUser])

    return <>
        <Grid mt={10} container justifyContent={"space-between"}>
            <Grid item>
                <Grid container gap={10} alignItems={"center"}>
                    <Grid item>
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            style={{ display: "none" }}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <IconButton component="span">
                                <Avatar sx={{ width: 314, height: 314 }} alt="avatar" src={user?.link ? user?.link :dummyBoyAvatar} />
                            </IconButton>
                        </label>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"column"} gap={3}>
                            <Grid item><Typography variant="subtitle1">{user?.name}</Typography></Grid>
                            <Grid item><Typography color={'#72757E'} variant="caption">Ник:</Typography><Typography variant="body1">{user?.login}</Typography></Grid>
                            <Grid item><Typography color={'#72757E'} variant="caption">Email:</Typography><Typography variant="body1">{user?.email}</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {role === 'modeler' ?
                <Grid item>
                    <Grid container direction={"column"} alignItems={"end"} mt={9} gap={7}>
                        <Grid item><Typography color={'#72757E'} variant="caption">На счету:</Typography><Typography variant="subtitle1">{user?.account}$</Typography></Grid>
                        <Grid item><Button variant="contained">Вывести</Button></Grid>
                    </Grid>
                </Grid>
                : ""
            }
        </Grid>
        {role === 'modeler' ?
            <Grid container columnSpacing={4} rowSpacing={4} mt={6} mb={6}>
                {MODELS.map((model: Model, key: number) => (
                    <Grid key={key} item>
                        <Card key={key} model={model} accountOptions={["Удалить", "Изменить"]} />
                    </Grid>
                ))}
            </Grid>
            :""
        }
        
    </>
}