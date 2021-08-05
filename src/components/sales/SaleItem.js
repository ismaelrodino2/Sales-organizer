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
        <li className="border-2">
            <Card>
                <div>
                    <h1>Date: </h1>
                    <p>{props.date}</p>
                </div>
                <div>
                    <h1>Buyer: </h1>
                    <p>{props.buyer}</p>
                </div>
                <div>
                    <h1>Sale: </h1>
                    <p>{props.sale}</p>
                </div>
                <div>
                    <h1>Unities: </h1>
                    <p>{props.unities}</p>
                </div>
                <div>
                    <button onClick={togglePrioritiesStatusHandler}>{itemIsPriorities ? "Remove from priorities" : "Add to priorities"}</button>
                    <button className={itemIsPriorities ? 'hidden' : null} onClick={() => toggleDeleteHandler(props.sales)}>Delete</button>
                </div>
            </Card>
        </li>
    )
}
