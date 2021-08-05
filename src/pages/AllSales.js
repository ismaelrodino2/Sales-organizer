import { useState, useEffect } from "react"
import { SaleList } from "../components/sales/SaleList"


export function AllSales(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedData, setLoadedData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch((process.env.REACT_APP_DATABASE_URL)
        ).then(response => {
            return response.json()
        }).then(data => {
            const sales = []

            for (const key in data){
                const sale = {
                    id: key,
                    ...data[key]
                }
                sales.push(sale)
            }
            setIsLoading(false)
            setLoadedData(sales)

        })
    }, [])


    const toggleDelete = function (sales){
        setLoadedData(loadedData.filter(data => data.id !== sales.id))
        console.log(sales)

    } 

    if (isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }


    return (
        <>
            <h1 className="text-2xl">All Sales</h1>
            <h2>Search</h2>
             <SaleList sales={loadedData} toggleDeleteHandler={toggleDelete} /> 
        </>
    )
}