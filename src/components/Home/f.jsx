// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { useForm, Controller } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import Select from 'react-select';
// import moment from 'moment'
// // import Flatpickr from 'react-flatpickr'
// // ** Styles
 
// // import '@styles/react/libs/flatpickr/flatpickr.scss'
// import "flatpickr/dist/flatpickr.css";
// import 'flatpickr/dist/themes/dark.css';

// import { selectProductList, setProductsList, setReFresh } from '../../redux/slices/productsSlice';

// const form = () => {

//     const dispatch = useDispatch()
//     const Listing = useSelector(selectProductList)
//     const [isOpen, setModal] = useState(false)
//     const [selectedCategory, setCategory] = useState();
//     const [showError, setShowError] = useState(false);
//     const [selectedDate, setDate] = useState(moment().format('YYYY-MM-DD'))

//     const options = [

//         { value: 'style', label: 'Style' },
//         { value: 'bag', label: 'Bag' },
//         { value: 'phone', label: 'Phone' },
//     ];

//     // ** Hooks
//     const formValidation = yup.object().shape({
//         name: yup.string().required('Please enter product name'),
//         description: yup.string().required('Please enter  description'),
//         price: yup.string().required('Please enter  price'),
//     })

//     const {
//         reset,
//         control,
//         handleSubmit,
//         formState: { errors }
//     } = useForm(
//         { mode: 'onChange', resolver: yupResolver(formValidation) },
//         { defaultValues: { name: '', price: '', description: '' } },
//     )

//     const handleCreateData = (data) => {
//         if (selectedCategory) {

//             const obj = {
//                 name: data?.name,
//                 category: selectedCategory,
//                 price: data?.price,
//                 description: data?.description
//             }
//             const newData = [...Listing, obj]
//             // const finalData = newData.push(obj)
//             console.log('finalData', newData)
//             dispatch(setProductsList(newData))
//             handleModalClose()
//             dispatch(setReFresh(true))
//         } else {
//             setShowError(true)
//         }
//     }
//     const onSubmit = data => {

//         if (Object.values(data).every(field => field.length > 0)) {
//             console.log('dataaa', data)
//             // const onlyDate = moment(selectedDate[0]).format("YYYY-MM-DD")
//             handleCreateData(data)

//         } else {
//             console.log('error', data)
//         }
//     }

//     const handleSelect = (e) => {
//         const selectedFilter = e?.value
//         if (selectedFilter) {
//             console.log('selected', selectedFilter, e?.value)
//             setShowError(false)
//             setCategory(selectedFilter)
//         }
//     }

//     const handleModalShow = () => {
//         setModal(true)
//     }

//     const handleModalClose = () => {
//         reset()
//         setModal(false)
//     }

//     return (
//         <div>
//             <div className="custom-form">
//                 <button className="text-black btn btn-md" onClick={() => handleModalShow()}>Create Product</button>
//                 {/* <dialog id="my_modal_3" className="modal">
//                     <div className="modal-box">

//                         <div className="grid grid-cols-2 gap-3 mb-4">
//                             <div><h4 className="text-lg font-bold">Product Details</h4></div>
//                             <div><button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2" >✕</button></div>

//                         </div>
//                         <div className="mb-4">
//                             <hr />
//                         </div>
//                         <div className="">
//                             <h1>welcome</h1>
//                         </div>
//                     </div>
//                 </dialog> */}

//                 <div className={`modal ${isOpen ? "modal-open" : ""}`}>
//                     {/* <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}> */}
//                     <div className={`modal-box size-lg max-w-5xl}`}>
//                         {/* <button className="absolute btn btn-sm top-2 text-md" onClick={() => handleModalClose()}>✕</button> */}
//                         <span className='absolute text-2xl cursor-pointer right-5 text-bold' onClick={() => handleModalClose()}>X</span>
//                         <h3 className="pb-6 text-2xl font-semibold">Product Information</h3>
//                         <div className="mb-4">
//                             <hr className='hr' />
//                         </div>

//                         {/* Loading modal body according to different modal type */}
//                         <div className="">
//                             <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
//                                 <div className="grid grid-cols-1 gap-3">
//                                     <div>
//                                         <div className="mb-3">
//                                             <label className="block mb-2 text-sm text-grey-600" > Name<span className='text-sm text-red-600'>*</span></label>
//                                             <Controller
//                                                 id='name'
//                                                 name='name'
//                                                 defaultValue=''
//                                                 control={control}
//                                                 render={({ field }) => <input autoComplete='off' className="w-full input input-bordered" {...field} placeholder='Name' invalid={errors.name && true} />}
//                                             />
//                                             {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* end name input */}

//                                 <div className="grid grid-cols-1 gap-3">
//                                     <div>
//                                         <div className="mb-3">
//                                             <label className="block mb-2 text-sm text-black" >Description<span className='text-sm text-red-600'>*</span></label>
//                                             <Controller
//                                                 id='description'
//                                                 name='description'
//                                                 defaultValue=''
//                                                 control={control}
//                                                 render={({ field }) => <input type='textarea' autoComplete='off' className="w-full rounded textarea textarea-bordered" {...field} placeholder='Description' invalid={errors.description && true} />}
//                                             />
//                                             {errors.description && <p className="text-xs text-red-600">{errors.description.message}</p>}
//                                         </div>

//                                     </div>
//                                 </div>
//                                 {/* end description  */}

//                                 <div className="grid grid-cols-2 gap-3 mb-2">
//                                     <div>
//                                         <div className="mb-3">
//                                             <label className="block mb-2 text-sm text-grey-600" > Name<span className='text-sm text-red-600'>*</span></label>
//                                             <Controller
//                                                 id='price'
//                                                 name='price'
//                                                 defaultValue=''
//                                                 control={control}
//                                                 render={({ field }) => <input type='number' min='1' autoComplete='off' className="w-full input input-bordered" {...field} placeholder='Price' invalid={errors.price && true} />}
//                                             />
//                                             {errors.price && <p className="text-xs text-red-600">{errors.price.message}</p>}
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className="mb-3">
//                                             <label className="block mb-2 text-sm text-grey-600" >Category<span className='text-sm text-red-600'>*</span></label>
//                                             <Select
//                                                 // style={{ minWidth: '150px !important' }}
//                                                 // theme={selectThemeColors}
//                                                 className='react-select'
//                                                 classNamePrefix='select'
//                                                 defaultValue={selectedCategory}
//                                                 name='clear'
//                                                 options={options}
//                                                 placeholder='Category'
//                                                 onChange={handleSelect}
//                                             />
//                                             {showError ? <p className="text-xs text-red-600">Please select category</p> : ''}

//                                             {/* {errors.selectedCategory && <p className="text-red-600">{errors.description.message}</p>} */}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* end description  */}

//                                 <div className="grid grid-cols-2 gap-3 mb-4">
//                                     <div className="div">
//                                         {/* <label className="block mb-2 text-sm text-grey-600" >Create At<span className='text-sm text-red-600'>*</span></label> */}
//                                         <div className="flex items-center gap-2">
//                                             {/* <Flatpickr
//                                         className='form-control'
//                                         // value={endTime}
//                                         defaultValue={selectedDate}
//                                         required
//                                         id='timepicker'
//                                         options={{
//                                             minDate: 'today',
//                                             enableTime: false,
//                                             dateFormat: "Y-m-d",
//                                         }}
//                                         onChange={date => setDate(date)}
//                                     /> */}
//                                             {/* <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 16 16"
//                                             fill="currentColor"
//                                             className="w-4 h-4 opacity-70">
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                                                 clipRule="evenodd" />
//                                         </svg> */}

//                                         </div>
//                                     </div>
//                                     <div className="div">
//                                         {/* <Flatpickr
//                                         className='form-control'
//                                         // value={endTime}
//                                         defaultValue={selectedDate}
//                                         required
//                                         id='timepicker'
//                                         options={{
//                                             minDate: 'today',
//                                             enableTime: false,
//                                             dateFormat: "Y-m-d",
//                                         }}
//                                         onChange={date => setDate(date)}
//                                     /> */}
//                                     </div>

//                                 </div>

//                                 <div className="mb-2 text-end">
//                                     {/* <button className="p-2 border rounded border-black-300 bg-black-800 w-60" onClick={reset()} type="submit" >Submit</button> */}
//                                     <button type='reset' className="p-2 bg-white border rounded btn w-25" onClick={() => handleModalClose()} >Cancel</button>
//                                     <button type='submit' className="ml-2 bg-white border rounded btn w-25 ">Submit</button>
//                                 </div>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default form