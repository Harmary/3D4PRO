import { Button, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import theme from "../../theme";
import { WhiteTextField } from "../../components/whiteFormControll";
import { useEffect, useState } from "react";
import fileImg from "../../assets/images/32card-abstr-2.png";
import { AddNewModelValidator } from "../../services/validators/addNewModel-validator-service";

export default function AddNewModelForm() {
    const [categories, setCategories] = useState<any[]>()
    const [file, setFile] = useState<File>()
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [isHasFile, setIsHasFile] = useState(false)
    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    useEffect(() => {

    }, [setCategories])

    const handleChangeFileInput = (event: any) => {
        setIsButtonDisabled(false)
        setIsHasFile(true)
        setFile(event.target.files[0]);

    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const validator = new AddNewModelValidator();
        await validator.addNewModel(file as File).then((num) => {
            if (category === "0") {
                num > 15000 ? console.log(`${num} polygons: it's too big`) : console.log(`${num} polygons: ok`)
            } else {
                console.log(`${num} polygons: ok`)
            }

        })
    }


    return <>
        <form onSubmit={handleSubmit}>
            <Grid container alignItems={"center"} direction={"column"} rowGap={4}>
                <Typography color={theme.palette.primary.contrastText} variant="h4">Загрузите модель</Typography>
                <Grid container>
                    <WhiteTextField fullWidth focused>
                        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Категория"
                            onChange={handleChange}
                            placeholder="Выберите категорию"
                        >
                            <MenuItem value="0">Низкополигональные</MenuItem>
                        </Select>
                    </WhiteTextField>
                </Grid>

                <input
                    id="contained-button-file"
                    multiple
                    accept=".zip,.7z,.rar"
                    style={{ display: "none" }}
                    type="file"
                    onChange={handleChangeFileInput}
                />
                <label htmlFor="contained-button-file">
                    <div className="file_uploader">
                        {isHasFile &&
                            <>
                                <img alt="file" src={fileImg} className="file_uploader_img" />
                                <Typography variant="caption" color={theme.palette.primary.contrastText}>{file?.name}</Typography>
                            </>
                        }
                        <Typography mt={2} color={theme.palette.primary.contrastText}>Нажми здесь, чтобы загрузить модель</Typography>
                        <Typography align="center" color={theme.palette.primary.contrastText}>Вы можете загрузить архив, такой как ZIP, RAR или 7z, содержащий ваши текстуры, материалы и сетку. Модель должна содержаться в папке source, текстуры - textures</Typography>
                    </div>
                </label>
                <Grid item alignSelf={"end"}>
                    <Button type="submit" disabled={isButtonDisabled} variant="contained">Далее</Button>
                </Grid>
            </Grid>
        </form >
    </>
}