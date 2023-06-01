import { Grid } from "@mui/material";
import Card from "../../components/shop/card";
import { Model } from "../../contracts/model";
import fakeData from "../../hardcoded_data/models.json"
import FilterPanel from "../../components/shop/panel";
import { useEffect, useState } from "react";
import axios from "axios";

const MODELS = JSON.parse(JSON.stringify(fakeData))

export default function ShopPage() {
    const [models, setModels] = useState<Model[]>([]);

    useEffect(() => {
        axios.get('https://api.3d4pro.team418.ru/Shop/GetAllModels')
            .then((res) => { setModels(res.data) })
    }, [])

    return <>
        <Grid mt={10} container>
            <FilterPanel />
        </Grid>
        <Grid container columnSpacing={4} rowSpacing={4} mt={6}>
            {models.map((model: Model, key: number) => (
                <Grid key={key} item>
                    <Card key={key} model={model}></Card>
                </Grid>
            ))}
        </Grid>
    </>
}