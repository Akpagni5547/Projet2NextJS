import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import EventList from "../../components/events/event-list";
import ResultTitle from "../../components/events/results-title";
import ErrorAlert from '../../components/ui/error-alert'
function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Chargement...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return(
    <Fragment>
        <ErrorAlert>
      <p>Filtrage invalide. Veuillez saisir des valeurs correctes!</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Afficher tous les évènements</Button>
      </div>
    </Fragment>)
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
          <ErrorAlert>
        <p>Aucun élément trouver pour ce filtre choisi</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Afficher tous les évènements</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export default FilteredEventsPage;
