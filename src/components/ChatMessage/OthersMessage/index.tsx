import React from 'react';
import styles from './styles.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface OthersMessageProps {
  author: string;
  content: string;
  date: Date;
}

export default function OthersMessage({
  author,
  content,
  date,
}: OthersMessageProps) {
  return (
    <div className={styles.container}>
      <h1>{author}</h1>
      <div className={styles.messageBox}>
        <div className={styles.message}>{content}</div>
        <p className={styles.time}>{dayjs(date).format('h:mm A')}</p>
      </div>
    </div>
  );
}
