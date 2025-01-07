import React from 'react'

function Sidebar() {
    return (
        <div className='w-[19%] h-screen bg-gray-600  flex items-center flex-col pt-5'>
            <a href="" className='border px-9 py-3 hover:bg-gray-500 transition-all ease-in-out rounded-sm inline-block my-5'>
                Add new product
            </a>
            <hr className='my-2 w-full border-' />
            <div className='w-[80%] mt-2'>
                <h1 className='text-2xl font-semibold text-left'>Category</h1>
                <ul className=''>
                    <li className='my-1 py-2 px-2 rounded-sm text-lg transition-all ease-in-out hover:bg-gray-500'>cat 1</li>
                    <li className='mb-1 py-2 px-2 rounded-sm text-lg transition-all ease-in-out hover:bg-gray-500'>cat 1</li>
                    <li className='mb-1 py-2 px-2 rounded-sm text-lg transition-all ease-in-out hover:bg-gray-500'>cat 1</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
