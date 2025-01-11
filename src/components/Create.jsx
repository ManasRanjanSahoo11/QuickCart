import React, { useState, useContext } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { productContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [products, setProducts] = useContext(productContext);

    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate()

    function validateProduct({ imgUrl, title, category, price, description }) {
        if (!imgUrl || typeof imgUrl !== 'string') {
            throw new Error('Invalid imgUrl: Must be a non-empty string.');
        }
        if (!title || typeof title !== 'string') {
            throw new Error('Invalid title: Must be a non-empty string.');
        }
        if (!category || typeof category !== 'string') {
            throw new Error('Invalid category: Must be a non-empty string.');
        }
        if (!price || typeof price !== 'number' || price <= 0) {
            throw new Error('Invalid price: Must be a positive number.');
        }
        if (!description || typeof description !== 'string') {
            throw new Error('Invalid description: Must be a non-empty string.');
        }
    }

    const addProductHandler = (e) => {
        e.preventDefault();
        try {
            validateProduct({ imgUrl, title, category, price: Number(price), description });
            const product = {
                id: nanoid(),
                imgUrl,
                title,
                category,
                price: Number(price),
                description,
            };
            setProducts([...products, product]);

            alert('Product added successfully');
            navigate('/')
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-2/4 h-fit'>
                <h1 className='text-4xl font-semibold flex items-center gap-3 my-7'>
                    Add New Product <FaArrowCircleRight size={23} />
                </h1>
                <form onSubmit={addProductHandler}>
                    <input
                        type="url"
                        className="bg-transparent border block outline-none py-2 px-2 my-5 w-full rounded-sm focus:ring-2"
                        placeholder="Image Link"
                        onChange={(e) => setImgUrl(e.target.value)}
                        value={imgUrl}
                    />
                    <input
                        type="text"
                        className="bg-transparent border block outline-none py-2 px-2 w-full rounded-sm focus:ring-2"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <div className="flex items-center justify-between gap-5 my-5">
                        <select
                            className="bg-gray-700 text-gray-400 border py-2.5 px-2 rounded-sm w-1/2 outline-none focus:ring-2"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        >
                            <option value="">Choose Product Category</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="women's clothing">women's clothing</option>
                        </select>
                        <input
                            type="text"
                            className="bg-transparent border inline-block outline-none py-2 px-5 w-1/2 rounded-sm focus:ring-2"
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                    <textarea
                        rows={6}
                        placeholder="Enter Description Here..."
                        className="w-full bg-transparent border rounded-sm resize-none px-2 py-1 outline-none focus:ring-2"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                    <input
                        type="submit"
                        value="Add new product"
                        className="block border px-7 py-2.5 cursor-pointer transition-all ease-in-out rounded-sm my-3 focus:ring-2 hover:bg-gray-500"
                    />
                </form>
            </div>
        </div>
    );
}

export default Create;