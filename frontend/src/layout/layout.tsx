import { Container } from "@mui/material";
import Header from "../components/header";
import web from "../assets/web2.svg"


type LayoutProps = {
    children?: JSX.Element | JSX.Element[];
};

export function Layout(props: LayoutProps) {

    return (
        <>
            <main>
                <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "50%",
                    left: 0,
                    top: 0,
                    background: "linear-gradient(180deg, #FFFFFE 50.79%, rgba(255, 255, 255, 0) 100%)",
                    zIndex: -10
                }} />
                <div style={{
                    background: `url(${web}) repeat-y`, position: "absolute", backgroundSize: `100%`, width: "100%", height: "100%", left: 0,
                    top: 0, zIndex: -20
                }}/>
                <Container>
                    <Header theme="white" />
                    {props.children}
                </Container>
            </main >
        </>
    )
}
