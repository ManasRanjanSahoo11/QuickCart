import React, { useContext } from 'react'
import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import { productContext } from '../utils/Context'
import Loading from '../components/Loading'

function Home() {

    const [products] = useContext(productContext)
    // console.log(products);

    return products ? (
        <div className="flex">
            <Sidebar className='' />
            <main className="w-[80%] h-screen py-5 grid grid-cols-3 justify-center gap-4 pl-5 flex-wrap overflow-y-auto">
                {
                    products.map((p, idx) => (
                        <Card key={idx} product = {p}/>
                    ))
                }
            </main>
        </div>
    ) : (<Loading />)
}

export default Home