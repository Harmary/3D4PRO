import Dropdown from './dropdown';
import { Grid } from '@mui/material';


export default function FilterPanel() {
  
    return <>
        <Grid justifyContent={"space-between"} container>
            <Grid item>
                <Grid container columnSpacing={2}>
                    <Grid item>
                        <Dropdown name={"Категории"} menuItems={["Lowpoly", "Highpoly"]} />
                    </Grid>
                    <Grid item>
                        <Dropdown name={"Цены"} menuItems={["0-100", "100-200"]} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Dropdown name={"Cортировать"} menuItems={["По возрастанию цены", "По убыванию цены", "По возрастанию даты", "По убыванию даты"]} />
            </Grid>
            

        </Grid>
    </>
}