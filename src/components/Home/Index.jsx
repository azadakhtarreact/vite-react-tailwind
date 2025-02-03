
import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'

// ** Third Party Components
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

const HomePage = () => {

    const dispatch = useDispatch()
    //   const isFresh = useSelector()


    useEffect(() => {

        const timeoutId = setTimeout(() => 3000)
        return function cleanup() {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
        <Fragment>
            <div className="container py-4 mx-auto">
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button>
                        count is {873}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>

            </div>

        </Fragment>

    );
}

export default HomePage;