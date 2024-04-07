import { Link } from 'react-router-dom';
import profile from '../../../assets/Ellipse 1.jpg'
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
const NewsCard = ({newsData}) => {
    const {_id, title, author, image_url, details, rating, total_view} = newsData;
    const date = author.published_date;
    return (
        <div className='p-10 m-4'>
            <div className='flex justify-between mb-8 '>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <h2 className='font-semibold'>{author.name}</h2>
                        <p className='text-sm'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex text-2xl gap-2'>
                    <CiBookmark />
                    <CiShare2></CiShare2>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-5'>{title}</h2>
                <img className='mb-7' src={image_url} alt="" />
                {
                    details.length >200 ? 
                    <p>{details.slice(0,200)}... <Link to={`/news/${_id}`} className='text-blue-500'>Read More</Link> </p> :
                    <p>{details}</p>
                }
                <hr className='border my-5'/>

                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div>{rating.number}</div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoEyeOutline className='text-xl'></IoEyeOutline>
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;