
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupsList";
import classes from '/Users/user/react-app/src/components/layout/Loading.module.css'



function AllMeetupsPage () {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true) 
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
        setLoadedMeetups(meetups);
      });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p className={classes.loader}></p>
      </section>
    )
  }

    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList items={loadedMeetups} />
      </section>
    );
}

export default AllMeetupsPage;