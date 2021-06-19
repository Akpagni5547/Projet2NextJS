
import classes from './event-items.module.css'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

function EventItem(props) {
    console.log(props.title)
  const { title, image, date, location, id } = props;

  const conversionDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddres = location.replace(", ", "\n");
  const ExploredLink = `/events/${id}`;
  return (
    <li className={classes.item}>
       
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
          
          <div className={classes.date}>
            <DateIcon />
            <time>{conversionDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formattedAddres}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={ExploredLink}>
           <span> Liste des évènements </span>
           <span className={classes.icon}>
              <ArrowRightIcon/> 
              </span>
            </Button>
        </div>
        </div>
      
    </li>
  );
}
export default EventItem;
