import React, { Fragment, useEffect } from 'react'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import './Home.css'
import Product from './Product';
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/action/productAction';
import Loader from '../layout/Loader.js/Loader';
import { useSnackbar } from "notistack";

const Home = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { loading, products, productsCount, error } = useSelector((state) => state?.products)
    console.log("error", error);
    useEffect(() => {
        if (error) {
            return enqueueSnackbar(`${error}`, { variant: "error" });
        }
        dispatch(getProduct());
    }, [dispatch, error,enqueueSnackbar])

    return (
        <Fragment>{loading ? <Loader /> :
            <>
                <MetaData title={"Welcome to Ecommerce Home Page"} />
                <div className='banner'>
                    <p>Welcome to Ecommerce</p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>
                    <a href='#container'>
                        <button><span>Scroll</span> <MouseOutlinedIcon sx={{ fontSize: 20 }} /></button>
                    </a>
                </div>
                <h2 className='homeHeading'>Featured Products</h2>
                <div className='container' id='container'>
                    {
                        products && products.map((product) => {
                            return <Product product={product} />
                        })
                    }

                </div>
            </>
        }
        </Fragment>
    )
}

export default Home;