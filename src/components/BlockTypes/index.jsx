import React from "react";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Skeleton from "@mui/material/Skeleton";
import styles from "./TypesBlock.module.scss"

export const TypesBlock = ({ title,items, isLoading = true }) => {

  return (
    <><div className={styles.main}>
      <h4>{title}</h4>
      
      <ul className={styles.root}>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a
            className={styles.a}
            href={`/types/${name}`}
          >
            <li key={i} className={styles.li}>                
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <>
                  <div className={styles.div}>{name} <ChevronRightIcon /></div> 
                  </>
                )}
            </li>
          </a>
        ))}
      </ul>
</div>
</>
  );
};