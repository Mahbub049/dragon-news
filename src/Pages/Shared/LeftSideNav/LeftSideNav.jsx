import { useEffect, useState } from "react";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold">All Caterogy</h2>
                <div className="flex flex-col">
                    {
                        categories.map(category=><button key={category.id} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">{category.name}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;