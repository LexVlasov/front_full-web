import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, fetchTypes } from '../redux/slices/posts';

export const SiteMap = () => {
    const dispatch = useDispatch();
  
    const {allgood,types} = useSelector((state) => state.goods);
    const isPostsLoading =allgood.status==='loading';
    const isTagsLoading =types.status==='loading';
    React.useEffect(()=>{
      dispatch(fetchGoods());
      dispatch(fetchTypes());
     
     },[]);
    console.log(allgood);
    return(
        `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
            <loc>https://pharmacy.one-pill.net/</loc>
            <lastmode>2023-06-08</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            </url>
            <url>
            <loc>https://pharmacy.one-pill.net/checkout</loc>
            <lastmode>2023-06-08</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            </url>
            <url>
            <loc>https://pharmacy.one-pill.net/about</loc>
            <lastmode>2023-06-08</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            </url>
            <url>
            <loc>https://pharmacy.one-pill.net/contact</loc>
            <lastmode>2023-06-08</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            </url>
        ${(isPostsLoading?[...Array(5)]:allgood.items).map((obj,ind)=>(
            isPostsLoading ? '' :
            `<url>
            <loc>https://pharmacy.one-pill.net/${obj._id}</loc>
            <lastmode>2023-06-08</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            </url>`
        ))}
        ${(isTagsLoading?[...Array(5)]:types.items).map((obj,ind)=>(
            isTagsLoading ? '' :
            `<url>
            <loc>https://pharmacy.one-pill.net/${obj.group_type}</loc>
            <lastmode>2023-06-08</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
            </url>`
        ))}
        </urlset>`

    )
};