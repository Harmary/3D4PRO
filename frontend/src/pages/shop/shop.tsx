import { Grid } from "@mui/material";
import Card from "../../components/shop/card";
import { Model } from "../../contracts/model";
import fakeData from "../../hardcoded_data/models.json"
import FilterPanel from "../../components/shop/panel";

const MODELS = JSON.parse(JSON.stringify(fakeData))

export default function ShopPage() {
    return <>
        <Grid mt={10} container>
            <FilterPanel/>
        </Grid>
        <Grid container columnSpacing={4} rowSpacing={4} mt={6}>
            {MODELS.map((model: Model, key: number) => (
                <Grid key={key} item>
                    <Card key={key} model={model}></Card>
                </Grid>
            ))}
        </Grid>
    </>
}