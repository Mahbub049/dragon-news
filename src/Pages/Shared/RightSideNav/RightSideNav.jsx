import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-7 mt-16">
                <h2 className="text-xl font-semibold mb-5">Login With</h2>
                <button className="btn btn-outline text-blue-400 w-full mb-3">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="mb-7">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <button className="btn w-full border  rounded-none rounded-t-lg">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn border-r  rounded-none w-full">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
                <button className="btn w-full border  rounded-none rounded-b-lg">
                    <FaInstagram></FaInstagram>
                    Instagram
                </button>
            </div>
            <div className="mt-5">
                <h2 className="text-xl font-semibold">QZone</h2>
                <img className="mx-auto" src={qZone1} alt="" />
                <img className="mx-auto" src={qZone2} alt="" />
                <img className="mx-auto" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;