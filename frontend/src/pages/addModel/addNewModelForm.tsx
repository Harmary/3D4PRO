import { Grid, Typography } from "@mui/material";
import theme from "../../theme";

export default function AddNewModelForm() {
    return <>
        <form>
            <Grid container alignItems={"center"} direction={"column"} rowGap={4}>
                <Typography color={theme.palette.primary.contrastText} variant="h4">Загрузите модель</Typography>
                <input
                    id="contained-button-file"
                    multiple
                    style={{ display: "none" }}
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <div className="file_uploader">
                        <Typography color={theme.palette.primary.contrastText}>Нажми здесь, чтобы загрузить модель</Typography>
                        <Typography align="center" color={theme.palette.primary.contrastText}>Вы можете загрузить архив, такой как ZIP, RAR или 7z, содержащий ваши текстуры, материалы и сетку.</Typography>
                    </div>
                </label>
            </Grid>
        </form >
    </>
}