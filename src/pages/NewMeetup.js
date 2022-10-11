import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SubmittionForm } from "../components/layout/SubmittionForm";
import { BackdropModul } from "../components/layout/SubmittionForm";

function NewMeetupsPage (props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function navigateFunction() {
    navigate("/", { replace: true });
  };

  function modalHendler() {
    setModalIsOpen(true)
  }

    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch(
          "https://react-app-data-64675-default-rtdb.firebaseio.com/meetups.json",
          {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then(modalHendler)
};
 
    return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        {modalIsOpen && <SubmittionForm onClick={navigateFunction}/>}
        {modalIsOpen && <BackdropModul/>}
      </section>
    );
}

export default NewMeetupsPage;