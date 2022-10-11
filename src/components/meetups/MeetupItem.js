import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react'
import FavoritesContex from '../../store/FavoritesContext';

function MeetupItem(props) {

    const favoritesCtx = useContext(FavoritesContex);
    const itemIsFavorite = favoritesCtx.isFavorite(props.id);


    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                image:props.image,
                title: props.title,
                address: props.address,
                description: props.description
            })
        }
    }
    // function deleteMeetupHandler(id) {
    //     fetch(
    //       `https://react-app-data-64675-default-rtdb.firebaseio.com/meetups/${id}`,
    //       {
    //         method: "DELETE"
    //       }
    //     )
    //       .then((respond) => respond.json())
    //       .then((data) => console.log(data));
    // }

    return (
        <li className={classes.items}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{ (itemIsFavorite) ? 'Remove from Favorites' : 'To Favorites'}</button>
                <button className={classes.delete}>Delete</button>
            </div>
            </Card>
        </li>
    );
}

export default MeetupItem;