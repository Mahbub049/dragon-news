import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import {useLoaderData} from 'react-router-dom'
import NewsCard from './NewsCard/NewsCard';
const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2'>
                    {
                        news.map(newsData => <NewsCard key={newsData._id} newsData={newsData}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;