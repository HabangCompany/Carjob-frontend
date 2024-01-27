import React from 'react';
import { useParams } from 'react-router-dom';
import Tinting from '../components/carservicedetail/tinting/Tinting'
import Wraping from '../components/carservicedetail/wraping/Wraping'

const CarServiceDetailPage = () => {
    const params = useParams()
    const servicename = params.servicename

    let chaneComponent
    switch (servicename) {
        case "tinting":
            chaneComponent = <Tinting />
            break;
        case "wraping":
            chaneComponent = <Wraping />
            break;
        case "ppf":
            chaneComponent = <PPF />
            break;
        case "carwash":
            chaneComponent = <CarWash />
            break;
        case "gloss":
            chaneComponent = <Gloss />
            break;
        case "detail-carwash":
            chaneComponent = <DetailCarWash />
            break;
        case "차량수리":
            chaneComponent = <CarRepair />
            break;
        case "판금/도장":
            chaneComponent = <Painting />
            break;
        case "유리교체":
            chaneComponent = <AutoGlass />
            break;
        case "타이어":
            chaneComponent = <Tire />
            break;
        case "블랙박스":
            chaneComponent = <Blackbox />
            break;
    }
    return (
        <div>
            {chaneComponent}
        </div>
    );
};

export default CarServiceDetailPage;