import Banner from "../../components/banner";
import abstract2 from '../../assets/images/abstract2.png';
import abstract from '../../assets/images/abstract1.png';



export default function MainPage() {
    return (
        <>
            <Banner/>
            <div style={{ background: `url(${abstract}) no-repeat`, backgroundSize: "100%", position: "absolute", width: "700px", height: "700px", left: "45px", top: "-16px", zIndex: 0 }}></div>
            <div style={{ background: `url(${abstract2}) no-repeat`, backgroundSize: "100%", position: "absolute", width: "864px", height: "864px", right: "0px", top: "275px", zIndex: 0 }}></div>
        </>
    );
};
