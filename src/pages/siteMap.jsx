import React from 'react';
import axios from '../axios.js';


export const SiteMap = () => {
    const [sitemapData, setSitemapData] = React.useState('');
    React.useEffect(()=>{
        const fetchSiteMap = async () =>{
            try{
                const {data} = await axios.get('sitemap.xml');
                setSitemapData(data);
            }catch(e){
                console.error(e);
            }
        };
        fetchSiteMap();
    },[]);
    console.log(sitemapData);
    return(
       <div>
        <pre>{sitemapData}</pre>
       </div>
    )
};