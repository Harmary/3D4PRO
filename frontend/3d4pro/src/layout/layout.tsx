import { useState } from 'react';
import { Grid } from '@mui/material';


type LayoutProps = {
    children?: JSX.Element | JSX.Element[];
};

export function Layout(props: LayoutProps) {

    return (
        <>
            <Grid container direction={"row"} spacing={2} wrap="nowrap">
                <Grid item borderRight={"1px solid lightgray"}>
                </Grid>
                <Grid item flexGrow={"1"}>
                    <main>
                        {props.children}
                    </main>
                </Grid>
            </Grid>
        </>
    )
}
