import { CardsBlock } from "components/mainPage/CardsBlock/CardsBlock";
import { CategoriesBlock } from "components/mainPage/CategoriesBlock/CategoriesBlock";
import { FormBlock } from "components/mainPage/FormBlock/FormBlock";
import { Banner } from 'components/mainPage/Banner/Banner';

import styles from './MainPage.module.css'


export const MainPage: React.FC = () => {
    return (
        <>
            <main className={styles.MainPage}>
                <Banner />
                <CardsBlock />
                <CategoriesBlock />
                <FormBlock />
                <div className={`${styles.abstractImg} ${styles.abstract1}`} />
                <div className={`${styles.abstractImg} ${styles.abstract2}`} />
                <div className={`${styles.abstractImg} ${styles.abstract3}`} />
                <div className={`${styles.abstractImg} ${styles.abstract4}`} />
            </main>

        </>
    );
};
