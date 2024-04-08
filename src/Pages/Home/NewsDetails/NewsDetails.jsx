import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4">
                <div className="col-span-3">{id}</div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;