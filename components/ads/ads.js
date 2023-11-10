import Link from "next/link";
import styles from "./ads.module.scss";
import { useAppState } from "../layout";
import Image from 'next/image';
const Ads =()=>{
    const { windowWidth,backHost } = useAppState();
    return(
        <>
        <div className={styles.root}>
            
            <div className={styles.firsttext}><b>Безопасность</b> и <b>удовольствие</b> в каждой покупке. </div>
            <Image width={800} height={800} alt="durex" src='/durex.webp' className={styles.img1}/> 
            <Image width={800} height={800} alt="hypster" src='/hypster.webp' className={styles.img2}/> 
            <Link href='/preparations/Презервативы' className={styles.secondtext}><b>Купить</b></Link>
        </div>
        </>
    )
};

export default Ads;