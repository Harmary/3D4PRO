import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import cardImg1 from '../../assets/images/32card-abstr.png';
import cardImg3 from '../../assets/images/32card-abstr-1.png';
import cardImg2 from '../../assets/images/32card-abstr-2.png';
import Card from "./card";

const cardsContent = [
    {
        img: cardImg1,
        title: "Кастомизация",
        text:"Текстуру модели можно изменять не скачивая"
    },
    {
        img: cardImg2,
        title: "Качество",
        text:"Наши модели сделаны профессионалами"
    },
    {
        img: cardImg3,
        title: "Оплата",
        text:"Оплатить покупки можно любой картой "
    },
]


export default function CardsBlock() {
    return <>
        <Container>
            <Grid container mt={20}>
                <Grid item lg={8}>
                    <Typography variant="h3" color="#16161A">Наше решение - помощь для вас</Typography>
                    <Typography mt="25px" variant="body2" color="#16161A">Наш магазин имеет ряд преимуществ</Typography>
                </Grid>
            </Grid>
            <Grid container columnSpacing={5} rowSpacing={5} mt={9}>
                {cardsContent.map((card) => (
                    <Grid key={card.title} item xs={12} md={8} lg={4}><Card title={card.title} image={card.img} text={card.text} /></Grid>
                ))}
            </Grid>
        </Container>
    </>
};
