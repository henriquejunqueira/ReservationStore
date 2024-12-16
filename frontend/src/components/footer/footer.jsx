import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import { LuInstagram, LuFacebook } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerRow}>
        <Link to={'/'}>
          <img src='/imgs/logo.png' alt='' />
        </Link>
        <div>
          {/* <h2>Important Links</h2> */}
          <div className={styles.linksContainer}>
            <Link className={styles.link} to={'/'}>
              Home
            </Link>
            <Link className={styles.link} to={'/plates'}>
              Plates
            </Link>
            <Link className={styles.link} to={'/cart'}>
              Cart
            </Link>
            <Link className={styles.link} to={'/profile'}>
              Profile
            </Link>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <a
            className={styles.linkSocialMedia}
            href='https://www.instagram.com/'
            target='_blank'
          >
            <LuInstagram /> Instagram
          </a>
          <a
            className={styles.linkSocialMedia}
            href='https://www.facebook.com/'
            target='_blank'
          >
            <LuFacebook /> Facebook
          </a>
          <a
            className={styles.linkSocialMedia}
            href='https://api.whatsapp.com/send?phone=0000000000000'
            target='_blank'
          >
            <FaWhatsapp /> Whatsapp
          </a>
        </div>
      </div>
      <div>
        Developed by Henrique Junqueira.{' '}
        <a
          href='https://www.linkedin.com/in/henrique-abreu-junqueira'
          target='_blank'
          className={styles.link}
        >
          See my projects!
        </a>
      </div>
    </footer>
  );
}
