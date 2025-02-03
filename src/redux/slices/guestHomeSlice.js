import { createSlice } from "@reduxjs/toolkit"
// import Burger from '../../assets/products/burger.png'

const initialState = {
    products: [
            {name: 'Burger', price: 67, category: 'burger'},
            {name: 'Pasta', price: 49, category: 'pasta'},
            {name: 'Chips', price: 14, category: 'chips'},
            {name: 'Burger', price: 89, category: 'burger'},
            {name: 'Pasta', price: 64, category: 'pasta'},
            {name: 'Chips', price: 33, category: 'chips'},
            {name: 'Burger', price: 65, category: 'burger'},
            {name: 'Pasta', price: 34, category: 'pasta'},
            {name: 'Chips', price: 83, category: 'chips'},
            {name: 'Burger', price: 22, category: 'burger'},
            {name: 'Pasta', price: 63, category: 'pasta'},
            {name: 'Chips', price: 34, category: 'chips'},
            {name: 'Burger', price: 54, category: 'burger'},
            {name: 'Pasta', price: 44, category: 'pasta'},
            {name: 'Chips', price: 23, category: 'chips'},
            {name: 'Burger', price: 67, category: 'burger'},
            {name: 'Pasta', price: 30, category: 'pasta'},
            {name: 'Chips', price: 88, category: 'chips'},
            {name: 'Burger', price: 77, category: 'burger'},
            {name: 'Pasta', price: 66, category: 'pasta'},
            {name: 'Chips', price: 23, category: 'chips'},
        ],
    category: [
            {id: 1, name: 'Chips', value: 'chips'},
            {id: 2, name: 'Burger', value: 'burger'},
            {id: 3, name: 'Pasta', value: 'pasta'},
        ],
        cart: [],
    countList: 24,
    isReFresh: false,
    selectedCategory: ''

}

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        setProductsList: (state, action) => {
            state.products = action.payload
        },
        setCategoryList: (state, action) => {
            state.category = action.payload
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setTotalEntry: (state, action) => {
            state.countList = action.payload
        },
        setReFresh: (state, action) => {
            state.isReFresh = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
    }
})

export const { setProductsList, setTotalEntry, setReFresh, setCategoryList, setSelectedCategory, setCart } = homeSlice.actions

export const selectProductList = (state) => state.products.products
export const selectTotalEntry = (state) => state.products.countList
export const selectReFresh = (state) => state.products.isReFresh
export const selectCategoryList = (state) => state.products.category
export const selectCategory = (state) => state.products.selectedCategory
export const selectCart = (state) => state.products.cart

export default homeSlice.reducer