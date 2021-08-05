import {useHistory} from 'react-router-dom'

import { NewSaleForm } from "../components/sales/NewSaleForm"

export function AddSale(){

    const history = useHistory()

    function addDataHandler(salesData){
        fetch((process.env.REACT_APP_DATABASE_URL),
        {
            method: 'POST', 
            body: JSON.stringify(salesData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add new data</h1>
            <NewSaleForm onAddData={addDataHandler} />
        </section>
    )
}
