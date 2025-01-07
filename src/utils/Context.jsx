import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const productContext = createContext()

function Context({ children }) {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products')
                setProducts(data)
            } catch (err) {
                console.log(err);
            }
        }

        getData()
    }, [])

    return (
        <productContext.Provider value={[products, setProducts]}>
            {children}
        </productContext.Provider>
    )
}

export default Context
