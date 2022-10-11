import { useContext } from 'react';
import FavoritesContex from '../store/FavoritesContext';
import MeetupList from '../components/meetups/MeetupsList';
import classes from '../components/layout/Loading.module.css'
import { useState } from 'react'

function FavoritesPage () {
    const favoriteCtx = useContext(FavoritesContex);
    const [isLoading, setIsLoading] = useState(true);
  
      fetch(
        "https://react-app-data-64675-default-rtdb.firebaseio.com/meetups.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = []
          
          for (const key in data) {
            const meetup = { id: key, ...data[key] };
            meetups.push(meetup);
          };
  
          setIsLoading(false);
        });
  
    if (isLoading) {
      return (
        <section>
          <p className={classes.loader}></p>
        </section>
      )
    }
    let content;

    if (favoriteCtx.totalFavorites === 0) {
    content = <p> There aren't any favotite meetups yet. Please add some</p>
    } else {
       content = <MeetupList items={favoriteCtx.favotites} />;
    }
  
      return (
        <section>
          <h1>List of Favorites</h1>
          {content}
        </section>
      );
  }
  

export default FavoritesPage;