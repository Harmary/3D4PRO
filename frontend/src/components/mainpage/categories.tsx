import { Box, Grid, Paper, Typography } from "@mui/material";

const categories = ["Животные", "Транспорт","Люди","Архитектура","Бизнес", "Еда", "Растения", "Дом"]

export default function Categories() {
    return <>
        <Box sx={{ height: 744, backgroundColor: "#7F5AF0", mt: 29 }} >
            <Box sx={{ display:"flex", pt: "234px", justifyContent:"center" }}> <Typography variant="h3" textAlign={"center"} color="#fffffe">Множество <br/> категорий</Typography></Box>
            <Grid container flexWrap={"nowrap"} overflow={"hidden"} mt={18} pb={2} gap={3}>
                {categories.map((category) => (
                    <Box key={category} className="category" sx={{ '& > :not(style)': { padding: "15px 30px", borderRadius: "24px", background: "linear-gradient(180deg, #C4B8EB 0%, #7F5AF0 100%)" }, position:"relative", zIndex:1 }}>
                        <Paper elevation={5}><Typography color="primary.contrastText" variant="subtitle1">{category}</Typography></Paper>
                    </Box>
                ))}
            </Grid>
        </Box>
    </>
};
