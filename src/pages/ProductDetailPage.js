import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/Components/ProductList'
import { ProductDetails } from '../features/product-list/Components/ProductDetails'

const ProductDetailPage = () => {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
        </div>
    )
}

export default ProductDetailPage 