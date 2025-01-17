import React from 'react'
import { Link } from 'react-router-dom'

function Card({product}) {
    
    return (
        <div className="h-fit max-w-sm bg-white text-black border border-gray-200 rounded-lg shadow transition-all ease-in-out hover:scale-105 ">
            <div className='h-64 w-full'>
                <img className="h-full w-full object-contain p-5 rounded-t-lg" src={product.image} alt="product image" />
            </div>
            <div className="px-5 pb-5 text-black">
                <a href="#">
                    <h5 className="text-xl text-gray-700 font-semibold tracking-tight line-clamp-2">{product.title}</h5>
                </a>
                <div className="flex items-center justify-between mt-5">
                    <Link to={`/details/${product.id}`} className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
