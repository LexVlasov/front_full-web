import React, {useEffect,useState } from 'react';
import axios from '../../../components/axios';

import NextError from 'next/error';
import ProductInfo from '@/components/productinfo/productinfo';
export default function ProductPage(
    {
        statusCode,
        data,
        host,
        popularProduct
    }
) {
    return(
        <>
        {statusCode < 200 || statusCode>= 300?
        <NextError statusCode={statusCode} /> :
        <ProductInfo data={data} host={host} popularProduct={popularProduct}/>
         } 
        </>
        
    )
};

export async function getServerSideProps(context) {
    const { type,id } = context.query;
    let data = null;
    let statusCode = 200;
    let response
    const host = context.req.headers.host + '/preparations/'+type + '/'+id;
    let product;
    let popularProduct = null;
    try {
        if (id) {
            response = await axios.get(`/${type}/${id}`);
            statusCode = response ? response.status : '';
            data =  response ? response.data : '';
            product = await axios.get(`/popular/`);
            popularProduct =  product ? product.data : '';
        }
    } catch (error) {
        console.warn(error);
        context.res.statusCode = error.response?.status || 500;
        statusCode = error.response?.status || 500;
    }
    return {
        props: {
            statusCode, 
            data,
            host,
            popularProduct,
        },
    };
}