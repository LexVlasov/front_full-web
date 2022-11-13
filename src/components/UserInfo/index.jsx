import React from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={`${backHost}${avatarUrl}` || '/noavatar.png'} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};