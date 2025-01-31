import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaAngleDown } from "react-icons/fa6";




const ListBook = () => {


    const listBooks = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        
    }, [])
    


    return (
        <div>
            <div className="px-full m-5 py-5 rounded-2xl bg-gray-300">
                <h2 className="text-3xl font-bold text-center">Books</h2>
            </div>
            <div className="text-center">
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn bg-green-500 m-1">Click <FaAngleDown />                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>#Tags</a></li>
                        <li><a>#Tags</a></li>
                    </ul>
                </div>
            </div>
            <div className="p-20 text-center">
                <span className="text-2xl text-center font-semibold">Hello</span>
            </div>
        </div>
    );
};

export default ListBook;