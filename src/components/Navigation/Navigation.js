import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={styles.header}>
    <nav>
      <NavLink
        
        to="/"
        className={styles.link}
        // activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="movies"
        className={styles.link}
        // activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>      
    </nav>
    </header>
  );
}
