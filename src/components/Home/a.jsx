
import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'

// ** Third Party Components

import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import moment from 'moment'
import Select from 'react-select';

import CreateProduct from '../../components/Modal/form'

import { selectProductList, selectTotalEntry, setTotalEntry, setReFresh, selectReFresh } from '../../redux/slices/productsSlice';
 
const TablePage = () => {

  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [isFilterTable, setFilterTable] = useState()
  const Listing = useSelector(selectProductList)
  const isFresh = useSelector(selectReFresh)
  const [selectedCategory, setCategory] = useState();
  const [currentPage, setCurrentPage] = useState(0)
  const totalEntry = useSelector(selectTotalEntry)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const totalPage = 30
  // console.log('selectedCategory', selectedCategory,)
  const options = [
    { value: '', label: 'All' },
    { value: 'style', label: 'Style' },
    { value: 'bag', label: 'Bag' },
    { value: 'phone', label: 'Phone' },
  ];

  // const [pageCount, setPageCount] = useState(1)
  // const countPerPage = rowsPerPage

  useEffect(() => {
    setLoading(false)
    // dispatch(setProductsList(''))
    if (isFresh) {
      console.log('FreshData')
      dispatch(setReFresh(false))
    }
    dispatch(setTotalEntry(totalPage))
    const timeoutId = setTimeout(() => 3000)
    return function cleanup() {
      clearTimeout(timeoutId)
    }
  }, [isFresh])

  const filterData = (selectedFilter) => {
    if (selectedFilter) {
      const checkData = Listing.filter((item) => item?.category === selectedFilter)
      console.log('check', checkData)
      setFilterTable(checkData)
      // dispatch(setFilterTable(checkData))
    }

  }
  const handleFilter = (e) => {
    const selectedFilter = e?.value
    if (selectedFilter) {
      // console.log('selected', selectedFilter, e?.value)
      setCategory(selectedFilter)
      filterData(selectedFilter)  // pageCount
    } else {
      setCategory('')
    }
  }

  const handleSearch = (e) => {
    const searchKey = e?.target?.value
    if (searchKey) {
      console.log('search', searchKey)
      const searchData = Listing.find((item) => item?.name === searchKey);
      console.log('searchData', searchData)
      setCategory(searchKey)
      if (searchData) { setFilterTable([searchData]) }  // pageCount
    } else {
      setCategory('')
    }
  }
  const handlePerPage = e => {
    const selectedCount = parseInt(e.target.value)
    setRowsPerPage(selectedCount)
    // fetchData(pageCount, selectedCount)
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      nextLabel=''
      breakLabel='...'
      previousLabel=''
      pageRangeDisplayed={2}
      forcePage={currentPage}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      nextLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakLinkClassName='page-link'
      previousLinkClassName='page-link'
      nextClassName='page-item next-item'
      previousClassName='page-item prev-item'
      pageCount={Math.ceil(totalEntry / rowsPerPage) || 1}
      // pageCount={totalEntry || 1}
      onPageChange={page => handlePagination(page)}
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
    />
  )

  const columns = [
    {
      name: 'Sr. No.',
      cell: (row, index) => index + 1,
      minWidth: "70px",
    },
    {
      name: 'Name',
      selector: (row) => row.name ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.name}</span> : '--',
      minWidth: '200px'
    },

    {
      name: 'Description',
      selector: (row) => row.description ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.description}</span> : '--',
      className: 'onlyCapitalized',
      minWidth: '400px'
    },
    {
      name: 'Price',
      selector: (row) => row.price ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.price}</span> : '--',
      className: 'onlyCapitalized',
      minWidth: '150px'
    },
    {
      name: 'Category',
      selector: (row) => row.category ? <span style={{ whiteSpace: 'break-spaces', marginTop: '6px', marginBlock: '6px' }}
      >{row.category}</span> : '--',
      minWidth: '150px'
    },
    {
      name: 'Created Date',
      selector: (row) => moment(row.created_at).format("DD-MM-YYYY"),
      minWidth: '150px'
    },
    {
      name: 'Update Date',
      selector: (row) => moment(row.created_at).format("DD-MM-YYYY"),
      minWidth: '150px'
    },

  ]

  if (isLoading) {
    return (
      <>
        <Fragment>
          <div>
            <div className='parent'>
              <div className='myHeight'>
                {/* <Spinner color='success' /> */}
                <h5>Loading</h5>
              </div>
            </div>
          </div>
        </Fragment>
      </>
    )
  }

  const customStyle = {
    table: {
      style: {
        // border: '1px solid #E1E1E1',
      }
    },
    rows: {
      style: {
        fontSize: '14px',
        color: '#1c1c1c',
        fontWeight: '400',
      }
    },
    headCells: {
      style: {
        fontSize: '14px',
        color: '#1c1c1c',
        fontWeight: '700',
        border: '0.5px solid #E1E1E1',
        // borderStyle: 'solid',
        // borderColor: '#E1E1E1'
      }
    },
    cells: {
      style: {
        border: '0.5px solid #E1E1E1',
        // borderStyle: 'solid',
        // borderColor: '#E1E1E1'
      }
    }
  }
  return (

    <div>
      <div className="container py-4 mx-auto ">

        <div className="mb-5 lg:px-0 sm:px-5 title">
          <div className="grid lg:grid-cols-1 sm:grid-cols-2">
            <div><h4 className='mb-0 font-extrabold lg:text-2xl sm:text-sm'>General Ledger</h4></div>
            <div className='flex flex-row lg:col-end-5 sm-cols-1 justify-content-end align-items-center'>
              <CreateProduct />
              <button className="mx-2 btn-md btn">Show Chart</button>
              {/* <div className="m-lg-2">
                <button className="btn btn-outline">Create Product</button>
              </div>
              <div className="">
                <button className="btn btn-outline">Show Chart</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="shadow-xl card bg-base-100 table-inputs">
          <div className="grid gap-3 p-5 text-center lg:grid-cols-3 sm:grid-cols-1">
            <div className="text-center">
              <div className="">
                <label className="flex items-center w-full gap-2 input input-bordered search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type="text" className="grow" placeholder="Search" onChange={handleSearch} />
                </label>
              </div>
            </div>
            <div className="">
              <div className="filter">
                <Select
                  // style={{ minWidth: '150px !important' }}
                  // theme={selectThemeColors}
                  className='w-full text-left react-select border-grey'
                  classNamePrefix='select'
                  defaultValue={selectedCategory}
                  name='clear'
                  options={options}
                  placeholder='Filter by category'
                  onChange={handleFilter}
                />
              </div>
            </div>
            <div className="">
              <div className="div">
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full input input-bordered" />
              </div>
            </div>

          </div>

          {/* start table here */}

          <div className='grid grid-cols-1 py-5 mb-2'>
            <div className="w-full react-dataTable react-dataTable-selectable-rows">
              <DataTable
                //noHeader
                columns={columns}
                customStyles={customStyle}
                // className={Listing.length <= 3 ? 'custom-table' : 'react-dataTable striped'}
                // sortIcon={<ChevronDown size={10} />}
                data={selectedCategory ? isFilterTable : Listing}
                key={selectedCategory ? isFilterTable?.id : Listing?.id}
                pagination
                // paginationServer
              // paginationTotalRows={totalEntry}
              // paginationPerPage={countPerPage}
              // paginationComponentOptions={{ noRowsPerPage: true }}
              // onChangePage={(page) => setPageCount(page)}
              // paginationComponent={CustomPagination}
              // paginationDefaultPage={currentPage + 1}
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-3 gap-2 p-4 mb-3">
            <div className="div">
              <div className='flex p-1 pt-0 justify-items-start align-items-center'>
                <label className='text-xs'>show</label>
                <div>
                  <select
                    className='m-1 dataTable-select select-number-dropdown'
                    type='select'
                    id='sort-select'
                    value={rowsPerPage}
                    onChange={e => handlePerPage(e)}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={75}>75</option>
                    <option value={100}>100</option>
                  </select>
                </div>
                <label className='text-xs'>entries</label>
              </div>
            </div>
            <div className="text-xs text-center">{`${totalEntry} items`}</div>
            <div className="text-end1">
              {CustomPagination()}
            </div>

          </div> */}


        </div>
      </div>


    </div>

  );
}

export default TablePage;