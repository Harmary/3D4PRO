import Banner from "../../components/mainpage/banner";
import abstract2 from '../../assets/images/abstract2.png';
import abstract from '../../assets/images/abstract1.png';
import abstract3 from '../../assets/images/abstract_3.png';
import abstract4 from '../../assets/images/abstract_4.png';
import CardsBlock from "../../components/mainpage/cardsBlock";
import Categories from "../../components/mainpage/categories";
import Form from "../../components/mainpage/form";



export default function MainPage() {
    return (
        <>
            <main style={{position: "relative",overflow:"hidden"}}>
                <Banner />
                <CardsBlock />
                <Categories />
                <Form/>
                {window.innerWidth < 900 ? <></> : <>
                    <div style={{ background: `url(${abstract}) no-repeat`, backgroundSize: "100%", position: "absolute", width: "700px", height: "700px", left: "5px", top: "-16px", zIndex: 0 }}></div>
                    <div style={{ background: `url(${abstract2}) no-repeat`, backgroundSize: "100%", position: "absolute", width: "700px", height: "800px", right: "0px", top: "275px", zIndex: 0 }}></div>
                    <div style={{ background: `url(${abstract3}) no-repeat`, backgroundSize: "100%", position: "absolute", width: "1007px", height: "987px", left: "-351px", top: "1252px", zIndex: 0 }}></div>
                    <div style={{ background: `url(${abstract4}) no-repeat`, backgroundSize: "100%", position: "absolute", width: "989px", height: "909px", right: "-281px", top: "2158px", zIndex: 0 }}></div>
                </>}
            </main>
           
        </>
    );
};
