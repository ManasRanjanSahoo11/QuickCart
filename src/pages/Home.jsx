import React, { useContext, useEffect, useState } from 'react'
import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import { productContext } from '../utils/Context'
import Loading from '../components/Loading'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function Home() {

    const [products] = useContext(productContext)
    // console.log(products);

    const [filteredProducts, setFilteredProduct] = useState([])
    const [isFetching, setIsFetching] = useState(false);


    const { search } = useLocation()

    const category = decodeURI(search.split('=')[1])

    const getProductCategory = async () => {
        try {
            setIsFetching(true);
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            // console.log(data);
            setFilteredProduct(data)
        } catch (err) {
            console.log(err);
        } finally {
            setIsFetching(false);
        }
    }

    useEffect(() => {
        if (!filteredProducts || category == 'undefined') {
            setFilteredProduct(products);
        }
        if (category != "undefined") {
            getProductCategory(products);
        }
    }, [category, products])



    return products ? (
        <div className="flex">
            <Sidebar />

            <main className="w-[80%] h-screen overflow-y-auto py-10 pt-16 grid grid-cols-3 justify-center gap-4 pl-5 flex-wrap">

                {isFetching && <p className="text-center col-span-3">Fetching new category...</p>}

                {
                    filteredProducts && filteredProducts.map((p, idx) => (
                        <Card key={idx} product={p} />
                    ))
                }
            </main>


        </div>
    ) : (<Loading />)
}

export default Home