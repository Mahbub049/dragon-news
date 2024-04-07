import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex p-4 my-7">
            <button className="py-2 px-6 bg-[#D72050] text-white text-xl font-medium">Latest</button>
            <Marquee className="text-lg font-semibold">
                <Link className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;