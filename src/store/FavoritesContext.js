
import { createContext, useState } from "react";

const FavoritesContex = createContext({
    favotites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    isFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {

    const[userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
      setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.concat(favoriteMeetup);
      });
    }
    function removeFavoriteHandler(meetupId) {
      setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      });
    }
    function itemIsFavorite(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
      favotites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoriteHandler,
      removeFavorite: removeFavoriteHandler,
      isFavorite: itemIsFavorite
    };

    return (
      <FavoritesContex.Provider value={context}>
        {props.children}
      </FavoritesContex.Provider>
    );
}

export default FavoritesContex;