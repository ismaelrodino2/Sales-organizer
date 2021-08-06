import { useContext } from "react"
import PrioritiesContext from "../../store/priorities-context"
import Card  from "../ui/Card"


export function SaleItem(props){
    
    const {toggleDeleteHandler} = props

    const prioritiesCtx = useContext(PrioritiesContext)
    
    const itemIsPriorities = prioritiesCtx.itemIsPriorities(props.id)

    function togglePrioritiesStatusHandler(){
        if (itemIsPriorities) {
            prioritiesCtx.removePriorities(props.id)
        } else{
            prioritiesCtx.addPriorities({
                id: props.id,
                date: props.date,
                buyer: props.buyer,
                sale: props.sale,
                unities: props.unities,
                
            })
        }
    }

    return(
        <li className="flex flex-col items-center px-6 py-1">
            <Card>
                <div className="flex w-56 py-1 md:w-96">
                    <h1>Date: </h1>
                    <p>{props.date}</p>
                </div>
                <div className="flex py-1">
                    <h1>Buyer: </h1>
                    <p>{props.buyer}</p>
                </div>
                <div className="flex py-1">
                    <h1>Sale: </h1>
                    <p>{props.sale}</p>
                </div>
                <div className="flex py-1">
                    <h1>Unities: </h1>
                    <p>{props.unities}</p>
                </div>
                <div className="flex justify-between py-2 buttons">
                    <button  onClick={togglePrioritiesStatusHandler}>{itemIsPriorities ? "Remove" : "Add" }</button>
                    <button  className={itemIsPriorities ? 'hidden' : null} onClick={() => toggleDeleteHandler(props.sales)}>Delete</button>
                </div>
            </Card>
        </li>
    )
}
