
import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'

import productImage from '../../assets/products/burger.png'

// ** Third Party Components
import Category from './category'

import { selectCategory, setSelectedCategory, setProductsList, selectProductList, setCart, selectCart } from '../../redux/slices/guestHomeSlice'

const HomePage = () => {

    const dispatch = useDispatch()
    const myCategory = useSelector(selectCategory)
    const products = useSelector(selectProductList)
    const cartData = useSelector(selectCart)
    const [totalAmount, setTotalAmount] = useState(0)
    //   const isFresh = useSelector()



    const filterProduct = () => {
        if (myCategory) {
            console.log('myCategory', products, myCategory)
            const filterData = products.filter((item) => item?.category == myCategory)
            console.log('filterData', filterData)
            dispatch(setProductsList(filterData))
        }
    }

    useEffect(() => {

        if (myCategory) {
            filterProduct()
        }
        const timeoutId = setTimeout(() => 3000)
        return function cleanup() {
            clearTimeout(timeoutId)
        }
    }, [myCategory])

    const addToCard = (item) => {
        console.log('cart item', item)
        const data = [...cartData, item]
        const sum = data.reduce((partialSum, item) => partialSum + item?.price, 0);
        console.log('sum', sum)
        setTotalAmount(sum)
        dispatch(setCart(data))
    }

    return (
        <Fragment>
            <div className="container py-4 mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-2 mx-auto">
                        <div className="category">
                        <h2 className='mb-2 text-2xl text-bold'>Product Category</h2>
                            <Category />
                        </div>
                    </div>
                    <div className="col-span-7">
                        <h2 className='mb-1 text-2xl'>Products</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {products?.length > 0 ? <>
                                {products.map((item) => {

                                    return (
                                        <div className="p-4 myProduct" key={item?.index}>
                                            <img src={productImage} alt='' width='60' className='mx-auto' />
                                            <div className='pb-0 mb-0 text-xs'>{item?.name}</div>
                                            <div className='pb-0 mb-0 text-xs'>{item?.price}</div>
                                            <button className='btn btn-sm' onClick={() => addToCard(item)}>Add to cart</button>
                                        </div>
                                    )

                                })}
                            </> : ''}

                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className='mb-2 text-2xl text-bold'>Cart Details</h2>
                        <div className="grid h-full grid-flow-col p-1 mb-2 ml-2 grid-rows-12 cart-detail max-h-64">
                            <div className="mb-2">
                                {cartData?.length > 0 ?
                                    cartData.map((item) => {
                                        return <>
                                        <div className="flex items-center justify-between mb-1 align-content-between item">
                                                <div className="div">
                                                    <div className="text-xs">{item?.name}</div>
                                                    <div className="text-xs"><span>2</span> {` ${item?.price}/Unit`}</div>
                                                </div>
                                                <div className="text-sm text-black text-bold">  { `₹${item?.price}` }</div>
                                        </div>
                                        
                                        </>
                                    })

                                    : <><div className="flex items-center justify-center"><div>Start adding products</div></div></>}
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-1 mb-1 align-content-between item">
                            <div className="total"><h3>Total</h3></div>
                            <div className="total"><h3>{totalAmount}</h3></div>
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>

    );
}

export default HomePage;