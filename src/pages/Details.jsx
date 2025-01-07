import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function details() {

  const [productInfo, setProductInfo] = useState(null)
  const [liked, setLiked] = useState(false)

  const navigate = useNavigate()
  const { productId } = useParams()
  // console.log(productId);
  // console.log(productInfo);

  const likeHandler = () => {
    setLiked(!liked)
  }

  const goToHome = () => {
    navigate('/')
  }


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      // console.log(data); 
      setProductInfo(data)
    }
    getData()
  }, [])

  return productInfo ? (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='bg-white text-black rounded-sm p-3 h-fit w-[60vw]'>
        <div className='border-b-2 py-3 flex justify-between px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer size-6" onClick={goToHome}>
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? "black" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer size-6" onClick={likeHandler}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <div className='flex items-center gap-7 py-5'>
          <div className='h-80 w-80 overflow-hidden'><img className='rounded-sm w-full h-full object-contain' src={productInfo.image} alt="" /></div>
          <div className='w-[60%]'>
            <h1 className='text-2xl font-semibold'> {productInfo.title} </h1>
            <p className='uppercase font-bold text-gray-500 my-2'>{productInfo.category}</p>
            <p className='font-bold text-gray-500 my-2'>${productInfo.price}</p>
            <p className='my-2'>{productInfo.description}</p>
            <div className='my-5'>
              <Link className='border-2 px-5 py-2 rounded-sm transition-all ease-in-out mr-5 text-gray-500 hover:bg-gray-300 hover:text-black'>Edit</Link>
              <Link className='border-2 px-5 py-2 rounded-sm transition-all ease-in-out text-gray-500 hover:bg-gray-300 hover:text-black'>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (<Loading />)
}

export default details
