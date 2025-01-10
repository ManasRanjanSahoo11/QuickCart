import React, { useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

function Create() {

    const [imgUrl, setImgUrl] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className=' w-2/4 h-fit'>
                <h1 className='text-4xl font-semibold flex items-center gap-3 my-7'>Add New Product <FaArrowCircleRight size={23} /> </h1>
                <form action="">
                    <input type="url" className='bg-transparent border block outline-none py-2  px-2 my-5 w-full rounded-sm' placeholder='Image Link' onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
                    <input type="text" className='bg-transparent border block outline-none py-2 px-2  w-full rounded-sm' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <div className='flex items-center justify-between gap-5 my-5'>
                        <select name="" id="" className='bg-gray-700 text-gray-400 border py-2.5 px-2 rounded-sm w-1/2 outline-none' onChange={(e)=>setCategory(e.target.value)} value={category}>
                            <option value="">Choose Product Category</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="women's clothing">women's clothing</option>
                        </select>
                        <input type="text" className='bg-transparent border inline-block outline-none py-2 px-5 w-1/2 rounded-sm' placeholder='Price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </div>
                    <textarea name="" id="" rows={6} placeholder='Enter Description Here...' className='w-full bg-transparent border rounded-sm resize-none px-2 py-1 outline-none' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                    <input type="button" value="Add new product" className='block border px-7 py-2.5 cursor-pointer transition-all ease-in-out rounded-sm my-3 hover:bg-gray-500' />
                </form>
            </div>
        </div>
    )
}

export default Create
