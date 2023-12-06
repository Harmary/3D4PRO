import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

import styles from './CategoriesBlock.module.css'

const categories = ["Животные", "Транспорт", "Люди", "Архитектура", "Бизнес", "Еда", "Растения", "Дом"]

export const CategoriesBlock: React.FC = () => {
    return (
        <div className={styles.CategoriesBlock} >
            <div className={styles.CategoriesBlock__title}>
                <Typography variant="h3">Множество <br /> категорий</Typography>
            </div>

            <Grid container className={styles.CategoriesBlock__container}>
                {categories.map((category, index) => (
                    <Paper key={index} elevation={5} className={styles.CategoriesBlock__category}>
                        <Typography color="primary.contrastText" variant="subtitle1">{category}</Typography>
                    </Paper>
                ))}
            </Grid>
        </div>
    );
};
