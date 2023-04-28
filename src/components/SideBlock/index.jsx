import React from "react";
import styles from "./SideBlock.module.scss";


export const SideBlock = ({ title, children }) => {
  return (
    <div classes={{ root: styles.root }}>
      {children}
    </div>
  );
};