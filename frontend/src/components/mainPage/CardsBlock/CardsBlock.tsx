import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

import cardImg1 from 'assets/images/32card-abstr.png';
import cardImg3 from 'assets/images/32card-abstr-1.png';
import cardImg2 from 'assets/images/32card-abstr-2.png';

import { Card } from "./Card";

import styles from './CardsBlock.module.css';


const cardsContent = [
    {
        img: cardImg1,
        title: "Кастомизация",
        text: "Текстуру модели можно изменять не скачивая"
    },
    {
        img: cardImg2,
        title: "Качество",
        text: "Наши модели сделаны профессионалами"
    },
    {
        img: cardImg3,
        title: "Оплата",
        text: "Оплатить покупки можно любой картой "
    },
]


export const CardsBlock: React.FC = () => {
    return (
        <Container>
            <Grid container className={styles.CardsBlock__content}>
                <Grid item lg={8}>
                    <Typography variant="h3" className={styles.CardsBlock__title}>Наше решение - помощь для вас</Typography>
                    <Typography variant="body2" className={styles.CardsBlock__text}>Наш магазин имеет ряд преимуществ</Typography>
                </Grid>
            </Grid>
            <Grid container columnSpacing={5} rowSpacing={5} className={styles.CardsBlock__cards}>
                {cardsContent.map((card, index) => (
                    <Grid key={index} item xs={12} md={8} lg={4}>
                        <Card title={card.title} image={card.img} text={card.text} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
