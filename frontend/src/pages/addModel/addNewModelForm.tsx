import { Button, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import theme from "../../theme";
import { WhiteTextField } from "../../components/whiteFormControll";
import { useEffect, useState } from "react";
import fileImg from "../../assets/images/32card-abstr-2.png";
import { AddNewModelValidator } from "../../services/validators/addNewModel-validator-service";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import WhiteTextInput from "../../components/common/formInputs/whiteTextInput";
import WhiteTextAria from "../../components/common/formInputs/WhiteTextArea";


type FormValues = {
    name: string,
    description: string,
    price: number,
}

const schema = yup.object().shape(
    {
        name: yup.string().required("Введите имя").max(100, "Название должно содержать не больше 100 символов"),
        description: yup.string().required("Введите описание").max(300, "Описание должно содержать не больше 300 символов"),
        price: yup.string().required("Введите сумму"),
    }
)

export default function AddNewModelForm() {
    const [categories, setCategories] = useState<any[]>();
    const [currentStep, setCurrentStep] = useState(1);
    const [model, setModel] = useState<File>();
    const [render, setRender] = useState<File>();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [isHasFile, setIsHasFile] = useState(false);
    const [category, setCategory] = useState('');
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) })


    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleChangeRender = (event: any) => {
        setIsHasFile(true)
        setRender(event.target.files[0]);
    };

    useEffect(() => {

    }, [setCategories]);

    const handleChangeFileInput = (event: any) => {
        setIsButtonDisabled(false)
        setIsHasFile(true)
        setModel(event.target.files[0]);

    }

    const handleFirstSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const validator = new AddNewModelValidator();
        setIsButtonLoading(true)
        await validator.addNewModel(model as File).then((num) => {
            if (category === "0") {
                num > 15000 ? console.log(`${num} polygons: it's too big`) : setCurrentStep(2);
            } else {
                setCurrentStep(2);
            }
        })
        setIsHasFile(false)
        setIsButtonLoading(false)
    };

    const handleSecondSubmit = async (data: FormValues) => {
        console.log({
            data,
            model: model,
            render: render,
            category: category
        })
    };


    return <>
        {currentStep === 1 ?
            <form onSubmit={handleFirstSubmit}>
                <Grid container alignItems={"center"} direction={"column"} rowGap={4}>
                    <Typography color={theme.palette.primary.contrastText} variant="h4">Загрузите модель</Typography>
                    <WhiteTextField fullWidth focused>
                        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Категория"
                            onChange={handleChangeCategory}
                            placeholder="Выберите категорию"
                        >
                            <MenuItem value="0">Низкополигональные</MenuItem>
                        </Select>
                    </WhiteTextField>
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
                                    <Typography variant="caption" color={theme.palette.primary.contrastText}>{model?.name}</Typography>
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
            :
            <form onSubmit={handleSubmit(handleSecondSubmit)}>
                <Grid container direction={"column"} alignItems={"center"} gap={5}>
                    <Grid item>
                        <Typography color={theme.palette.primary.contrastText} variant="h4">Заполните данные</Typography>
                    </Grid>
                    <Grid container justifyContent={"space-between"}>
                        <Grid item lg={5}>
                            <input
                                id="contained-button-file"
                                multiple
                                accept="image/*"
                                style={{ display: "none" }}
                                type="file"
                                onChange={handleChangeRender}
                            />
                            <label htmlFor="contained-button-file">
                                <div className="file_uploader">
                                    {isHasFile &&
                                        <>
                                            <img alt="file" src={fileImg} className="file_uploader_img" />
                                            <Typography variant="caption" color={theme.palette.primary.contrastText}>{render?.name}</Typography>
                                        </>
                                    }
                                    <Typography align="center" mt={2} color={theme.palette.primary.contrastText}>Нажми здесь, чтобы загрузить рендеры</Typography>
                                </div>
                            </label>
                        </Grid>
                        <Grid item lg={6}>
                            <Grid direction={"column"} rowSpacing={2} container>
                                <Grid item>
                                    <WhiteTextInput control={control} errors={errors.name} label={"Название"} name="name" />
                                </Grid>
                                <Grid item>
                                    <WhiteTextAria control={control} errors={errors.description} label={"Описание"} name="description" />
                                </Grid>
                                <Grid item>
                                    <WhiteTextInput control={control} errors={errors.price} label={"Цена"} name="price" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item alignSelf={"end"}>
                        <Button type="submit" disabled={isButtonDisabled} variant="contained">Опубликовать</Button>
                    </Grid>
                </Grid>
            </form >
        }

    </>
}