import { useRef } from 'react'
import Card from '../ui/Card'

export function NewSaleForm(props){
    const dateInputRef = useRef()
    const buyerInputRef = useRef()
    const saleInputRef = useRef()
    const unitiesInputRef = useRef()



    function submitHandler(event){
        event.preventDefault()

        const enteredDate = dateInputRef.current.value
        const enteredBuyer = buyerInputRef.current.value
        const enteredSale = saleInputRef.current.value
        const enteredUnities = unitiesInputRef.current.value

        const salesData = {
            date: enteredDate,
            buyer: enteredBuyer,
            sale: enteredSale,
            unities: enteredUnities,
        }
        props.onAddData(salesData)

    }


    return(
        <Card>
            <form action="" onSubmit={submitHandler}>
                <div className="py-2">
                    <label htmlFor="date">Date: </label>
                    <input type="text" className="outline-none rounded-2xl " required id="date" ref={dateInputRef} />
                </div>
                <div className="py-2">
                    <label htmlFor="buyer">Buyer: </label>
                    <input type="text" className="outline-none rounded-2xl" required id="buyer" ref={buyerInputRef} />
                </div>
                <div className="py-2">
                    <label htmlFor="sale">sale: </label>
                    <input type="text" className="outline-none rounded-2xl" required id="sale" ref={saleInputRef}/>
                </div>
                <div className="py-2">
                    <label htmlFor="unities">unities: </label>
                    <input type="number" className="outline-none rounded-2xl" required id="unities" ref={unitiesInputRef} />
                </div>
                <div className="py-4 buttons">
                    <button >Add sale data</button>
                </div>
            </form>
            
        </Card>
    )
}
