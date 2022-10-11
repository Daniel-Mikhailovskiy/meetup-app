import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesContex from '../../store/FavoritesContext';



function MainNavigation() {

  const favoriteCtx = useContext(FavoritesContex);

    return (
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>React Meetups</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetups</Link>
            </li>
            <li>
              <Link to="/favorites">
                Favorites
                <span className={classes.badge}>
                  {favoriteCtx.totalFavorites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation