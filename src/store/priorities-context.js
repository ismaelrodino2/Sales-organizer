import { createContext, useState } from "react";

const PrioritiesContext = createContext({
    priorities: [],
    totalPriorities: 0,
    addPriorities: (prioritiesData) => {},
    removePriorities: (DataId) => {},
    itemIsPriorities: (DataId) => {},
})

export function PrioritiesContextProvider(props){
    const [userPriorities, setUserPriorities] = useState([])

    function addPrioritiesHandler(prioritiesData){
        setUserPriorities((prevUserPriorities) => {
            return prevUserPriorities.concat(prioritiesData)
        })
    }

    function removePrioritiesHandler(DataId){
       setUserPriorities(prevUserPriorities => {
           return prevUserPriorities.filter(data => data.id !== DataId)
       }) 
    }

    function itemIsPrioritiesHandler(DataId){
        return userPriorities.some(data => data.id === DataId)
    }

    const context = {
        priorities: userPriorities,
        totalPriorities: userPriorities.length,
        addPriorities: addPrioritiesHandler,
        removePriorities: removePrioritiesHandler,
        itemIsPriorities: itemIsPrioritiesHandler,
    }

    return <PrioritiesContext.Provider value = {context}>
        {props.children}
    </PrioritiesContext.Provider>
}

export default PrioritiesContext