import classes from "/Users/user/react-app/src/components/layout/SubmittionForm.module.css"


function SubmittionForm(props) {

   return (
     <div className={classes.modal}>
       <h2>Your New Meetup has been successfully added!</h2>
       <button className={classes.btn} onClick={props.onClick} >OK</button>
     </div>
   );
};

function BackdropModul(props) {
  return <div className={classes.backdrop}/>
}
export {SubmittionForm , BackdropModul}
