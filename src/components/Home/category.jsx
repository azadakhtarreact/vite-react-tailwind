import React, { Fragment, useState } from 'react'

import { selectCategoryList } from '../../redux/slices/guestHomeSlice'
import { useDispatch, useSelector } from 'react-redux'

import CategoryImage from '../../assets/products/burger.png'
import { setSelectedCategory } from '../../redux/slices/guestHomeSlice'

const category = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategoryList)
    // const [ab setAb ] = useState(0)
    

    const handleCategory = (item) => {
        const getValue = item?.value
        // console.log('check', getValue)
        dispatch(setSelectedCategory(getValue))
    }

    
    return (
        <Fragment>
            
            {
            categories?.length ? <>
                <ul>
                    {

                    categories.map((item) => {
                        // value={item?.value} onClick={(e)=> handleCategory(e)}>
                        // console.log('bb', categories, item)
                        return <li key={item?.index}  className='p-5 mx-auto border-2 text-md category-list'>
                            <div className=" hover:cursor">
                                <div className="div">
                                <div onClick={() => handleCategory(item)} className='flex items-center pb-0 m-0 justify-around-space'> <img src={CategoryImage} alt="" width='40'/> <span className='pl-4 text-sm'> {item?.name}</span></div>
                                </div>
                            </div>
                        
                            </li>
                    })}
                </ul> </> : ''}

        </Fragment>
    )
}

export default category