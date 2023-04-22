import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import dummyGirlAvatar from "../../assets/images/dummygirlavatar.png"
import dummyBoyAvatar from "../../assets/images/dummyboyavatar.png"
import fakeData from "../../hardcoded_data/models.json"
import { Model } from "../../contracts/model";
import Card from "../../components/shop/card";

const MODELS = JSON.parse(JSON.stringify(fakeData))

export default function AccountPage() {
    return <>
        <Grid mt={10} container justifyContent={"space-between"}>
            <Grid item>
                <Grid container gap={10} alignItems={"center"}>
                    <Grid item>
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            style={{display:"none"}}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <IconButton component="span">
                                <Avatar sx={{ width: 314, height: 314 }} alt="avatar" src={dummyBoyAvatar} />
                            </IconButton>
                        </label>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"column"} gap={3}>
                            <Grid item><Typography variant="subtitle1">Иванов Иван Иванович</Typography></Grid>
                            <Grid item><Typography color={'#72757E'} variant="caption">Ник:</Typography><Typography variant="body1">IvanovIvan</Typography></Grid>
                            <Grid item><Typography color={'#72757E'} variant="caption">Email:</Typography><Typography variant="body1">ivanovivan@gmail.com</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={"column"} alignItems={"end"} mt={9} gap={7}>
                    <Grid item><Typography color={'#72757E'} variant="caption">На счету:</Typography><Typography variant="subtitle1">20$</Typography></Grid>
                    <Grid item><Button variant="contained">Вывести</Button></Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container columnSpacing={4} rowSpacing={4} mt={6} mb={6}>
            {MODELS.map((model: Model, key: number) => (
                <Grid key={key} item>
                    <Card key={key} model={model} accountOptions={["Удалить", "Изменить"]} />
                </Grid>
            ))}
        </Grid>
    </>
}