import { CircularProgress } from '@mui/material';
import style from './page.module.css';

export default function Loading() {
  return (
    <div className={style.loadingPageContainer}>
      <p>Loading...</p>
      <CircularProgress color='success' />
    </div>
  );
}
