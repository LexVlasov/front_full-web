import Ads from '@/components/ads/ads';
import Popular from '@/components/popular/popular';
import axios from '../components/axios';
import OneClick from '@/components/oneclick/oneclick';
import Sale from '@/components/sale/sale';
import DeliveryAndPayment from '@/components/deliveryandpayment/deliveryandpayment';



export default function Home({
  popularProduct,
  saleProduct
}) {
  let ie_search = [];
  popularProduct.map((pr,i)=>{
    ie_search.push(pr.ie_search);
  })
  return (
    <>
      <title>Хотите купить дженерики Виагры дешево в Москве? У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
      <meta name="description" content="Добро пожаловать в интернет-аптеку One Pill в Москве! У нас вы найдете широкий выбор дженериков виагры, левитры, сиалиса, БАД для здоровья, презервативов, женской виагры и многое другое. Гарантируем качественный сервис и быструю доставку в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Все оттенки твоих желаний... +7(800)511-31-02"/>
      <meta name="keywords" content={ie_search} />
      <Ads/>
      <Popular popularProduct={popularProduct}/>
      <OneClick/>
      <Sale saleProduct={saleProduct} />
      <DeliveryAndPayment/>
    </>
  )
}


export async function getServerSideProps() {

    let popularProduct = null;
    let saleProduct = null;
    let product;
    let sale;

    try {

      product = await axios.get(`/popular/`);
      popularProduct =  product ? product.data : '';
      sale = await axios.get(`/sale/`);
      saleProduct = sale ? sale.data : '';
    } catch (error) {
        console.warn(error);
    }
    return {
        props: {
            popularProduct,
            saleProduct,
        },
    };
  
};