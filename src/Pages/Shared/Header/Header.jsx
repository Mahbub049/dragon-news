import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex justify-center'>
            <div className='text-center'>
                <img className='mb-5' src={logo} alt="" />
                <p className='text-[#706F6F] mb-2'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;