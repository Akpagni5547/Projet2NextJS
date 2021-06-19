import Button from '../ui/button'
import {useRef} from 'react'
import classes from './events-search.module.css'
function EventSearch(props){
    const yearInputRef = useRef()
    const monthInputRef = useRef()
    console.log("helios1errrr")
    console.log(yearInputRef)
    console.log(monthInputRef)
    function submitHandler(event){
        event.preventDefault()
        const h = event.preventDefault()
        const selectedYear = yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value

        props.onSearch(selectedYear, selectedMonth)

        console.log("2eeeemm")
        console.log(selectedYear)
        console.log(event)
        console.log(h)

        console.log(selectedMonth)
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='year'>Année</label>
                    <select id='year' ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='month'>Mois</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">Janvier</option>
                        <option value="2">Février</option>
                        <option value="3">Mars</option>
                        <option value="4">Avril</option>
                        <option value="5">Mai</option>
                        <option value="6">Juin</option>
                        <option value="7">Juillet</option>
                        <option value="8">Aout</option>
                        <option value="9">Septembre</option>
                        <option value="10">Octobre</option>
                        <option value="11">Novembre</option>
                        <option value="12">Décembre</option>
                    </select>
                </div>
            </div>
            <Button>Trouver un évènement</Button>
        </form>
    )
}
export default EventSearch