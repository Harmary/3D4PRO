

type LayoutProps = {
    children?: JSX.Element | JSX.Element[];
};

export function Layout(props: LayoutProps) {

    return (
        <>
            <main>
                {props.children}
            </main>
        </>
    )
}
