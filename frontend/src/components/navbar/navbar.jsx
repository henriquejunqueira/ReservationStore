import styles from './navbar.module.css';
import { FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa';
import { Drawer } from '@mui/material';
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={styles.navbarContainer}>
      {/* Menu desktop e tablet */}
      <div className={styles.navbarItems}>
        <img className={styles.logo} src='/logo.png' alt='' />
        <div className={styles.navbarLinksContainer}>
          <a href='' className={styles.navbarLink}>
            Home
          </a>
          <a href='' className={styles.navbarLink}>
            Plates
          </a>
          <FaShoppingCart className={styles.navbarLink} />
          <FaUserCircle className={styles.navbarLink} />
        </div>
      </div>

      {/* Menu mobile */}
      <div className={styles.mobileNavbarItems}>
        <img className={styles.logo} src='/logo.png' alt='' />
        <div className={styles.mobileNavbarBtns}>
          <FaShoppingCart className={styles.navbarLink} />
          <FaBars className={styles.navbarLink} onClick={handleOpenMenu} />
        </div>
      </div>

      {/* Menu drawer */}
      <Drawer anchor='right' open={openMenu} onClose={handleOpenMenu}>
        <div className={styles.drawer}>
          <a href='' className={styles.navbarLink}>
            Home
          </a>
          <a href='' className={styles.navbarLink}>
            Plates
          </a>
          <a href='' className={styles.navbarLink}>
            Profile
          </a>
        </div>
      </Drawer>
    </nav>
  );
}
