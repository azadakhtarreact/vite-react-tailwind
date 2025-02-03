import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [
        {
            name: 'Bag',
            description: 'A bag is a flexible container that can be closed ',
            price: 629,
            category: 'bag',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Formal Shirt',
            description: 'A shirt is a cloth garment for the upper body',
            price: 544,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Water Bottle',
            description: 'A bag is a flexible container that can be closed ',
            price: 37,
            category: 'bag',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Poco M2',
            description: 'A shirt is a cloth garment for the upper body',
            price: 11999,
            category: 'phones',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'POCO J7 Max',
            description: 'The POCO M2 Pro boasts a 5000-mAh battery',
            price: 14999,
            category: 'phone',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Trolly',
            description: 'A bag is a flexible container that can be closed ',
            price: 2100,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Bag',
            description: 'A bag is a flexible container that can be closed ',
            price: 299,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Formal Shirt',
            description: 'A shirt is a cloth garment for the upper body',
            price: 219,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Water Bottle',
            description: 'A bag is a flexible container that can be closed ',
            price: 199,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Poco M2',
            description: 'A shirt is a cloth garment for the upper body',
            price: 11999,
            category: 'phone',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'POCO J7 Max',
            description: 'The POCO M2 Pro boasts a 5000-mAh battery',
            price: 14599,
            category: 'phone',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Trolly',
            description: 'A bag is a flexible container that can be closed ',
            price: 2100,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Bag',
            description: 'A bag is a flexible container that can be closed ',
            price: 422,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Formal Shirt',
            description: 'A shirt is a cloth garment for the upper body',
            price: 329,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Water Bottle',
            description: 'A bag is a flexible container that can be closed ',
            price: 322,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Poco M2',
            description: 'A shirt is a cloth garment for the upper body',
            price: 7872,
            category: 'phones',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'POCO J7 Max',
            description: 'The POCO M2 Pro boasts a 5000-mAh battery',
            price: 14199,
            category: 'phone',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Trolly',
            description: 'A bag is a flexible container that can be closed ',
            price: 3100,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Bag',
            description: 'A bag is a flexible container that can be closed ',
            price: 492,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Formal Shirt',
            description: 'A shirt is a cloth garment for the upper body',
            price: 499,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Water Bottle',
            description: 'A bag is a flexible container that can be closed ',
            price: 219,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Poco M2',
            description: 'A shirt is a cloth garment for the upper body',
            price: 4199,
            category: 'phone',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'POCO J7 Max',
            description: 'The POCO M2 Pro boasts a 5000-mAh battery',
            price: 8722,
            category: 'phone',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
        {
            name: 'Trolly',
            description: 'A bag is a flexible container that can be closed ',
            price: 2891,
            category: 'style',
            createAt: '12/01/2024',
            updatedAt: '22/02/2024'
        },
    ],
    countList: 24,
    isReFresh: false

}

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        setProductsList: (state, action) => {
            state.products = action.payload
        },
        setTotalEntry: (state, action) => {
            state.countList = action.payload
        },
        setReFresh: (state, action) => {
            state.isReFresh = action.payload
        },
    }
})

export const { setProductsList, setTotalEntry, setReFresh } = homeSlice.actions

export const selectProductList = (state) => state.products.products
export const selectTotalEntry = (state) => state.products.countList
export const selectReFresh = (state) => state.products.isReFresh

export default homeSlice.reducer