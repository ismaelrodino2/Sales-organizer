import { useContext } from "react"
import PrioritiesContext from "../store/priorities-context"
import { SaleList } from "../components/sales/SaleList"
import { Alarm } from "../components/alarm/Alarm"

export function Priorities(){
    const prioritiesCtx = useContext(PrioritiesContext)

    let content

    if (prioritiesCtx.totalPriorities === 0){
        content = <p>You got no priorities yet.</p>
    } else{
        content = <SaleList sales = {prioritiesCtx.priorities} />
    }



    return (
        <section className="flex flex-col items-center p-5 bg-darkgray rounded-2xl">
            <h1>My Priorities</h1>
            {content}            
            <Alarm />
        </section>
    )
}
