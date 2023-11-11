import styles from "../components/all.module.scss";
import Image from 'next/image';
const Certificates = () =>{
    const imgArray = [
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/CENFORCE-150-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/CENFORCE-200-Centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/CENFORCE-FM-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/CENFORCE-SOFT-100-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/Tadalista-20-t-cenforce.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VIDALISTA-5-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VIDALISTA-20-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VIDALISTA-40-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VIDALISTA-PROFESSIONAL-cenforce.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VILITRA-10-centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VILITRA-20-Centurion.jpg',
        process.env.NEXT_PUBLIC_API_URL + '/uploads/certificates/VILITRA-40-centurion.jpg',
    ];
    const cntImg = [1,2,3];
    return(
        <div className={styles.about}>
            <title>Сертификаты! У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
            <h1 style={{marginBottom:"30px",fontWeight:"700"}}>Сертификаты</h1>
            {cntImg.map((obj,i)=>(
                <div key={i}>
                <Image src={imgArray[obj*0]} width={800} height={800} style={{margin:"10px 10px 10px 10px"}} alt={imgArray[obj*0].split('/')[5].split('.')[0]}/>
                <Image src={imgArray[obj*1]} width={800} height={800} style={{margin:"10px 10px 10px 10px"}} alt={imgArray[obj*1].split('/')[5].split('.')[0]}/> 
                <Image src={imgArray[obj*2]} width={800} height={800} style={{margin:"10px 10px 10px 10px"}} alt={imgArray[obj*2].split('/')[5].split('.')[0]}/> 
                <Image src={imgArray[obj*3]} width={800} height={800} style={{margin:"10px 10px 10px 10px"}} alt={imgArray[obj*3].split('/')[5].split('.')[0]}/> 
                </div>
            ))}
        </div>
    )
};

export default Certificates;