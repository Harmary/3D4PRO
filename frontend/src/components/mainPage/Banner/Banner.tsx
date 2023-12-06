import React from 'react';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import Header from 'components/header';

import styles from './Banner.module.css'

export const Banner: React.FC = () => {
    return (
        <div className={styles.Banner}>
            <Container className={styles.Banner__container}>
                <Header theme="black" />

                <Grid container justifyContent={"center"}>
                    <Grid item lg={10}>
                        <Typography className={styles.Banner__title} variant='h3' color="primary.contrastText">
                            Преврати идеи в реальность
                        </Typography>

                        <Typography className={styles.Banner__text} color="primary.contrastText" variant='body2'>
                            Воплоти свои идеи в жизнь с нашими 3D-моделями
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
