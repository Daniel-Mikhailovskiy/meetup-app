import classes from './MeetupsList.module.css'
import MeetupItem from './MeetupItem';



function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.items.map((item) => (
            <MeetupItem 
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                address={item.address}
                description={item.description}
            />))}
        </ul>
    );
}

export default MeetupList;
