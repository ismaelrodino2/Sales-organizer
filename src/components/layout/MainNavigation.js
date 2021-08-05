import { useContext } from "react";
import { Link } from "react-router-dom";
import PrioritiesContext from "../../store/priorities-context";

export function MainNavigation() {
    const prioritiesCtx = useContext(PrioritiesContext)

    return(
        <header className="flex bg-green-300 place-content-between">
            <div><h2 className="text-3xl">Sales Organizer</h2></div>
            <nav className="text-3xl">
                <l1 className="px-6"><Link to='/'>All sales</Link></l1>
                <l1 className="px-6"><Link to='/add-sale'>Add sale</Link></l1>
                <l1 className="px-6"><Link to='/priorities'>Priorities
                    <span>{prioritiesCtx.totalPriorities}</span>
                </Link></l1>

            </nav>
        </header>
    )
}