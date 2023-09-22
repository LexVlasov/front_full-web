import styles from "./404.module.scss";
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import {Link} from 'react-router-dom';
import Image from "../../uploads/mainInfo/logo.png";
import {Helmet} from "react-helmet";

export const Error404 = ({setCurrentPath}) =>{
    return(

        <div>
        <Helmet>
          <title>404 - Page Not Found</title>
        </Helmet>
        <Box sx={{ flexGrow: 1 }} className={styles.root}>
            <Grid container spacing={1} direction="row">
            <div className={styles.headergrid}>
                <Link to={'/'} onClick={()=>setCurrentPath('/')}><img src={Image} alt='One Pill' style={{width:"90px",height:"90px", margin:"0 auto", verticalAlign:"middle",display:"inline-block"}} />
                    <div className={styles.name}>
                    <div className={styles.head}>One Pill
                    </div>
                    <div className={styles.subhead}>Все оттенки твоих желаний...</div>
                    </div></Link>
            </div>

            </Grid>
        </Box>
        <div className={styles.error404}>
            <b>Ошибка 404</b>
        </div>
        <div className={styles.texterror}>
            <b>Упс.... страница не найдена</b>
        </div>
        </div>
    )
}