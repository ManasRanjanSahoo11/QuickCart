import React, { useContext } from 'react'
import { productContext } from '../utils/Context';
import { Link } from 'react-router-dom';
import { FaTshirt, FaGem, FaMobileAlt, FaFemale } from "react-icons/fa";

function Sidebar() {

    const [products] = useContext(productContext)

    const categories = products && products.reduce((acc, curValue) => [...acc, curValue.category], [])
    // console.log(categories);
    const distinct_categories = [...new Set(categories)]
    // console.log(distinct_categories);


    const categoryIcons = {
        "men's clothing": <FaTshirt />,
        "jewelery": <FaGem />,
        "electronics": <FaMobileAlt />,
        "women's clothing": <FaFemale />,
    };

    return (
        <div className='w-[19%] h-screen bg-gray-600  flex items-center flex-col pt-5'>
            <a href="/create" className='border px-9 py-3 hover:bg-gray-500 transition-all ease-in-out rounded-sm inline-block my-5'>
                Add new product
            </a>
            <hr className='my-2 w-full border-' />
            <div className='w-[80%] mt-2'>
                <h1 className='text-2xl font-semibold text-left'>Category</h1>
                {
                    distinct_categories.map((distinct_category, index) => (
                        <Link key={index} to={`/?category=${distinct_category}`}>
                            <div className='flex items-center py-2 px-2 capitalize text-lg my-1 transition-all ease-in-out hover:bg-gray-500'>
                                <span className="mr-2">{categoryIcons[distinct_category]}</span>
                                {distinct_category}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
