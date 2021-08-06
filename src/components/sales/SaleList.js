import { SaleItem } from "./SaleItem"

export function SaleList(props) {
    const {toggleDeleteHandler} = props
    return(
        <>
            <ul>
                {props.sales.map(item => <SaleItem
                    sales = {item}
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    buyer={item.buyer}
                    unities={item.unities}
                    sale={item.sale}
                    toggleDeleteHandler={toggleDeleteHandler}
                />)}
            </ul>
        </>
    )
}
